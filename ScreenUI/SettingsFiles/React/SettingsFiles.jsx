import React from 'react';

export default function SettingsFiles() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display relative flex h-auto min-h-screen w-full flex-col">
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
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
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

            <div className="flex h-full min-h-screen w-full">
                {/* Side Navigation Bar */}
                <aside className="flex w-64 flex-col gap-4 border-r border-slate-200/10 bg-background-light dark:bg-background-dark p-4">
                    <div className="flex gap-3">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="IDE Logo" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCId1wtE_wocAZXUDYqunF_4_jmH0at718Js0_zh_bOsI1yoVFQFFYyxlrdAaxa9tBOlRP_x3E20WZrs4ceP31KCpcdnINdLyrPB4D1slm44dz9S-InqooKdbfruqaLS4kN9C85bGPodQ6aJ5JAQ-e-XcXsOzSPlV4yeIlVN9Iir2jAb2rL0_KMb-NTerr7PZ5bEmIN3AJ48YKOr_ew0QQyRvaZBxbYi5cky8fpw4anGcmT6-vqjhoVswbotnbOlKuj2TVG_ZFrn9F3")' }}></div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-base font-medium leading-normal">IDE Settings</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Customize your environment</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">settings</span>
                            <p className="text-sm font-medium leading-normal">General</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">brush</span>
                            <p className="text-sm font-medium leading-normal">Appearance</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">code</span>
                            <p className="text-sm font-medium leading-normal">Editor</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">terminal</span>
                            <p className="text-sm font-medium leading-normal">Terminal</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary" href="#">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>draft</span>
                            <p className="text-sm font-medium leading-normal">Files</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">fork_right</span>
                            <p className="text-sm font-medium leading-normal">Version Control</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">extension</span>
                            <p className="text-sm font-medium leading-normal">Extensions</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">system_update_alt</span>
                            <p className="text-sm font-medium leading-normal">Updates</p>
                        </a>
                    </nav>
                    <div className="mt-auto flex flex-col gap-4">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Sync Settings</span>
                        </button>
                        <div className="flex flex-col gap-1">
                            <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
                                <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">keyboard</span>
                                <p className="text-sm font-medium leading-normal">Keyboard Shortcuts</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
                                <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">info</span>
                                <p className="text-sm font-medium leading-normal">About</p>
                            </a>
                        </div>
                    </div>
                </aside>
                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="mx-auto max-w-4xl">
                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between gap-3 mb-8">
                            <div className="flex min-w-72 flex-col gap-3">
                                <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Files</p>
                                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Configure file handling, encoding, and associations.</p>
                            </div>
                        </div>
                        {/* Settings Sections */}
                        <div className="flex flex-col gap-8">
                            {/* Saving Section */}
                            <section>
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 border-b border-slate-200/10 mb-4">Saving</h3>
                                <div className="flex flex-col divide-y divide-slate-200/10">
                                    <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col justify-center">
                                                <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">Auto Save</p>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">Automatically save files after a delay or on focus change.</p>
                                            </div>
                                        </div>
                                        <div className="shrink-0">
                                            <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-slate-300 dark:bg-slate-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
                                                <div className="h-full w-[27px] rounded-full bg-white transition-transform" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px' }}></div>
                                                <input defaultChecked className="invisible absolute" type="checkbox" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex max-w-[480px] flex-wrap items-center gap-4 px-4 py-3 justify-between w-full">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2">Auto-save Delay</p>
                                            <div className="flex w-full flex-1 items-stretch rounded-lg">
                                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal" placeholder="1000" defaultValue="1000" />
                                                <div className="text-slate-500 dark:text-slate-400 flex border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 items-center justify-center px-3 rounded-r-lg border-l-0 text-sm">ms</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between">
                                        <div className="flex flex-col justify-center">
                                            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">Trim Trailing Whitespace</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">Remove trailing whitespace when saving a file.</p>
                                        </div>
                                        <div className="shrink-0">
                                            <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-slate-300 dark:bg-slate-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
                                                <div className="h-full w-[27px] rounded-full bg-white transition-transform" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px' }}></div>
                                                <input className="invisible absolute" type="checkbox" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Encoding Section */}
                            <section>
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 border-b border-slate-200/10 mb-4">Encoding</h3>
                                <div className="flex flex-col divide-y divide-slate-200/10">
                                    <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between">
                                        <div className="flex flex-col justify-center">
                                            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">Default Encoding</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">The default character set encoding for new files.</p>
                                        </div>
                                        <select className="form-select w-48 rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal">
                                            <option>UTF-8</option>
                                            <option>UTF-16 LE</option>
                                            <option>UTF-16 BE</option>
                                            <option>Windows-1252</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between">
                                        <div className="flex flex-col justify-center">
                                            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">Change Line Endings</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">The default end of line character sequence.</p>
                                        </div>
                                        <select className="form-select w-48 rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal">
                                            <option>LF (\n)</option>
                                            <option>CRLF (\r\n)</option>
                                            <option>Auto</option>
                                        </select>
                                    </div>
                                </div>
                            </section>
                            {/* File Associations Section */}
                            <section>
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 border-b border-slate-200/10 mb-4">File Associations</h3>
                                <div className="p-4 space-y-4">
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Configure file extension to language associations.</p>
                                    <div className="border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden">
                                        <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-center p-3 bg-slate-100 dark:bg-slate-800/50">
                                            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">File Pattern</p>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Language</p>
                                            <div></div>
                                        </div>
                                        <div className="divide-y divide-slate-200/10">
                                            <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-center p-3">
                                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary h-10 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-3 text-sm" defaultValue="*.md" />
                                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary h-10 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-3 text-sm" defaultValue="markdown" />
                                                <button className="text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400">
                                                    <span className="material-symbols-outlined text-xl">delete</span>
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-center p-3">
                                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary h-10 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-3 text-sm" defaultValue="*.rs" />
                                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary h-10 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-3 text-sm" defaultValue="rust" />
                                                <button className="text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400">
                                                    <span className="material-symbols-outlined text-xl">delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-bold">
                                        <span className="material-symbols-outlined">add</span>
                                        <span>Add Item</span>
                                    </button>
                                </div>
                            </section>
                            {/* Performance Section */}
                            <section>
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 border-b border-slate-200/10 mb-4">Performance</h3>
                                <div className="flex max-w-[480px] flex-wrap items-center gap-4 px-4 py-3">
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2">Max file size for features</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal pb-3">Disable features like syntax highlighting and linting for files larger than this size.</p>
                                        <div className="flex w-full flex-1 items-stretch rounded-lg">
                                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal" placeholder="50" defaultValue="50" />
                                            <div className="text-slate-500 dark:text-slate-400 flex border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 items-center justify-center px-3 rounded-r-lg border-l-0 text-sm">MB</div>
                                        </div>
                                    </label>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
