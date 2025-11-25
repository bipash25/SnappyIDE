import React, { useEffect, useRef } from 'react';
import { FilePlus, FolderPlus, Edit2, Trash2, Copy } from 'lucide-react';

export default function ContextMenu({ x, y, onClose, onAction, targetNode }) {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    // Adjust position if menu goes off screen
    const style = {
        top: y,
        left: x,
    };

    return (
        <div
            ref={menuRef}
            className="fixed z-50 bg-[#1e2d3b] border border-white/10 rounded shadow-xl py-1 min-w-[160px]"
            style={style}
        >
            <div className="px-3 py-1.5 text-xs text-[#808080] border-b border-white/10 mb-1 truncate max-w-[200px]">
                {targetNode?.name}
            </div>

            <button
                className="w-full text-left px-3 py-1.5 text-sm text-[#d4d4d4] hover:bg-primary hover:text-white flex items-center gap-2"
                onClick={() => onAction('newFile')}
            >
                <FilePlus className="w-4 h-4" />
                New File
            </button>
            <button
                className="w-full text-left px-3 py-1.5 text-sm text-[#d4d4d4] hover:bg-primary hover:text-white flex items-center gap-2"
                onClick={() => onAction('newFolder')}
            >
                <FolderPlus className="w-4 h-4" />
                New Folder
            </button>

            <div className="my-1 border-t border-white/10"></div>

            <button
                className="w-full text-left px-3 py-1.5 text-sm text-[#d4d4d4] hover:bg-primary hover:text-white flex items-center gap-2"
                onClick={() => onAction('rename')}
            >
                <Edit2 className="w-4 h-4" />
                Rename
            </button>
            <button
                className="w-full text-left px-3 py-1.5 text-sm text-red-400 hover:bg-red-500 hover:text-white flex items-center gap-2"
                onClick={() => onAction('delete')}
            >
                <Trash2 className="w-4 h-4" />
                Delete
            </button>
        </div>
    );
}
