import React from 'react';
import {
    Code,
    Search,
    Keyboard,
    Terminal,
    MonitorPlay,
    Puzzle,
    Settings,
    HelpCircle,
    FolderOpen,
    Plus,
    Download,
    Dumbbell
} from 'lucide-react';
import { useFileSystem } from '../contexts/FileSystemContext';

export default function WelcomeScreen({ onOpenProject }) {
    const { openFolder } = useFileSystem();

    const handleOpenFolder = async () => {
        const success = await openFolder();
        if (success) {
            onOpenProject();
        }
    };

    return (
        <div className="bg-background-dark font-display text-[#CCCCCC] relative flex h-screen w-full flex-col overflow-hidden">
            <div className="flex h-full w-full flex-col">
                <div className="grid flex-1 grid-cols-12 gap-0 overflow-hidden">
                    {/* Sidebar */}
                    <aside className="col-span-3 flex h-full flex-col border-r border-white/10 bg-[#16212d] p-4">
                        <div className="flex-shrink-0">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 px-2">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-primary/20 flex items-center justify-center">
                                        <Code className="text-primary w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="text-white text-base font-medium leading-normal">Snappy IDE</h1>
                                        <p className="text-[#92adc9] text-sm font-normal leading-normal">v1.0.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-1 flex-col overflow-y-auto">
                            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-2">Recent</h3>
                            <div className="flex flex-col">
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10 transition-colors" href="#">
                                    <Code className="w-5 h-5 text-primary/80" />
                                    <span className="text-sm truncate">project-alpha</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10 transition-colors" href="#">
                                    <Code className="w-5 h-5 text-primary/80" />
                                    <span className="text-sm truncate">tauri-app-2</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10 transition-colors" href="#">
                                    <Code className="w-5 h-5 text-primary/80" />
                                    <span className="text-sm truncate">ide-welcome-screen</span>
                                </a>
                            </div>

                            <div className="border-t border-white/10 my-4"></div>

                            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-2">Tools</h3>
                            <div className="flex flex-col gap-1">
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10 transition-colors" href="#">
                                    <Search className="w-5 h-5" />
                                    <span className="text-sm">Command Palette</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10 transition-colors" href="#">
                                    <Keyboard className="w-5 h-5" />
                                    <span className="text-sm">Keybindings Editor</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10 transition-colors" href="#">
                                    <Terminal className="w-5 h-5" />
                                    <span className="text-sm">Terminal</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10 transition-colors" href="#">
                                    <MonitorPlay className="w-5 h-5" />
                                    <span className="text-sm">Live Preview</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10 transition-colors" href="#">
                                    <Puzzle className="w-5 h-5" />
                                    <span className="text-sm">Extensions</span>
                                </a>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-4 flex-shrink-0 flex flex-col gap-1">
                            <a className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:bg-white/10 hover:text-white transition-colors" href="#">
                                <Settings className="w-5 h-5" />
                                <span className="text-sm font-medium">Settings</span>
                            </a>
                            <a className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:bg-white/10 hover:text-white transition-colors" href="#">
                                <HelpCircle className="w-5 h-5" />
                                <span className="text-sm font-medium">Help & About</span>
                            </a>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="col-span-9 flex h-full flex-col bg-background-dark p-8 overflow-y-auto">
                        <div className="flex flex-col justify-center items-center text-center mx-auto w-full max-w-4xl flex-grow">
                            <h2 className="text-5xl font-bold text-white tracking-tighter">Welcome to Snappy</h2>
                            <p className="text-lg text-gray-400 mt-3 mb-10">Your fast and modern IDE.</p>

                            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                                <button onClick={handleOpenFolder} className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-white bg-[#16212d] hover:bg-white/10 border border-white/10 transition-all hover:border-primary/50 group">
                                    <FolderOpen className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-medium leading-normal">Open Folder...</span>
                                </button>
                                <button onClick={onOpenProject} className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-white bg-[#16212d] hover:bg-white/10 border border-white/10 transition-all hover:border-primary/50 group">
                                    <Plus className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-medium leading-normal">New Project...</span>
                                </button>
                                <button onClick={onOpenProject} className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-white bg-[#16212d] hover:bg-white/10 border border-white/10 transition-all hover:border-primary/50 group">
                                    <Download className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-medium leading-normal">Clone Repository...</span>
                                </button>
                                <button onClick={onOpenProject} className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-white bg-[#16212d] hover:bg-white/10 border border-white/10 transition-all hover:border-primary/50 group">
                                    <Dumbbell className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="text-base font-medium leading-normal">Practice & Challenges</span>
                                </button>
                            </div>
                        </div>
                    </main>
                </div>

                <footer className="flex h-6 items-center border-t border-white/10 bg-[#101922] px-4">
                    <p className="text-xs text-[#92adc9]">Ready</p>
                </footer>
            </div>
        </div>
    );
}
