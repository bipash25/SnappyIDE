import React from 'react';

const SettingsEditorV1 = () => {
  return (
    <div className="bg-[#1E1E1E] font-['Space_Grotesk'] h-screen w-full flex overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

        .material-symbols-outlined {
          font-variation-settings:
          'FILL' 0,
          'wght' 400,
          'GRAD' 0,
          'opsz' 24
        }
      `}</style>

      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-[#252526] p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Snappy IDE Logo" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi6x5qz5evyHaVkSVmvuBiZ23Nzh1xMYxjcgN6g6huxx-Ts7kC7-mtOkMTwmDANfIRz9cNZxQ-_mH5TkdCDbgQVze816_NoTixBfc6Ds7gUUUqxYPq-h1C3yx9aNfEIHTFfEKEvnWedlUHcwbY_6lo2EMWStUltW6Om1hRYJJshBml35tYiCEowkn3ap0mOc_DaIb_fmACzUnemvN7D2FWamzXiwx_wE_drFg009oDcY8JBpK3GRVdm8RnMes1E1p_RHOwniRDxarn")' }}></div>
            <div className="flex flex-col">
              <h1 className="text-[#D4D4D4] text-base font-medium leading-normal">Snappy IDE</h1>
              <p className="text-[#808080] text-sm font-normal leading-normal">Settings</p>
            </div>
          </div>
          <nav className="mt-4 flex flex-col gap-1">
            <a className="flex items-center gap-3 rounded-lg bg-[#007ACC]/20 px-3 py-2 text-[#007ACC]" href="#">
              <span className="material-symbols-outlined text-xl">edit_square</span>
              <p className="text-sm font-medium leading-normal">Editor</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#D4D4D4] hover:bg-[#2A2A2A]" href="#">
              <span className="material-symbols-outlined text-xl">draft</span>
              <p className="text-sm font-medium leading-normal">Files</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#D4D4D4] hover:bg-[#2A2A2A]" href="#">
              <span className="material-symbols-outlined text-xl">terminal</span>
              <p className="text-sm font-medium leading-normal">Terminal</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#D4D4D4] hover:bg-[#2A2A2A]" href="#">
              <span className="material-symbols-outlined text-xl">space_dashboard</span>
              <p className="text-sm font-medium leading-normal">Workbench</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#D4D4D4] hover:bg-[#2A2A2A]" href="#">
              <span className="material-symbols-outlined text-xl">palette</span>
              <p className="text-sm font-medium leading-normal">Themes</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#D4D4D4] hover:bg-[#2A2A2A]" href="#">
              <span className="material-symbols-outlined text-xl">keyboard</span>
              <p className="text-sm font-medium leading-normal">Keyboard Shortcuts</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#D4D4D4] hover:bg-[#2A2A2A]" href="#">
              <span className="material-symbols-outlined text-xl">extension</span>
              <p className="text-sm font-medium leading-normal">Extensions</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#D4D4D4] hover:bg-[#2A2A2A]" href="#">
              <span className="material-symbols-outlined text-xl">person</span>
              <p className="text-sm font-medium leading-normal">Profiles</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#D4D4D4] hover:bg-[#2A2A2A]" href="#">
              <span className="material-symbols-outlined text-xl">fork_right</span>
              <p className="text-sm font-medium leading-normal">Git</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#D4D4D4] hover:bg-[#2A2A2A]" href="#">
              <span className="material-symbols-outlined text-xl">bug_report</span>
              <p className="text-sm font-medium leading-normal">Debug</p>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-6xl">
          <div className="sticky top-0 z-10 bg-[#1E1E1E] py-4">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-grow">
                <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#808080]">search</span>
                <input className="w-full rounded-lg border border-[#3C3C3C] bg-[#252526] py-2.5 pl-11 pr-4 text-sm text-[#D4D4D4] placeholder:text-[#808080] focus:border-[#007ACC] focus:outline-none focus:ring-1 focus:ring-[#007ACC]" placeholder="Search Settings" type="text" defaultValue="" />
              </div>
              <div className="flex flex-shrink-0">
                <div className="flex h-10 items-center justify-center rounded-lg bg-[#252526] p-1">
                  <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-md px-4 py-2 has-[:checked]:bg-[#1E1E1E] has-[:checked]:text-[#D4D4D4]">
                    <span className="truncate text-sm font-medium">User</span>
                    <input defaultChecked className="invisible w-0" name="settings-scope" type="radio" value="User" />
                  </label>
                  <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-md px-4 py-2 text-[#808080] has-[:checked]:bg-[#1E1E1E] has-[:checked]:text-[#D4D4D4]">
                    <span className="truncate text-sm font-medium">Workspace</span>
                    <input className="invisible w-0" name="settings-scope" type="radio" value="Workspace" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <h2 className="mb-6 text-2xl font-bold text-[#D4D4D4]">Editor Settings</h2>
            <div className="mb-8 border-b border-[#3C3C3C]">
              <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                <a className="whitespace-nowrap border-b-2 border-[#007ACC] px-1 py-3 text-sm font-medium text-[#007ACC]" href="#">Text Editing</a>
                <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-3 text-sm font-medium text-[#808080] hover:border-[#808080] hover:text-[#D4D4D4]" href="#">Cursor</a>
                <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-3 text-sm font-medium text-[#808080] hover:border-[#808080] hover:text-[#D4D4D4]" href="#">Find</a>
                <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-3 text-sm font-medium text-[#808080] hover:border-[#808080] hover:text-[#D4D4D4]" href="#">Formatting</a>
                <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-3 text-sm font-medium text-[#808080] hover:border-[#808080] hover:text-[#D4D4D4]" href="#">Suggestions</a>
              </nav>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-lg border border-[#3C3C3C] bg-[#252526] p-6">
                <h3 className="text-[#D4D4D4] mb-4 text-lg font-bold leading-tight">Font</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <label className="text-[#D4D4D4] mb-2 text-sm font-medium leading-normal">Font Family</label>
                    <input className="h-10 w-full resize-none overflow-hidden rounded-lg border border-[#3C3C3C] bg-[#252526] p-2.5 text-sm font-normal leading-normal text-[#D4D4D4] placeholder:text-[#808080] focus:border-[#007ACC] focus:outline-0 focus:ring-0" defaultValue="Space Grotesk, monospace" />
                    <p className="text-[#808080] mt-1 text-xs">Controls the font family.</p>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#D4D4D4] mb-2 text-sm font-medium leading-normal">Font Size</label>
                    <input className="h-10 w-full resize-none overflow-hidden rounded-lg border border-[#3C3C3C] bg-[#252526] p-2.5 text-sm font-normal leading-normal text-[#D4D4D4] placeholder:text-[#808080] focus:border-[#007ACC] focus:outline-0 focus:ring-0" type="number" defaultValue="14" />
                    <p className="text-[#808080] mt-1 text-xs">Controls the font size in pixels.</p>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#D4D4D4] mb-2 text-sm font-medium leading-normal">Line Height</label>
                    <input className="h-10 w-full resize-none overflow-hidden rounded-lg border border-[#3C3C3C] bg-[#252526] p-2.5 text-sm font-normal leading-normal text-[#D4D4D4] placeholder:text-[#808080] focus:border-[#007ACC] focus:outline-0 focus:ring-0" type="number" defaultValue="20" />
                    <p className="text-[#808080] mt-1 text-xs">Controls the line height. Use 0 to compute from font size.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-[#3C3C3C] bg-[#252526] p-6">
                <h3 className="text-[#D4D4D4] mb-4 text-lg font-bold leading-tight">Minimap</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input defaultChecked className="peer sr-only" type="checkbox" defaultValue="" />
                      <div className="peer h-6 w-11 rounded-full bg-[#3C3C3C] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-[#007ACC] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                    <div>
                      <p className="text-[#D4D4D4] text-sm font-medium">Enable Minimap</p>
                      <p className="text-[#808080] text-xs">Controls whether the minimap is shown.</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#D4D4D4] mb-2 text-sm font-medium leading-normal">Minimap Side</label>
                    <select className="h-10 w-full cursor-pointer appearance-none rounded-lg border border-[#3C3C3C] bg-[#252526] bg-[url('data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2020%2020%27%3e%3cpath%20stroke=%27%23808080%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%271.5%27%20d=%27m6%208%204%204%204-4%27/%3e%3c/svg%3e')] bg-right-2.5 bg-no-repeat p-2.5 pr-8 text-sm font-normal text-[#D4D4D4] focus:border-[#007ACC] focus:outline-none focus:ring-0">
                      <option>right</option>
                      <option>left</option>
                    </select>
                    <p className="text-[#808080] mt-1 text-xs">Controls the side where the minimap is rendered.</p>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#D4D4D4] mb-2 text-sm font-medium leading-normal">Minimap Scale</label>
                    <div className="flex items-center justify-between">
                      <input className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#3C3C3C] accent-[#007ACC]" max="3" min="1" step="1" type="range" defaultValue="1" />
                      <span className="text-[#808080] ml-4 text-sm">1</span>
                    </div>
                    <p className="text-[#808080] mt-1 text-xs">Controls the size of the minimap.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-[#3C3C3C] bg-[#252526] p-6">
                <h3 className="text-[#D4D4D4] mb-4 text-lg font-bold leading-tight">Word Wrap</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <label className="text-[#D4D4D4] mb-2 text-sm font-medium leading-normal">Word Wrap</label>
                    <select className="h-10 w-full cursor-pointer appearance-none rounded-lg border border-[#3C3C3C] bg-[#252526] bg-[url('data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2020%2020%27%3e%3cpath%20stroke=%27%23808080%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%271.5%27%20d=%27m6%208%204%204%204-4%27/%3e%3c/svg%3e')] bg-right-2.5 bg-no-repeat p-2.5 pr-8 text-sm font-normal text-[#D4D4D4] focus:border-[#007ACC] focus:outline-none focus:ring-0">
                      <option>off</option>
                      <option>on</option>
                      <option>wordWrapColumn</option>
                      <option>bounded</option>
                    </select>
                    <p className="text-[#808080] mt-1 text-xs">Controls how lines should wrap.</p>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#D4D4D4] mb-2 text-sm font-medium leading-normal">Word Wrap Column</label>
                    <input className="h-10 w-full resize-none overflow-hidden rounded-lg border border-[#3C3C3C] bg-[#252526] p-2.5 text-sm font-normal leading-normal text-[#D4D4D4] placeholder:text-[#808080] focus:border-[#007ACC] focus:outline-0 focus:ring-0" type="number" defaultValue="80" />
                    <p className="text-[#808080] mt-1 text-xs">Controls the wrapping column of the editor.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-[#3C3C3C] bg-[#252526] p-6">
                <h3 className="text-[#D4D4D4] mb-4 text-lg font-bold leading-tight">Tab and Indentation</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <label className="text-[#D4D4D4] mb-2 text-sm font-medium leading-normal">Tab Size</label>
                    <input className="h-10 w-full resize-none overflow-hidden rounded-lg border border-[#3C3C3C] bg-[#252526] p-2.5 text-sm font-normal leading-normal text-[#D4D4D4] placeholder:text-[#808080] focus:border-[#007ACC] focus:outline-0 focus:ring-0" type="number" defaultValue="4" />
                    <p className="text-[#808080] mt-1 text-xs">The number of spaces a tab is equal to.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input defaultChecked className="peer sr-only" type="checkbox" defaultValue="" />
                      <div className="peer h-6 w-11 rounded-full bg-[#3C3C3C] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-[#007ACC] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                    <div>
                      <p className="text-[#D4D4D4] text-sm font-medium">Insert Spaces</p>
                      <p className="text-[#808080] text-xs">Insert spaces when pressing Tab.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsEditorV1;