import React from 'react';

const SettingsEditorV2 = () => {
  return (
    <div className="dark font-display">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
      <div className="relative flex min-h-screen w-full flex-col bg-[#f6f7f8] dark:bg-[#101922] group/design-root overflow-x-hidden text-slate-900 dark:text-white">
        <div className="flex flex-1">
          {/* Side Navigation Bar */}
          <aside className="flex h-auto min-h-screen w-64 flex-col bg-slate-100/50 dark:bg-[#101922]/50 p-4 border-r border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                  data-alt="Project logo placeholder" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tq5Wpn5KYGEzriNZkSRhjHLe-dOBLvUmFdyN7z8RuFSZ0yIzC9oT6w5NXHQKhKv-pa1jH8xEpofY-9S5JAV-Gi3suzhTHJx6GfPByEDXaHAeV8DZivCaSN6rOrjVLlR-zkVQk8F6BIk2ofJX2kWejArcjiV5a6EbkiSzF5TKUay0tqtGQu7Z0POys2DAgP-4uOF0w3wEw8QYTOu95QpN4WuyMAgmHPsJ44sjNHeJnUdx77Ac7W-eT_5MOFhe9Rdq_F2N_qLNQvtY")' }}
                ></div>
                <div className="flex flex-col">
                  <h1 className="text-slate-900 dark:text-white text-base font-medium leading-normal">IDE Settings</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Workspace: MyProject</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-4">
                <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">settings</span>
                  <p className="text-sm font-medium leading-normal">General</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#137fec]/20 text-[#137fec]" href="#">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                  <p className="text-sm font-bold leading-normal">Editor</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">terminal</span>
                  <p className="text-sm font-medium leading-normal">Terminal</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">fork_right</span>
                  <p className="text-sm font-medium leading-normal">Version Control</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">extension</span>
                  <p className="text-sm font-medium leading-normal">Extensions</p>
                </a>
              </div>
            </div>
          </aside>
          {/* Main Content Area */}
          <main className="flex flex-1 flex-col p-6 lg:p-8">
            <div className="w-full max-w-4xl mx-auto">
              {/* Page Heading and Search Bar */}
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Editor</h1>
                <div className="w-full sm:w-auto sm:min-w-72">
                  <label className="flex flex-col h-11 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-200 dark:bg-slate-800">
                      <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center pl-3">
                        <span className="material-symbols-outlined text-2xl">search</span>
                      </div>
                      <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-2 text-base font-normal leading-normal" placeholder="Search settings" defaultValue="" />
                    </div>
                  </label>
                </div>
              </div>
              {/* Tabs Navigation */}
              <div className="border-b border-slate-200 dark:border-slate-700 mb-6">
                <div className="flex gap-6">
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#137fec] text-[#137fec] pb-3 pt-1" href="#">
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">General</p>
                  </a>
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 dark:text-slate-400 pb-3 pt-1 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" href="#">
                    <p className="text-sm font-medium leading-normal tracking-[0.015em]">Text Rendering</p>
                  </a>
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 dark:text-slate-400 pb-3 pt-1 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" href="#">
                    <p className="text-sm font-medium leading-normal tracking-[0.015em]">Features</p>
                  </a>
                </div>
              </div>
              {/* Settings Content */}
              <div className="flex flex-col gap-8">
                {/* Font Section */}
                <section>
                  <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Font</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Font Family */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="font-family">Font Family</label>
                      <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-[#137fec] focus:ring-[#137fec]/50 p-2.5" id="font-family">
                        <option>Fira Code</option>
                        <option>JetBrains Mono</option>
                        <option>Source Code Pro</option>
                        <option>Consolas</option>
                      </select>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Controls the editor font family.</p>
                    </div>
                    {/* Font Size */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="font-size">Font Size</label>
                      <input className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-[#137fec] focus:ring-[#137fec]/50 p-2.5" id="font-size" type="number" defaultValue="14" />
                      <p className="text-xs text-slate-500 dark:text-slate-400">Controls the font size in pixels.</p>
                    </div>
                    {/* Line Height */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="line-height">Line Height</label>
                      <input className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-[#137fec] focus:ring-[#137fec]/50 p-2.5" id="line-height" step="0.1" type="number" defaultValue="1.5" />
                      <p className="text-xs text-slate-500 dark:text-slate-400">Controls the line height. Use 0 for default.</p>
                    </div>
                    {/* Letter Spacing */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="letter-spacing">Letter Spacing</label>
                      <input className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-[#137fec] focus:ring-[#137fec]/50 p-2.5" id="letter-spacing" step="0.1" type="number" defaultValue="0" />
                      <p className="text-xs text-slate-500 dark:text-slate-400">Controls the letter spacing in pixels.</p>
                    </div>
                  </div>
                </section>
                {/* Cursor Section */}
                <section>
                  <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Cursor</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Cursor Style */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="cursor-style">Cursor Style</label>
                      <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-[#137fec] focus:ring-[#137fec]/50 p-2.5" id="cursor-style">
                        <option>line</option>
                        <option>block</option>
                        <option>underline</option>
                      </select>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Controls the cursor style.</p>
                    </div>
                    {/* Cursor Blinking */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="cursor-blinking">Cursor Blinking</label>
                      <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-[#137fec] focus:ring-[#137fec]/50 p-2.5" id="cursor-blinking">
                        <option>blink</option>
                        <option>smooth</option>
                        <option>phase</option>
                        <option>solid</option>
                      </select>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Controls the cursor animation style.</p>
                    </div>
                  </div>
                </section>
                {/* Additional Features Section */}
                <section>
                  <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Features</h2>
                  <div className="flex flex-col gap-5">
                    {/* Word Wrap Toggle */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Word Wrap</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Controls how lines should wrap.</p>
                      </div>
                      <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#137fec] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#137fec] focus:ring-offset-2 focus:ring-offset-[#f6f7f8] dark:focus:ring-offset-[#101922]" role="switch">
                        <span className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"></span>
                      </button>
                    </div>
                    {/* Minimap Toggle */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Minimap</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Controls whether the minimap is shown.</p>
                      </div>
                      <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#137fec] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#137fec] focus:ring-offset-2 focus:ring-offset-[#f6f7f8] dark:focus:ring-offset-[#101922]" role="switch">
                        <span className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"></span>
                      </button>
                    </div>
                    {/* Bracket Pair Colorization Toggle */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Bracket Pair Colorization</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Controls whether bracket pairs are colorized.</p>
                      </div>
                      <button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-300 dark:bg-slate-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#137fec] focus:ring-offset-2 focus:ring-offset-[#f6f7f8] dark:focus:ring-offset-[#101922]" role="switch">
                        <span className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"></span>
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsEditorV2;