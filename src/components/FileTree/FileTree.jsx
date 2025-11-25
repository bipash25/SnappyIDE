import React, { useState } from 'react';
import { useFileSystem } from '../../contexts/FileSystemContext';
import FileTreeNode from './FileTreeNode';
import ContextMenu from './ContextMenu';
import { ask } from '@tauri-apps/plugin-dialog';

export default function FileTree() {
    const { rootPath, fileTree, createFile, createFolder, renameItem, deleteItem, moveItem } = useFileSystem();
    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (e, node) => {
        e.preventDefault();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            node: node
        });
    };

    const handleCloseContextMenu = () => {
        setContextMenu(null);
    };

    const handleAction = async (action) => {
        if (!contextMenu || !contextMenu.node) return;

        const { node } = contextMenu;

        // Determine target path for new file/folder
        // If directory, use it. If file, use parent.
        const separator = node.path.includes('\\') ? '\\' : '/';
        let targetPath = node.isDirectory ? node.path : node.path.substring(0, node.path.lastIndexOf(separator));

        handleCloseContextMenu();

        switch (action) {
            case 'newFile': {
                const name = window.prompt("Enter file name:");
                if (name) await createFile(targetPath, name);
                break;
            }
            case 'newFolder': {
                const name = window.prompt("Enter folder name:");
                if (name) await createFolder(targetPath, name);
                break;
            }
            case 'rename': {
                const newName = window.prompt("Enter new name:", node.name);
                if (newName && newName !== node.name) await renameItem(node.path, newName);
                break;
            }
            case 'delete': {
                const yes = await ask(`Are you sure you want to delete ${node.name}?`, {
                    title: 'Snappy',
                    kind: 'warning'
                });
                if (yes) {
                    await deleteItem(node.path);
                }
                break;
            }
        }
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        const sourcePath = e.dataTransfer.getData('text/plain');
        if (sourcePath && rootPath) {
            await moveItem(sourcePath, rootPath);
        }
    };

    if (!rootPath) {
        return (
            <div className="p-4 text-center text-[#808080] text-sm">
                No folder opened
            </div>
        );
    }

    return (
        <div
            className="select-none h-full"
            onContextMenu={(e) => {
                // e.preventDefault(); 
            }}
            onDragOver={(e) => {
                e.preventDefault();
            }}
            onDrop={handleDrop}
        >
            {fileTree.map((node) => (
                <FileTreeNode
                    key={node.path}
                    node={node}
                    level={0}
                    onContextMenu={handleContextMenu}
                />
            ))}

            {contextMenu && (
                <ContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    targetNode={contextMenu.node}
                    onClose={handleCloseContextMenu}
                    onAction={handleAction}
                />
            )}
        </div>
    );
}
