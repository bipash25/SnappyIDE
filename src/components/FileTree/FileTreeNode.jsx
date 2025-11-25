import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useFileSystem } from '../../contexts/FileSystemContext';
import FileIcon from './FileIcon';

export default function FileTreeNode({ node, depth = 0, onContextMenu }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { openFile, activeFileIndex, openFiles, moveItem } = useFileSystem();
    const [isDragOver, setIsDragOver] = useState(false);

    const [isDragging, setIsDragging] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        if (node.isDirectory) {
            setIsExpanded(!isExpanded);
        } else {
            openFile(node);
        }
    };

    const handleContextMenu = (e) => {
        if (onContextMenu) {
            onContextMenu(e, node);
        }
    };

    const handleDragStart = (e) => {
        // e.stopPropagation(); // Allow bubbling
        e.dataTransfer.setData('text/plain', node.path);
        e.dataTransfer.effectAllowed = 'all'; // Try 'all' to be safe
        setIsDragging(true);
    };

    const handleDragEnd = (e) => {
        setIsDragging(false);
        setIsDragOver(false);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (node.isDirectory) {
            setIsDragOver(true);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Stop bubbling so parents don't highlight
        
        // UX: Allow dropping on files (to move to their parent)
        e.dataTransfer.dropEffect = 'move';
        
        // Only visually highlight if we are hovering a directory
        if (node.isDirectory) {
            setIsDragOver(true);
        }
    };

    // 2. FIX: Flicker Logic
    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // CRITICAL: Only disable highlight if cursor actually leaves the container
        // (Ignores transitions to children like text or icons)
        if (e.currentTarget.contains(e.relatedTarget)) {
            return;
        }
        
        setIsDragOver(false);
    };

    // 3. FIX: Sibling Drops & Parent Logic
    const handleDrop = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);

        const sourcePath = e.dataTransfer.getData('text/plain');
        if (!sourcePath) return;

        // Determine the actual destination
        let targetPath = node.path;

        // If dropping onto a FILE, we actually want to drop into its PARENT folder
        if (!node.isDirectory) {
            const separator = node.path.includes('\\') ? '\\' : '/';
            targetPath = node.path.substring(0, node.path.lastIndexOf(separator));
        }

        // Send to context (which handles the "Folder into Self" safety check)
        await moveItem(sourcePath, targetPath);
    };

    const isActive = !node.isDirectory && openFiles[activeFileIndex]?.path === node.path;

    return (
        <div>
            <div
                className={`flex items-center py-1 px-2 cursor-pointer text-sm select-none ${isActive ? 'bg-primary/20 text-white' : 'text-[#CCCCCC]'} ${isDragOver ? 'bg-primary/40 border-2 border-primary' : 'hover:bg-white/10'} ${isDragging ? 'opacity-50' : ''}`}
                style={{ paddingLeft: `${depth * 12 + 8}px` }}
                onClick={handleClick}
                onContextMenu={handleContextMenu}
                draggable={true}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <span className="mr-1 text-[#CCCCCC] pointer-events-none">
                    {node.isDirectory ? (
                        // Only show Chevron if children exist
                        (node.children && node.children.length > 0) ? (
                            isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                        ) : (
                            // Empty folder spacer (optional: prevents empty folders from looking like files)
                            <span className="w-4 h-4 inline-block opacity-50" />
                        )
                    ) : (
                        <span className="w-4 h-4 inline-block" />
                    )}
                </span>

                <span className="mr-2 pointer-events-none">
                    <FileIcon
                        name={node.name}
                        isDirectory={node.isDirectory}
                        isExpanded={isExpanded}
                        className="w-4 h-4"
                    />
                </span>

                <span className="truncate pointer-events-none">{node.name}</span>
            </div>

            {node.isDirectory && isExpanded && node.children && (
                <div>
                    {node.children.map((child) => (
                        <FileTreeNode
                            key={child.path}
                            node={child}
                            depth={depth + 1}
                            onContextMenu={onContextMenu}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
