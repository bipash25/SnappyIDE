import React from 'react';

export default function SettingsThemes() {
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
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
                {/* SideNavBar */}
                <aside className="flex w-64 flex-col border-r border-slate-200/10 bg-white/2.5 p-4 dark:bg-black/10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture of Alex Duran" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpBxh_L4spCW6l34j6vpGkTwk-uFZ-AxInVvRmfg9l50HR8HknO7aApc6u4vhwHqJSsSbEON963gs3g2zR-qQ2hrJqDQZ0tLD2FiM9TqETkeYjFtjwwm7SpPIx11F5E2hccYeNUxpPxyz1KgD1ndhCKjteF8L8g1pI8gm5oIo4xqXrp6MQXbrESs4caUGPKxMC8GawUgmGZVkEodkj1WtyMJTx76hOlEtWaCdiGwyC8V91mtG4lf0F0mImo34DPiJLvI01Q_P8U7Ia")' }}></div>
                            <div className="flex flex-col">
                                <h1 className="text-slate-800 dark:text-white text-base font-medium leading-normal">Alex Duran</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">alex.duran@example.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                                <span className="material-symbols-outlined text-2xl">code</span>
                                <p className="text-sm font-medium leading-normal">Editor</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-primary dark:bg-primary/20 dark:text-primary" href="#">
                                <span className="material-symbols-outlined text-2xl">palette</span>
                                <p className="text-sm font-medium leading-normal">Appearance</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                                <span className="material-symbols-outlined text-2xl">terminal</span>
                                <p className="text-sm font-medium leading-normal">Terminal</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                                <span className="material-symbols-outlined text-2xl">rebase</span>
                                <p className="text-sm font-medium leading-normal">Version Control</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                                <span className="material-symbols-outlined text-2xl">extension</span>
                                <p className="text-sm font-medium leading-normal">Extensions</p>
                            </a>
                        </div>
                    </div>
                    <div className="mt-auto flex flex-col gap-1">
                        <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                            <span className="material-symbols-outlined text-2xl">settings</span>
                            <p className="text-sm font-medium leading-normal">Settings</p>
                        </a>
                        <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                            <span className="material-symbols-outlined text-2xl">help</span>
                            <p className="text-sm font-medium leading-normal">Help</p>
                        </a>
                    </div>
                </aside>
                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="mx-auto max-w-4xl">
                        {/* PageHeading */}
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Themes</p>
                        </div>
                        {/* SearchBar */}
                        <div className="mt-6">
                            <label className="flex flex-col h-12 w-full">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                    <div className="text-slate-400 dark:text-slate-500 flex items-center justify-center pl-4 rounded-l-lg border border-r-0 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                                        <span className="material-symbols-outlined text-2xl">search</span>
                                    </div>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 focus:border-primary/50 h-full placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search themes" defaultValue="" />
                                </div>
                            </label>
                        </div>
                        {/* Section: Color Theme */}
                        <section className="mt-8">
                            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Color Theme</h2>
                            {/* Chips */}
                            <div className="flex gap-2 py-3 overflow-x-auto">
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary px-4 text-white hover:opacity-90">
                                    <p className="text-sm font-medium leading-normal">Dark</p>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700">
                                    <p className="text-sm font-medium leading-normal">Light</p>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700">
                                    <p className="text-sm font-medium leading-normal">High Contrast</p>
                                </button>
                            </div>
                            {/* Theme Grid */}
                            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 md:grid-cols-3">
                                {/* Theme Card 1 (Active) */}
                                <div className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-primary bg-slate-100 dark:bg-slate-800">
                                    <div className="absolute inset-0 bg-primary/10"></div>
                                    <div className="relative flex flex-col p-4">
                                        <div className="flex items-center justify-between">
                                            <p className="text-base font-semibold text-slate-900 dark:text-white">Kilo Dark+</p>
                                            <div className="flex size-6 items-center justify-center rounded-full bg-primary text-white">
                                                <span className="material-symbols-outlined text-base">check</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex h-20 items-end justify-between rounded-lg bg-slate-200 p-3 dark:bg-slate-900/50">
                                            <div className="flex gap-2">
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#22c55e' }}></div>
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#f97316' }}></div>
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#a855f7' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Theme Card 2 */}
                                <div className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-slate-300 bg-slate-100 transition-all hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-500">
                                    <div className="relative flex flex-col p-4">
                                        <p className="text-base font-semibold text-slate-900 dark:text-white">Monokai</p>
                                        <div className="mt-4 flex h-20 items-end justify-between rounded-lg bg-slate-200 p-3 dark:bg-slate-900/50">
                                            <div className="flex gap-2">
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#f92672' }}></div>
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#a6e22e' }}></div>
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#fd971f' }}></div>
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#66d9ef' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Theme Card 3 */}
                                <div className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-slate-300 bg-slate-100 transition-all hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-500">
                                    <div className="relative flex flex-col p-4">
                                        <p className="text-base font-semibold text-slate-900 dark:text-white">Abyss</p>
                                        <div className="mt-4 flex h-20 items-end justify-between rounded-lg bg-slate-200 p-3 dark:bg-slate-900/50">
                                            <div className="flex gap-2">
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#21c7a8' }}></div>
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#00b0ff' }}></div>
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#ffcc00' }}></div>
                                                <div className="h-5 w-5 rounded-full" style={{ backgroundColor: '#ff69b4' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Section: Icon Theme */}
                        <section className="mt-10">
                            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Icon Theme</h2>
                            <div className="relative w-full max-w-sm">
                                <select className="w-full appearance-none rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 pr-10 text-base text-slate-900 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                                    <option>Material Icons</option>
                                    <option>Seti UI</option>
                                    <option>Minimal</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 dark:text-slate-500">
                                    <span className="material-symbols-outlined">unfold_more</span>
                                </div>
                            </div>
                        </section>
                        {/* Section: Customization */}
                        <section className="mt-10">
                            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Customization</h2>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg border border-primary bg-transparent px-4 text-primary hover:bg-primary/10">
                                    <span className="material-symbols-outlined text-xl">upload_file</span>
                                    <p className="text-sm font-medium leading-normal">Import Theme...</p>
                                </button>
                                <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg border border-slate-300 bg-transparent px-4 text-slate-700 hover:bg-slate-500/10 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-500/10">
                                    <span className="material-symbols-outlined text-xl">download_for_offline</span>
                                    <p className="text-sm font-medium leading-normal">Export Current Theme...</p>
                                </button>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
