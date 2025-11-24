import React from 'react';

export default function SettingsWorkbench() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark relative flex h-auto min-h-screen w-full flex-col">
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
                "surface-dark": "#16222d",
                "text-light": "#101922",
                "text-dark": "#e5e7eb",
                "text-muted-dark": "#92adc9",
                "border-dark": "#233648"
              },
              fontFamily: {
                "display": ["Space Grotesk", "sans-serif"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
      `}} />

            <div className="flex h-full min-h-screen w-full">
                {/* Side Navigation */}
                <aside className="flex w-64 flex-col border-r border-border-dark bg-surface-dark p-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Alex Miller's profile picture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2W5wgx9aWv33FB_SDIg6172fBfYlRsi9gcjEAWxoqOEnzVpI0iRS9LlQjL8GGnvXfhMU6BvmSE6cs_0IUSk0Zc1LIETvA-Ymf_DztUtTU2MFpeiKeqRX04hl8Fj7mIysgP909QwWhuN4saiKf_WkRVVXzjlvUdRkp2zNvkNmmGDB9RID2vmFKaRZWgx9vERyBn-3_Dq_Yey2Y2ikYcuw2_KfftzPLcgEt_Y1QN_1PEvx75CvRZGxuK2LZoJ2ELV36D6rlQXxPpOAm")' }}></div>
                            <div className="flex flex-col">
                                <h1 className="text-text-dark text-base font-medium leading-normal">Alex Miller</h1>
                                <p className="text-text-muted-dark text-sm font-normal leading-normal">alex.miller@email.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-dark hover:bg-border-dark" href="#">
                                <span className="material-symbols-outlined text-xl">settings</span>
                                <p className="text-sm font-medium leading-normal">General</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg bg-border-dark px-3 py-2 text-text-dark" href="#">
                                <span className="material-symbols-outlined text-xl !font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>widgets</span>
                                <p className="text-sm font-medium leading-normal">Workbench</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-dark hover:bg-border-dark" href="#">
                                <span className="material-symbols-outlined text-xl">code</span>
                                <p className="text-sm font-medium leading-normal">Editor</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-dark hover:bg-border-dark" href="#">
                                <span className="material-symbols-outlined text-xl">terminal</span>
                                <p className="text-sm font-medium leading-normal">Terminal</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-dark hover:bg-border-dark" href="#">
                                <span className="material-symbols-outlined text-xl">fork_right</span>
                                <p className="text-sm font-medium leading-normal">Source Control</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-dark hover:bg-border-dark" href="#">
                                <span className="material-symbols-outlined text-xl">extension</span>
                                <p className="text-sm font-medium leading-normal">Extensions</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-dark hover:bg-border-dark" href="#">
                                <span className="material-symbols-outlined text-xl">system_update_alt</span>
                                <p className="text-sm font-medium leading-normal">Updates</p>
                            </a>
                        </div>
                    </div>
                    <div className="mt-auto flex flex-col gap-4">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                            <span className="truncate">Sync Settings</span>
                        </button>
                        <div className="flex flex-col gap-1">
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-dark hover:bg-border-dark" href="#">
                                <span className="material-symbols-outlined text-xl">book_4</span>
                                <p className="text-sm font-medium leading-normal">Documentation</p>
                            </a>
                            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-dark hover:bg-border-dark" href="#">
                                <span className="material-symbols-outlined text-xl">keyboard</span>
                                <p className="text-sm font-medium leading-normal">Keyboard Shortcuts</p>
                            </a>
                        </div>
                    </div>
                </aside>
                {/* Main Content */}
                <main className="flex-1 p-8 lg:p-12">
                    <div className="mx-auto max-w-4xl">
                        {/* Page Heading */}
                        <div className="mb-10">
                            <h1 className="text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Workbench</h1>
                            <p className="text-text-muted-dark text-base font-normal leading-normal mt-2">Customize the appearance and behavior of the workbench.</p>
                        </div>
                        {/* Settings List */}
                        <div className="flex flex-col space-y-4">
                            {/* Startup Behavior */}
                            <div className="flex flex-col gap-6 rounded-lg border border-border-dark bg-surface-dark p-6 md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                    <p className="text-text-dark text-base font-medium leading-normal">Startup Behavior</p>
                                    <p className="text-text-muted-dark text-sm font-normal leading-normal mt-1">How the editor should behave on startup.</p>
                                </div>
                                <div className="w-full md:w-60">
                                    <select className="w-full rounded-lg border-2 border-border-dark bg-background-dark text-text-dark focus:border-primary focus:ring-primary">
                                        <option>Show Welcome Page</option>
                                        <option selected>Restore Last Session</option>
                                        <option>Open Empty Window</option>
                                    </select>
                                </div>
                            </div>
                            {/* Command Palette Position */}
                            <div className="flex flex-col gap-6 rounded-lg border border-border-dark bg-surface-dark p-6 md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                    <p className="text-text-dark text-base font-medium leading-normal">Command Palette Position</p>
                                    <p className="text-text-muted-dark text-sm font-normal leading-normal mt-1">Where the command palette appears on the screen.</p>
                                </div>
                                <div className="w-full md:w-60">
                                    <select className="w-full rounded-lg border-2 border-border-dark bg-background-dark text-text-dark focus:border-primary focus:ring-primary">
                                        <option selected>Center</option>
                                        <option>Top</option>
                                    </select>
                                </div>
                            </div>
                            {/* Tree Indent Size */}
                            <div className="flex flex-col gap-6 rounded-lg border border-border-dark bg-surface-dark p-6 md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                    <p className="text-text-dark text-base font-medium leading-normal">Tree Indent Size</p>
                                    <p className="text-text-muted-dark text-sm font-normal leading-normal mt-1">The pixel indentation for nested items in the file explorer tree.</p>
                                </div>
                                <div className="w-full md:w-60">
                                    <div className="relative">
                                        <input className="w-full rounded-lg border-2 border-border-dark bg-background-dark pr-8 text-text-dark [appearance:textfield] focus:border-primary focus:ring-primary" type="number" defaultValue="8" />
                                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted-dark">px</span>
                                    </div>
                                </div>
                            </div>
                            {/* Activity Bar Position */}
                            <div className="flex flex-col gap-6 rounded-lg border border-border-dark bg-surface-dark p-6 md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                    <p className="text-text-dark text-base font-medium leading-normal">Activity Bar Position</p>
                                    <p className="text-text-muted-dark text-sm font-normal leading-normal mt-1">The location of the main activity bar.</p>
                                </div>
                                <div className="w-full md:w-60">
                                    <div className="flex gap-4 rounded-lg bg-background-dark p-1">
                                        <label className="flex-1 cursor-pointer rounded-md py-1.5 text-center text-sm font-medium text-text-muted-dark has-[:checked]:bg-border-dark has-[:checked]:text-text-dark">
                                            <input defaultChecked className="sr-only" name="activity-bar" type="radio" value="left" />
                                            <span>Left</span>
                                        </label>
                                        <label className="flex-1 cursor-pointer rounded-md py-1.5 text-center text-sm font-medium text-text-muted-dark has-[:checked]:bg-border-dark has-[:checked]:text-text-dark">
                                            <input className="sr-only" name="activity-bar" type="radio" value="right" />
                                            <span>Right</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Zen Mode Behavior */}
                            <div className="flex flex-col gap-6 rounded-lg border border-border-dark bg-surface-dark p-6 md:flex-row md:justify-between">
                                <div className="flex-1">
                                    <p className="text-text-dark text-base font-medium leading-normal">Zen Mode Behavior</p>
                                    <p className="text-text-muted-dark text-sm font-normal leading-normal mt-1">Configure what UI elements are hidden in Zen Mode.</p>
                                </div>
                                <div className="w-full md:w-60">
                                    <div className="flex flex-col space-y-3">
                                        <label className="flex items-center gap-3">
                                            <input defaultChecked className="h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-text-dark">Hide Activity Bar</span>
                                        </label>
                                        <label className="flex items-center gap-3">
                                            <input defaultChecked className="h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-text-dark">Hide Status Bar</span>
                                        </label>
                                        <label className="flex items-center gap-3">
                                            <input className="h-4 w-4 rounded border-border-dark bg-background-dark text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-text-dark">Center Layout</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Zoom Controls */}
                            <div className="flex flex-col gap-6 rounded-lg border border-border-dark bg-surface-dark p-6 md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                    <p className="text-text-dark text-base font-medium leading-normal">Zoom Controls</p>
                                    <p className="text-text-muted-dark text-sm font-normal leading-normal mt-1">Show or hide zoom controls in the status bar.</p>
                                </div>
                                <div className="w-full md:w-60">
                                    <label className="flex cursor-pointer items-center" htmlFor="zoom-toggle">
                                        <input className="peer sr-only" id="zoom-toggle" type="checkbox" />
                                        <div className="relative h-6 w-11 rounded-full bg-border-dark after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-600 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50"></div>
                                        <span className="ms-3 text-sm font-medium text-text-dark">Show Zoom Controls</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
