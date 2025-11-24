import React from 'react';

export default function WelcomeDashboard() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#CCCCCC] relative flex h-auto min-h-screen w-full flex-col">
            <style>{`
        .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
      `}</style>

            {/* External Scripts and Fonts */}
            <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

            {/* Tailwind Config */}
            <script dangerouslySetInnerHTML={{
                __html: `
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#137fec",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
              },
              fontFamily: {
                "display": ["Space Grotesk", "sans-serif"]
              },
              borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
              },
            },
          },
        }
      `}} />

            <div className="flex h-screen w-full flex-col">
                <div className="grid flex-1 grid-cols-12 gap-0 overflow-hidden">
                    <aside className="col-span-3 flex h-full flex-col border-r border-white/10 bg-[#16212d] p-4">
                        <div className="flex-shrink-0">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 px-2">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Snappy IDE logo with abstract blue shapes" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBV56lXDcfRcYRLIDP0BERHDAeHjijdjZkjuPPlJDfxqgJva7YZ8xE6ju57meCh805mfAL69QmsoUew4niUejgGPPSrQYymerqZ-qzkYcSSEp_PPJTPtV_11_h0-WgYl_Jmq8YZGnxddEltWu1JyKkFSmmFlH3cisbRy1t6pP0VdCSJYMtNk3lchDRkvkKmGuL350p4dQqQMJkDf5cDkWC3XyEZ7m0YJACczObZVFW5nHITgguk0fE364uENcTGLV3qtnF7Hps-d6ZY")' }}></div>
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
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10" href="#">
                                    <span className="material-symbols-outlined text-xl text-primary/80">code</span>
                                    <span className="text-sm truncate">project-alpha</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10" href="#">
                                    <span className="material-symbols-outlined text-xl text-primary/80">code</span>
                                    <span className="text-sm truncate">tauri-app-2</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10" href="#">
                                    <span className="material-symbols-outlined text-xl text-primary/80">code</span>
                                    <span className="text-sm truncate">ide-welcome-screen</span>
                                </a>
                            </div>
                            <div className="border-t border-white/10 my-4"></div>
                            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-2">Tools</h3>
                            <div className="flex flex-col">
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10" href="#">
                                    <span className="material-symbols-outlined text-xl">search</span>
                                    <span className="text-sm">Command Palette</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10" href="#">
                                    <span className="material-symbols-outlined text-xl">keyboard</span>
                                    <span className="text-sm">Keybindings Editor</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10" href="#">
                                    <span className="material-symbols-outlined text-xl">terminal</span>
                                    <span className="text-sm">Terminal</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10" href="#">
                                    <span className="material-symbols-outlined text-xl">web_asset</span>
                                    <span className="text-sm">Live Preview</span>
                                </a>
                                <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:text-white hover:bg-white/10" href="#">
                                    <span className="material-symbols-outlined text-xl">extension</span>
                                    <span className="text-sm">Extensions</span>
                                </a>
                            </div>
                        </div>
                        <div className="border-t border-white/10 pt-4 flex-shrink-0">
                            <a className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:bg-white/10 hover:text-white" href="#">
                                <span className="material-symbols-outlined text-xl">settings</span>
                                <span className="text-sm font-medium">Settings</span>
                            </a>
                            <a className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-[#92adc9] hover:bg-white/10 hover:text-white" href="#">
                                <span className="material-symbols-outlined text-xl">help</span>
                                <span className="text-sm font-medium">Help & About</span>
                            </a>
                        </div>
                    </aside>
                    <main className="col-span-9 flex h-full flex-col bg-background-dark p-8 overflow-y-auto">
                        <div className="flex flex-col justify-center items-center text-center mx-auto w-full max-w-4xl flex-grow">
                            <h2 className="text-5xl font-bold text-white tracking-tighter">Welcome to Snappy</h2>
                            <p className="text-lg text-gray-400 mt-3 mb-10">Your fast and modern IDE.</p>
                            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                                <button className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-white bg-[#16212d] hover:bg-white/10 border border-white/10">
                                    <span className="material-symbols-outlined text-xl text-primary">folder_open</span>
                                    <span className="text-base font-medium leading-normal">Open Folder...</span>
                                </button>
                                <button className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-white bg-[#16212d] hover:bg-white/10 border border-white/10">
                                    <span className="material-symbols-outlined text-xl text-primary">add</span>
                                    <span className="text-base font-medium leading-normal">New Project...</span>
                                </button>
                                <button className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-white bg-[#16212d] hover:bg-white/10 border border-white/10">
                                    <span className="material-symbols-outlined text-xl text-primary">public</span>
                                    <span className="text-base font-medium leading-normal">Clone Repository...</span>
                                </button>
                                <button className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-white bg-[#16212d] hover:bg-white/10 border border-white/10">
                                    <span className="material-symbols-outlined text-xl text-primary">exercise</span>
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
