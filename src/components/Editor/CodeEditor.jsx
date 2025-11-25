import React from 'react';
import MonacoEditor from './MonacoEditor';
import FileTree from '../FileTree/FileTree';
import SettingsModal from '../Settings/SettingsModal';
import TerminalComponent from '../Terminal/Terminal';
import TabContextMenu from './TabContextMenu';
import { useFileSystem } from '../../contexts/FileSystemContext';
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
    AlertTriangle,
    FilePlus,
    FolderPlus
} from 'lucide-react';

export default function CodeEditor() {
    const {
        openFiles,
        activeFileIndex,
        setActiveFileIndex,
        closeFile,
        updateFileContent,
        rootPath,
        createFile,
        createFolder,
        saveFile,
        closeOtherFiles,
        closeFilesToRight,
        closeAllFiles
    } = useFileSystem();

    const [cursorPosition, setCursorPosition] = React.useState({ lineNumber: 1, column: 1 });
    const [contextMenu, setContextMenu] = React.useState(null);
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

    const activeFile = activeFileIndex !== -1 ? openFiles[activeFileIndex] : null;

    // Keyboard Shortcuts
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            // Save: Ctrl+S
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                if (activeFileIndex !== -1) {
                    saveFile(activeFileIndex);
                }
            }
            // New File: Ctrl+N
            if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
                e.preventDefault();
                handleNewFile();
            }
            // Close Tab: Ctrl+W
            if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
                e.preventDefault();
                if (activeFileIndex !== -1) {
                    closeFile(activeFileIndex);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeFileIndex, saveFile, closeFile]);

    const handleCursorPositionChange = (position) => {
        setCursorPosition(position);
    };

    const handleTabClick = (index) => {
        setActiveFileIndex(index);
    };

    const handleTabClose = (e, index) => {
        e.stopPropagation();
        closeFile(index);
    };

    const handleTabContextMenu = (e, index) => {
        e.preventDefault();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            index
        });
    };

    const handleCloseAll = () => {
        closeAllFiles();
    };

    const handleCodeChange = (value) => {
        if (activeFileIndex !== -1) {
            updateFileContent(activeFileIndex, value);
        }
    };

    const handleNewFile = async () => {
        if (!rootPath) return;
        const name = window.prompt("Enter file name:");
        if (name) {
            await createFile(rootPath, name);
        }
    };

    const handleNewFolder = async () => {
        if (!rootPath) return;
        const name = window.prompt("Enter folder name:");
        if (name) {
            await createFolder(rootPath, name);
        }
    };

    const getProjectName = (path) => {
        if (!path) return 'NO FOLDER OPENED';
        const parts = path.split(/[/\\]/);
        return parts[parts.length - 1];
    };

    return (
        <div className="bg-background-dark font-display text-[#d4d4d4] flex flex-col h-screen w-full overflow-hidden">
            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
            {contextMenu && (
                <TabContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onClose={() => setContextMenu(null)}
                    onCloseOthers={() => closeOtherFiles(contextMenu.index)}
                    onCloseToRight={() => closeFilesToRight(contextMenu.index)}
                    onCloseAll={handleCloseAll}
                />
            )}

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
                            <div
                                className="text-[#808080] hover:text-white cursor-pointer"
                                title="Settings"
                                onClick={() => setIsSettingsOpen(true)}
                            >
                                <Settings className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-64 bg-background-dark p-2 flex flex-col border-r border-white/10">
                        <div className="flex items-center justify-between px-2 mb-2">
                            <h2 className="text-xs uppercase text-[#808080] font-bold">Explorer</h2>
                            <div className="flex items-center gap-1">
                                <button onClick={handleNewFile} className="p-1 hover:bg-white/10 rounded" title="New File">
                                    <FilePlus className="w-4 h-4 text-[#808080] hover:text-white" />
                                </button>
                                <button onClick={handleNewFolder} className="p-1 hover:bg-white/10 rounded" title="New Folder">
                                    <FolderPlus className="w-4 h-4 text-[#808080] hover:text-white" />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto flex flex-col">
                            <div className="text-sm font-semibold text-white mb-2 flex items-center cursor-pointer">
                                <ChevronDown className="w-4 h-4 mr-1" />
                                {getProjectName(rootPath)}
                            </div>
                            <FileTree />
                        </div>
                    </div>
                </div>

                {/* Main Editor Area */}
                <div className="flex flex-1 flex-col bg-[#101922] overflow-hidden">
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Editor Tabs */}
                        <div className="flex border-b border-white/10 flex-shrink-0 items-center justify-between pr-3 bg-[#101922]">
                            <div className="flex overflow-x-auto">
                                {openFiles.map((file, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleTabClick(index)}
                                        onContextMenu={(e) => handleTabContextMenu(e, index)}
                                        className={`flex items-center justify-center gap-2 px-4 py-2 border-r border-white/10 cursor-pointer min-w-[120px] max-w-[200px] ${activeFileIndex === index ? 'bg-background-dark border-t-2 border-primary text-white' : 'text-[#808080] hover:bg-white/5'}`}
                                    >
                                        <FileText className={`w-4 h-4 flex-shrink-0 ${activeFileIndex === index ? 'text-blue-400' : ''}`} />
                                        <p className="text-sm font-medium leading-normal truncate" title={file.path}>{file.name}</p>
                                        {file.isDirty && <div className="w-2 h-2 rounded-full bg-white ml-1" />}
                                        <X
                                            onClick={(e) => handleTabClose(e, index)}
                                            className={`w-4 h-4 rounded-full p-0.5 flex-shrink-0 ${activeFileIndex === index ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-transparent group-hover:text-white/70 hover:text-white hover:bg-white/10'}`}
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
                            {activeFile ? (
                                <MonacoEditor
                                    key={activeFile.path} // Force re-render on file switch to ensure content updates
                                    code={activeFile.content}
                                    onChange={handleCodeChange}
                                    onCursorPositionChange={handleCursorPositionChange}
                                    language={activeFile.language}
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-[#808080]">
                                    <div className="text-6xl mb-4 opacity-20">
                                        <FileText />
                                    </div>
                                    <p className="text-lg">No file is open</p>
                                    <p className="text-sm opacity-60 mt-2">Open a file from the explorer to start editing</p>
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
                        <div className="flex-1 bg-[#101922] overflow-hidden">
                            <TerminalComponent />
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
                        <span>Ln {cursorPosition.lineNumber}, Col {cursorPosition.column}</span>
                    </div>
                    <div className="hover:bg-white/20 px-1 rounded cursor-pointer">
                        <span>Spaces: 4</span>
                    </div>
                    <div className="hover:bg-white/20 px-1 rounded cursor-pointer">
                        <span>UTF-8</span>
                    </div>
                    <div className="hover:bg-white/20 px-1 rounded cursor-pointer">
                        <span>{activeFile ? activeFile.language : 'Plain Text'}</span>
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
