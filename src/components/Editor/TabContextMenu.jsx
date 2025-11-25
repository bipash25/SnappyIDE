import React, { useEffect, useRef } from 'react';

export default function TabContextMenu({ x, y, onClose, onCloseOthers, onCloseToRight, onCloseAll }) {
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

    return (
        <div
            ref={menuRef}
            className="fixed z-50 w-48 bg-[#1e2d3b] border border-white/10 rounded shadow-xl py-1 text-sm text-[#d4d4d4]"
            style={{ top: y, left: x }}
        >
            <button
                className="w-full text-left px-4 py-1.5 hover:bg-primary hover:text-white transition-colors"
                onClick={() => {
                    onCloseOthers();
                    onClose();
                }}
            >
                Close Others
            </button>
            <button
                className="w-full text-left px-4 py-1.5 hover:bg-primary hover:text-white transition-colors"
                onClick={() => {
                    onCloseToRight();
                    onClose();
                }}
            >
                Close to the Right
            </button>
            <div className="my-1 border-t border-white/10" />
            <button
                className="w-full text-left px-4 py-1.5 hover:bg-primary hover:text-white transition-colors"
                onClick={() => {
                    onCloseAll();
                    onClose();
                }}
            >
                Close All
            </button>
        </div>
    );
}
