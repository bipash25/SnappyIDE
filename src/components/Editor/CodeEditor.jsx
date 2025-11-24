import React, { useState } from 'react';
import MonacoEditor from './MonacoEditor';
import {
    FileText,
    Search,
    GitFork,
    PlayCircle,
    Puzzle,
    Zap,
    UserCircle,
    Settings,
    ChevronDown,
    Folder,
    X,
    Play,
    SplitSquareHorizontal,
    MoreHorizontal,
    Terminal,
    GitBranch,
    RefreshCw,
    AlertCircle,
    AlertTriangle
} from 'lucide-react';

export default function CodeEditor() {
    const [files, setFiles] = useState([
        { name: 'main.rs', language: 'rust', content: '// Welcome to Snappy IDE!\n// Edit this file to get started.\n\nfn main() {\n    println!("Hello, world!");\n}\n' },
        { name: 'Cargo.toml', language: 'toml', content: '[package]\nname = "snappy"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies]\n' },
        { name: 'README.md', language: 'markdown', content: '# Snappy IDE\n\nA fast and modern IDE built with Tauri and React.\n' }
    ]);
    const [activeFileIndex, setActiveFileIndex] = useState(0);

    const activeFile = files[activeFileIndex];

    const handleFileClick = (index) => {
        setActiveFileIndex(index);
    };

    const handleTabClose = (e, index) => {
        e.stopPropagation();
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        if (activeFileIndex >= index && activeFileIndex > 0) {
            setActiveFileIndex(activeFileIndex - 1);
        } else if (newFiles.length === 0) {
            setActiveFileIndex(-1);
        }
    };

    const handleCodeChange = (value) => {
        if (activeFileIndex !== -1) {
            const newFiles = [...files];
            newFiles[activeFileIndex].content = value || "";
            setFiles(newFiles);
        }
    };

    return (
        <div className="bg-background-dark font-display text-[#d4d4d4] flex flex-col h-screen w-full overflow-hidden">
            {/* Title Bar / Menu */}
            <div className="flex-shrink-0 bg-[#1e2d3b] text-white text-xs px-2 select-none">
                <div className="flex items-center h-8 space-x-4">
                    <div className="font-bold">Snappy</div>
                    <span className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded">File</span>
                    <span className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded">Edit</span>
                    <span className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded">Selection</span>
                    <span className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded">View</span>
                    <span className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded">Go</span>
                    <span className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded">Run</span>
                    <span className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded">Terminal</span>
                    <span className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded">Help</span>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Activity Bar */}
                <div className="flex flex-shrink-0">
                    <div className="w-12 bg-[#17222c] flex flex-col items-center justify-between py-2 z-10">
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-white relative cursor-pointer" title="Explorer">
                                <FileText className="w-6 h-6" />
                                <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-primary"></div>
                            </div>
                            <div className="text-[#808080] hover:text-white cursor-pointer" title="Search">
                                <Search className="w-6 h-6" />
                            </div>
                            <div className="text-[#808080] hover:text-white cursor-pointer" title="Source Control">
                                <GitFork className="w-6 h-6" />
                            </div>
                            <div className="text-[#808080] hover:text-white cursor-pointer" title="Run & Debug">
                                <PlayCircle className="w-6 h-6" />
                            </div>
                            <div className="text-[#808080] hover:text-white cursor-pointer" title="Extensions">
                                <Puzzle className="w-6 h-6" />
                            </div>
                            <div className="text-[#808080] hover:text-white cursor-pointer" title="Quick Actions">
                                <Zap className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-[#808080] hover:text-white cursor-pointer" title="Account">
                                <UserCircle className="w-6 h-6" />
                            </div>
                            <div className="text-[#808080] hover:text-white cursor-pointer" title="Settings">
                                <Settings className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-64 bg-background-dark p-2 flex flex-col border-r border-white/10">
                        <h2 className="text-xs uppercase text-[#808080] font-bold px-2 mb-2">Explorer</h2>
                        <div className="flex-1 overflow-y-auto">
                            <div className="text-sm font-semibold text-white mb-2 flex items-center cursor-pointer">
                                <ChevronDown className="w-4 h-4 mr-1" />
                                SNAPPY_PROJECT
                            </div>
                            <ul className="space-y-1 pl-2 text-sm">
                                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                                    <Folder className="w-4 h-4 text-yellow-500" />
                                    <span>src</span>
                                </li>
                                {files.map((file, index) => (
                                    <li key={index} onClick={() => handleFileClick(index)} className={`flex items-center space-x-2 pl-8 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer ${activeFileIndex === index ? 'bg-primary/20' : ''}`}>
                                        <FileText className="w-4 h-4 text-blue-400" />
                                        <span className="font-semibold">{file.name}</span>
                                    </li>
                                ))}
                                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                                    <Folder className="w-4 h-4 text-yellow-500" />
                                    <span>target</span>
                                </li>
                                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                                    <FileText className="w-4 h-4" />
                                    <span>.gitignore</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Editor Area */}
                <div className="flex flex-1 flex-col bg-[#101922] overflow-hidden">
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Editor Tabs */}
                        <div className="flex border-b border-white/10 flex-shrink-0 items-center justify-between pr-3 bg-[#101922]">
                            <div className="flex overflow-x-auto">
                                {files.map((file, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleFileClick(index)}
                                        className={`flex items-center justify-center gap-2 px-4 py-2 border-r border-white/10 cursor-pointer min-w-[120px] ${activeFileIndex === index ? 'bg-background-dark border-t-2 border-primary text-white' : 'text-[#808080] hover:bg-white/5'}`}
                                    >
                                        <FileText className={`w-4 h-4 ${activeFileIndex === index ? 'text-blue-400' : ''}`} />
                                        <p className="text-sm font-medium leading-normal truncate">{file.name}</p>
                                        <X
                                            onClick={(e) => handleTabClose(e, index)}
                                            className={`w-4 h-4 rounded-full p-0.5 ${activeFileIndex === index ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-transparent group-hover:text-white/70 hover:text-white hover:bg-white/10'}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 text-[#d4d4d4]">
                                <button className="flex items-center justify-center p-1.5 rounded hover:bg-white/10" title="Run Code">
                                    <Play className="w-4 h-4 fill-current" />
                                </button>
                                <button className="flex items-center justify-center p-1.5 rounded hover:bg-white/10" title="Split Editor">
                                    <SplitSquareHorizontal className="w-4 h-4" />
                                </button>
                                <button className="flex items-center justify-center p-1.5 rounded hover:bg-white/10" title="More Actions">
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Editor Content */}
                        <div className="flex flex-1 overflow-hidden relative">
                            {activeFileIndex !== -1 ? (
                                <MonacoEditor
                                    code={activeFile.content}
                                    onChange={handleCodeChange}
                                    language={activeFile.language}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-[#808080]">
                                    No file open
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom Panel (Terminal) */}
                    <div className="h-48 flex-shrink-0 border-t border-white/10 flex flex-col bg-[#101922]">
                        <div className="flex px-4 py-1.5 border-b border-white/10">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center gap-2 cursor-pointer text-white border-b border-primary pb-1">
                                    <span className="text-sm font-medium">Terminal</span>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer text-[#808080] hover:text-white pb-1">
                                    <span className="text-sm font-medium">Debug Console</span>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer text-[#808080] hover:text-white pb-1">
                                    <span className="text-sm font-medium">Output</span>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer text-[#808080] hover:text-white pb-1">
                                    <span className="text-sm font-medium">Problems</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-2 font-mono text-sm bg-background-dark overflow-y-auto text-[#cccccc]">
                            <p>user@snappy-dev:~$ <span className="bg-primary animate-pulse w-2 h-4 inline-block align-middle"></span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="flex-shrink-0 bg-primary h-6 flex items-center justify-between px-3 text-white text-xs select-none">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
                        <GitBranch className="w-3 h-3" />
                        <span>main</span>
                    </div>
                    <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
                        <RefreshCw className="w-3 h-3" />
                        <span>0</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hover:bg-white/20 px-1 rounded cursor-pointer">
                        <span>Ln 6, Col 2</span>
                    </div>
                    <div className="hover:bg-white/20 px-1 rounded cursor-pointer">
                        <span>Spaces: 4</span>
                    </div>
                    <div className="hover:bg-white/20 px-1 rounded cursor-pointer">
                        <span>UTF-8</span>
                    </div>
                    <div className="hover:bg-white/20 px-1 rounded cursor-pointer">
                        <span>Rust</span>
                    </div>
                    <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer" title="Errors">
                        <AlertCircle className="w-3 h-3" />
                        <span>0</span>
                    </div>
                    <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer" title="Warnings">
                        <AlertTriangle className="w-3 h-3" />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
