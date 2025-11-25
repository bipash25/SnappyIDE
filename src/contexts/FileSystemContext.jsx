import React, { createContext, useContext, useState, useEffect } from 'react';
import { open } from '@tauri-apps/plugin-dialog';
import { readDir, readTextFile, writeTextFile, mkdir, remove, rename, exists } from '@tauri-apps/plugin-fs';
import { invoke } from '@tauri-apps/api/core';

const FileSystemContext = createContext();

export function useFileSystem() {
    return useContext(FileSystemContext);
}

export function FileSystemProvider({ children }) {
    const [rootPath, setRootPath] = useState(null);
    const [fileTree, setFileTree] = useState([]);
    const [openFiles, setOpenFiles] = useState([]);
    const [activeFileIndex, setActiveFileIndex] = useState(-1);

    const openFolder = async () => {
        try {
            const selected = await open({
                directory: true,
                multiple: false,
            });

            if (selected) {
                setRootPath(selected);
                const tree = await buildFileTree(selected);
                setFileTree(tree);
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error opening folder:", error);
            return false;
        }
    };

    const buildFileTree = async (path) => {
        try {
            const entries = await readDir(path);
            const tree = [];

            for (const entry of entries) {
                // Handle path separator based on the input path format
                // If path contains backslash, use backslash, otherwise use forward slash
                const separator = path.includes('\\') ? '\\' : '/';
                const fullPath = `${path}${separator}${entry.name}`;

                const node = {
                    name: entry.name,
                    path: fullPath,
                    isDirectory: entry.isDirectory,
                    children: entry.isDirectory ? await buildFileTree(fullPath) : null,
                };
                tree.push(node);
            }

            // Sort: Directories first, then files
            tree.sort((a, b) => {
                if (a.isDirectory === b.isDirectory) {
                    return a.name.localeCompare(b.name);
                }
                return a.isDirectory ? -1 : 1;
            });

            return tree;
        } catch (error) {
            console.error("Error building file tree:", error);
            return [];
        }
    };

    const refreshFileTree = async () => {
        if (rootPath) {
            const tree = await buildFileTree(rootPath);
            setFileTree(tree);
        }
    };

    const openFile = async (fileNode) => {
        if (fileNode.isDirectory) return;

        // Check if already open
        const existingIndex = openFiles.findIndex(f => f.path === fileNode.path);
        if (existingIndex !== -1) {
            setActiveFileIndex(existingIndex);
            return;
        }

        try {
            const content = await readTextFile(fileNode.path);

            const newFile = {
                ...fileNode,
                content,
                language: getLanguageFromExtension(fileNode.name),
                isDirty: false
            };

            setOpenFiles([...openFiles, newFile]);
            setActiveFileIndex(openFiles.length);
        } catch (error) {
            console.error("Error reading file:", error);
        }
    };

    const closeFile = (index) => {
        const newFiles = openFiles.filter((_, i) => i !== index);
        setOpenFiles(newFiles);

        if (activeFileIndex >= index && activeFileIndex > 0) {
            setActiveFileIndex(activeFileIndex - 1);
        } else if (newFiles.length === 0) {
            setActiveFileIndex(-1);
        } else if (activeFileIndex === index) {
            setActiveFileIndex(Math.min(index, newFiles.length - 1));
        }
    };

    const closeOtherFiles = (index) => {
        const fileToKeep = openFiles[index];
        setOpenFiles([fileToKeep]);
        setActiveFileIndex(0);
    };

    const closeFilesToRight = (index) => {
        const newFiles = openFiles.slice(0, index + 1);
        setOpenFiles(newFiles);
        if (activeFileIndex > index) {
            setActiveFileIndex(index);
        }
    };

    const closeAllFiles = () => {
        setOpenFiles([]);
        setActiveFileIndex(-1);
    };

    const updateFileContent = (index, content) => {
        const newFiles = [...openFiles];
        newFiles[index].content = content;
        newFiles[index].isDirty = true;
        setOpenFiles(newFiles);
    };

    const saveFile = async (index) => {
        const file = openFiles[index];
        try {
            await writeTextFile(file.path, file.content);
            const newFiles = [...openFiles];
            newFiles[index].isDirty = false;
            setOpenFiles(newFiles);
        } catch (error) {
            console.error("Error saving file:", error);
        }
    };

    const createFile = async (parentPath, name) => {
        try {
            const separator = parentPath.includes('\\') ? '\\' : '/';
            const fullPath = `${parentPath}${separator}${name}`;
            await writeTextFile(fullPath, '');
            await refreshFileTree();
            return true;
        } catch (error) {
            console.error("Error creating file:", error);
            return false;
        }
    };

    const createFolder = async (parentPath, name) => {
        try {
            const separator = parentPath.includes('\\') ? '\\' : '/';
            const fullPath = `${parentPath}${separator}${name}`;
            await mkdir(fullPath);
            await refreshFileTree();
            return true;
        } catch (error) {
            console.error("Error creating folder:", error);
            return false;
        }
    };

    const deleteItem = async (path) => {
        try {
            // Check if it's a directory or file first to use correct remove options if needed
            // For now, using remove which handles both (recursive for dirs if specified)
            await remove(path, { recursive: true });

            // Close file if it's open
            const openIndex = openFiles.findIndex(f => f.path === path);
            if (openIndex !== -1) {
                closeFile(openIndex);
            }

            await refreshFileTree();
            return true;
        } catch (error) {
            console.error("Error deleting item:", error);
            return false;
        }
    };

    const renameItem = async (oldPath, newName) => {
        try {
            const separator = oldPath.includes('\\') ? '\\' : '/';
            const parentPath = oldPath.substring(0, oldPath.lastIndexOf(separator));
            const newPath = `${parentPath}${separator}${newName}`;

            await rename(oldPath, newPath);

            // Update open files if necessary
            const openIndex = openFiles.findIndex(f => f.path === oldPath);
            if (openIndex !== -1) {
                const newFiles = [...openFiles];
                newFiles[openIndex].path = newPath;
                newFiles[openIndex].name = newName;
                setOpenFiles(newFiles);
            }

            await refreshFileTree();
            return true;
        } catch (error) {
            console.error("Error renaming item:", error);
            return false;
        }
    };

    const moveItem = async (sourcePath, targetFolderPath) => {
        try {
            // 1. Normalize paths to ensure consistency (handle Windows backslashes)
            const normalize = (p) => p.replace(/\\/g, '/');
            const cleanSource = normalize(sourcePath);
            const cleanTarget = normalize(targetFolderPath);

            // 2. SAFETY CHECK: Prevent moving a folder into itself or its children
            // We check if target starts with source AND ensure it's a directory boundary (using /)
            if (cleanTarget === cleanSource || cleanTarget.startsWith(cleanSource + '/')) {
                console.warn("Operation cancelled: Cannot move a folder into itself.");
                return false;
            }

            // 3. Prepare new path
            const separator = sourcePath.includes('\\') ? '\\' : '/';
            const fileName = sourcePath.split(separator).pop();
            const newPath = `${targetFolderPath}${separator}${fileName}`;

            // 4. Prevent unnecessary API calls if path is same
            if (sourcePath === newPath) return false;

            // 5. SAFETY CHECK: Check for overwrite (Optional: Add 'ask' dialog here if preferred)
            if (await exists(newPath)) {
                console.warn(`Cannot move: '${fileName}' already exists in destination.`);
                return false;
            }

            // 6. Perform the OS Move
            await rename(sourcePath, newPath);

            // 7. CRITICAL STATE FIX: Update paths for ALL open files affected by this move
            const newFiles = openFiles.map(file => {
                // Case A: The file itself was moved
                if (file.path === sourcePath) {
                    return { ...file, path: newPath, name: fileName };
                }

                // Case B: The file is INSIDE the moved directory
                // We use normalized paths to safely check the prefix
                if (normalize(file.path).startsWith(cleanSource + '/')) {
                    // Calculate the relative path suffix
                    const suffix = file.path.substring(sourcePath.length);
                    return { ...file, path: newPath + suffix };
                }

                // Case C: Unaffected file
                return file;
            });

            setOpenFiles(newFiles);
            await refreshFileTree();
            return true;

        } catch (error) {
            console.error("Error moving item:", error);
            return false;
        }
    };

    const getLanguageFromExtension = (filename) => {
        const ext = filename.split('.').pop().toLowerCase();
        const map = {
            'js': 'javascript',
            'jsx': 'javascript',
            'ts': 'typescript',
            'tsx': 'typescript',
            'rs': 'rust',
            'html': 'html',
            'css': 'css',
            'json': 'json',
            'md': 'markdown',
            'py': 'python',
            'java': 'java',
            'c': 'c',
            'cpp': 'cpp',
        };
        return map[ext] || 'plaintext';
    };

    return (
        <FileSystemContext.Provider value={{
            rootPath,
            fileTree,
            openFiles,
            activeFileIndex,
            setActiveFileIndex,
            openFolder,
            openFile,
            closeFile,
            updateFileContent,
            saveFile,
            createFile,
            createFolder,
            deleteItem,
            renameItem,
            moveItem,
            closeOtherFiles,
            closeFilesToRight,
            closeAllFiles
        }}>
            {children}
        </FileSystemContext.Provider>
    );
}
