import React from 'react';
import { X, Check } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

export default function SettingsModal({ isOpen, onClose }) {
    const { settings, updateSetting } = useSettings();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-[#1e2d3b] w-[500px] rounded-lg shadow-xl border border-white/10 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#17222c]">
                    <h2 className="text-white font-semibold">Settings</h2>
                    <button onClick={onClose} className="text-[#808080] hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Font Size */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#d4d4d4]">Font Size</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="10"
                                max="24"
                                step="1"
                                value={settings.fontSize}
                                onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                                className="flex-1 h-2 bg-[#2d3b4b] rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <span className="text-white font-mono w-8 text-right">{settings.fontSize}px</span>
                        </div>
                    </div>

                    {/* Word Wrap */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <label className="text-sm font-medium text-[#d4d4d4]">Word Wrap</label>
                            <p className="text-xs text-[#808080]">Wrap long lines to the next line</p>
                        </div>
                        <button
                            onClick={() => updateSetting('wordWrap', settings.wordWrap === 'on' ? 'off' : 'on')}
                            className={`w-12 h-6 rounded-full transition-colors relative ${settings.wordWrap === 'on' ? 'bg-primary' : 'bg-[#2d3b4b]'}`}
                        >
                            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.wordWrap === 'on' ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>

                    {/* Minimap */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <label className="text-sm font-medium text-[#d4d4d4]">Minimap</label>
                            <p className="text-xs text-[#808080]">Show code overview on the right</p>
                        </div>
                        <button
                            onClick={() => updateSetting('minimap', !settings.minimap)}
                            className={`w-12 h-6 rounded-full transition-colors relative ${settings.minimap ? 'bg-primary' : 'bg-[#2d3b4b]'}`}
                        >
                            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.minimap ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>

                    {/* Line Numbers */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <label className="text-sm font-medium text-[#d4d4d4]">Line Numbers</label>
                            <p className="text-xs text-[#808080]">Show line numbers in the gutter</p>
                        </div>
                        <button
                            onClick={() => updateSetting('lineNumbers', settings.lineNumbers === 'on' ? 'off' : 'on')}
                            className={`w-12 h-6 rounded-full transition-colors relative ${settings.lineNumbers === 'on' ? 'bg-primary' : 'bg-[#2d3b4b]'}`}
                        >
                            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.lineNumbers === 'on' ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 bg-[#17222c] border-t border-white/10 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded text-sm font-medium transition-colors"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}
