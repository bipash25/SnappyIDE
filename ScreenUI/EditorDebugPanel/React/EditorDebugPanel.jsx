import React from 'react';

export default function EditorDebugPanel() {
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
                "display": ["Space Grotesk"]
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

      <div className="layout-container flex h-full grow flex-row">
        {/* Simulated Activity Bar */}
        <div className="flex h-screen flex-col items-center gap-4 bg-[#0c131a] p-2">
          <button className="rounded p-2 text-white/50 hover:text-white"><span className="material-symbols-outlined">description</span></button>
          <button className="rounded p-2 text-white/50 hover:text-white"><span className="material-symbols-outlined">search</span></button>
          <button className="rounded bg-primary/20 p-2 text-primary"><span className="material-symbols-outlined">bug_report</span></button>
          <button className="rounded p-2 text-white/50 hover:text-white"><span className="material-symbols-outlined">hub</span></button>
          <button className="rounded p-2 text-white/50 hover:text-white"><span className="material-symbols-outlined">extension</span></button>
        </div>
        {/* Debug Side Panel */}
        <div className="flex h-screen w-full max-w-sm flex-col border-r border-white/10 bg-background-dark">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <h2 className="text-sm font-medium uppercase text-white">Debug</h2>
          </div>
          {/* Toolbar Component */}
          <div className="flex justify-start gap-1 border-b border-white/10 px-4 py-2">
            <button className="rounded p-2 text-primary transition-colors hover:bg-white/10" title="Continue">
              <span className="material-symbols-outlined text-2xl">play_arrow</span>
            </button>
            <button className="rounded p-2 text-white/80 transition-colors hover:bg-white/10" title="Pause">
              <span className="material-symbols-outlined text-2xl">pause</span>
            </button>
            <button className="rounded p-2 text-white/80 transition-colors hover:bg-white/10" title="Step Over">
              <span className="material-symbols-outlined text-2xl">keyboard_arrow_right</span>
            </button>
            <button className="rounded p-2 text-white/80 transition-colors hover:bg-white/10" title="Step Into">
              <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
            </button>
            <button className="rounded p-2 text-white/80 transition-colors hover:bg-white/10" title="Step Out">
              <span className="material-symbols-outlined text-2xl">keyboard_arrow_up</span>
            </button>
            <button className="rounded p-2 text-white/80 transition-colors hover:bg-white/10" title="Restart">
              <span className="material-symbols-outlined text-2xl">replay</span>
            </button>
            <button className="rounded p-2 text-red-500 transition-colors hover:bg-white/10" title="Stop">
              <span className="material-symbols-outlined text-2xl">stop</span>
            </button>
          </div>
          {/* Accordions Component */}
          <div className="flex flex-col overflow-y-auto px-2">
            <details className="flex flex-col border-b border-white/10 py-2 group" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white/80 text-xl transition-transform group-open:rotate-90">chevron_right</span>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Variables</p>
                </div>
              </summary>
              <div className="pl-5">
                <div className="flex items-center gap-4 py-2 pl-2">
                  <span className="material-symbols-outlined text-white/50 text-xl">subdirectory_arrow_right</span>
                  <p className="flex-1 truncate text-sm text-white"><span className="text-amber-400">user</span>: {'{'} name: 'John Doe', age: 30 {'}'}</p>
                </div>
                <div className="flex items-center gap-4 py-2 pl-2">
                  <span className="material-symbols-outlined text-white/50 text-xl">subdirectory_arrow_right</span>
                  <p className="flex-1 truncate text-sm text-white"><span className="text-amber-400">isAuthenticated</span>: <span className="text-blue-400">true</span></p>
                </div>
              </div>
            </details>
            <details className="flex flex-col border-b border-white/10 py-2 group" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white/80 text-xl transition-transform group-open:rotate-90">chevron_right</span>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Watch</p>
                </div>
              </summary>
              <div className="pl-5">
                {/* ListItem Component */}
                <div className="flex items-center gap-4 bg-background-dark py-2 justify-between group/item">
                  <div className="flex min-w-0 items-center gap-2">
                    <p className="flex-1 truncate text-sm text-white"><span className="text-amber-400">user.age</span>: <span className="text-purple-400">30</span></p>
                  </div>
                  <button className="shrink-0 opacity-0 transition-opacity group-hover/item:opacity-100">
                    <span className="material-symbols-outlined flex size-6 items-center justify-center text-white/50 hover:text-white">close</span>
                  </button>
                </div>
                {/* TextField Component */}
                <div className="flex flex-wrap items-end gap-4 py-2">
                  <label className="flex flex-col min-w-40 flex-1">
                    <div className="flex w-full flex-1 items-stretch rounded-lg">
                      <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-white/20 bg-white/5 p-2 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-0 focus:ring-0 rounded-r-none border-r-0" placeholder="Expression to watch" defaultValue="" />
                      <button className="flex items-center justify-center rounded-r-lg border border-l-0 border-white/20 bg-white/5 px-3 text-white/60 hover:bg-white/10 hover:text-white">
                        <span className="material-symbols-outlined text-xl">add</span>
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            </details>
            <details className="flex flex-col border-b border-white/10 py-2 group" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white/80 text-xl transition-transform group-open:rotate-90">chevron_right</span>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Call Stack</p>
                </div>
              </summary>
              <div className="pl-2">
                {/* ListItem Component */}
                <div className="flex cursor-pointer items-center gap-4 rounded-lg bg-primary/20 px-4 py-2">
                  <div className="flex flex-col justify-center">
                    <p className="text-base font-medium leading-normal text-white line-clamp-1">renderUser</p>
                    <p className="text-sm font-normal leading-normal text-white/60 line-clamp-2">profile.js:42</p>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2 hover:bg-white/10">
                  <div className="flex flex-col justify-center">
                    <p className="text-base font-medium leading-normal text-white line-clamp-1">fetchData</p>
                    <p className="text-sm font-normal leading-normal text-white/60 line-clamp-2">api.js:15</p>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2 hover:bg-white/10">
                  <div className="flex flex-col justify-center">
                    <p className="text-base font-medium leading-normal text-white line-clamp-1">(anonymous)</p>
                    <p className="text-sm font-normal leading-normal text-white/60 line-clamp-2">app.js:10</p>
                  </div>
                </div>
              </div>
            </details>
            <details className="flex flex-col border-b border-white/10 py-2 group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white/80 text-xl transition-transform group-open:rotate-90">chevron_right</span>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Breakpoints</p>
                </div>
              </summary>
              <div className="pl-5">
                <div className="flex items-center gap-3 py-2 group/item">
                  <input defaultChecked className="form-checkbox h-4 w-4 rounded border-white/30 bg-white/10 text-primary focus:ring-primary focus:ring-offset-background-dark" type="checkbox" />
                  <div className="flex flex-col">
                    <p className="text-sm text-white">profile.js</p>
                    <p className="text-xs text-white/50">Line 42</p>
                  </div>
                  <button className="ml-auto shrink-0 opacity-0 transition-opacity group-hover/item:opacity-100">
                    <span className="material-symbols-outlined flex size-6 items-center justify-center text-white/50 hover:text-white">close</span>
                  </button>
                </div>
                <div className="flex items-center gap-3 py-2 group/item">
                  <input className="form-checkbox h-4 w-4 rounded border-white/30 bg-white/10 text-primary focus:ring-primary focus:ring-offset-background-dark" type="checkbox" />
                  <div className="flex flex-col">
                    <p className="text-sm text-white">api.js</p>
                    <p className="text-xs text-white/50">Line 15</p>
                  </div>
                  <button className="ml-auto shrink-0 opacity-0 transition-opacity group-hover/item:opacity-100">
                    <span className="material-symbols-outlined flex size-6 items-center justify-center text-white/50 hover:text-white">close</span>
                  </button>
                </div>
              </div>
            </details>
          </div>
        </div>
        {/* Draggable Resizer */}
        <div className="w-1 cursor-col-resize bg-black/20 hover:bg-primary"></div>
        {/* Simulated Main Editor Area */}
        <div className="flex-1 bg-[#0c131a] p-4">
          <p className="text-white/50">Main editor and content area</p>
        </div>
      </div>
    </div>
  );
}