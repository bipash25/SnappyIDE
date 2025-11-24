import React from 'react';

const Profiles = () => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-['Space_Grotesk'] min-h-screen w-full flex relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

        .material-symbols-outlined {
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
      `}</style>

      {/* SideNavBar */}
      <aside className="flex w-64 flex-col bg-white/5 dark:bg-[#101922]/50 p-4 border-r border-white/10">
        <div className="flex flex-col gap-4 flex-grow">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar of Alex Duran" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7YQvImM8hG5pJq4xLvCt_MuC1H32jIOcfE9jAmSeeCd3zINLesVMrygL3BXpK_5BGa7pQyjE1291UxV5xeoHbh9-j517AExbmtVtzEWRedbEVlzUTFIqZLv1h-hU09hblhNjf5DbbqKdXRoQthRrKq0iFZFWHi3431jo97ST5xK9zQ8ddBsEMh60AbkELnN42RMlxvXvJT88vuAqLJGFFNzhSFyCDo5bVSOnHWhFOcipgd4gxkUcScnqpTIOnDwArIkDpx2oBYldk")' }}></div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-medium leading-normal">Alex Duran</h1>
              <p className="text-white/60 text-sm font-normal leading-normal">Active: Work - Python</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            <a className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-[#137fec]/20 hover:text-white rounded-lg" href="#">
              <span className="material-symbols-outlined text-white/80">dashboard</span>
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#137fec]/20 text-white" href="#">
              <span className="material-symbols-outlined !fill-1 text-white">account_circle</span>
              <p className="text-sm font-medium leading-normal">My Profiles</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-[#137fec]/20 hover:text-white rounded-lg" href="#">
              <span className="material-symbols-outlined text-white/80">storefront</span>
              <p className="text-sm font-medium leading-normal">Marketplace</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-[#137fec]/20 hover:text-white rounded-lg" href="#">
              <span className="material-symbols-outlined text-white/80">settings</span>
              <p className="text-sm font-medium leading-normal">Settings</p>
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-[#137fec]/20 hover:text-white rounded-lg" href="#">
            <span className="material-symbols-outlined text-white/80">help</span>
            <p className="text-sm font-medium leading-normal">Help</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-[#137fec]/20 hover:text-white rounded-lg" href="#">
            <span className="material-symbols-outlined text-white/80">logout</span>
            <p className="text-sm font-medium leading-normal">Logout</p>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-7xl">
          {/* PageHeading */}
          <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">My Profiles</h1>
              <p className="text-white/60 text-base font-normal leading-normal">Manage, create, and share your IDE profiles.</p>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-[#137fec] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#137fec]/90 transition-colors">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="truncate">Create New Profile</span>
            </button>
          </header>

          {/* Tabs */}
          <div className="border-b border-white/10">
            <div className="flex gap-8">
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#137fec] text-white pb-3 pt-1" href="#">
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">My Profiles</p>
              </a>
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-white/60 pb-3 pt-1 hover:text-white transition-colors" href="#">
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Profile Marketplace</p>
              </a>
            </div>
          </div>

          {/* SearchBar and Chips */}
          <div className="flex flex-wrap items-center gap-4 py-6">
            <div className="flex-grow">
              <label className="flex flex-col min-w-40 h-12 w-full max-w-lg">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-white/5">
                  <div className="text-white/60 flex items-center justify-center pl-4">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-white/60 px-2 text-base font-normal leading-normal" placeholder="Search profiles by name or tag..." />
                </div>
              </label>
            </div>
            <div className="flex gap-3 overflow-x-auto">
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 px-3 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-base">code</span>
                <p className="text-white text-sm font-medium leading-normal">Language</p>
                <span className="material-symbols-outlined text-white text-base">expand_more</span>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 px-3 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-base">data_object</span>
                <p className="text-white text-sm font-medium leading-normal">Framework</p>
                <span className="material-symbols-outlined text-white text-base">expand_more</span>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 px-3 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-base">build</span>
                <p className="text-white text-sm font-medium leading-normal">Tooling</p>
                <span className="material-symbols-outlined text-white text-base">expand_more</span>
              </button>
            </div>
          </div>

          {/* Profile Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Create New Profile Card */}
            <button className="flex aspect-square flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-white/20 bg-white/5 text-white/60 transition-colors hover:border-[#137fec] hover:bg-[#137fec]/10 hover:text-[#137fec]">
              <span className="material-symbols-outlined text-5xl">add_circle</span>
              <p className="text-lg font-bold">Create New Profile</p>
            </button>

            {/* Profile Card 1 */}
            <div className="group relative flex flex-col rounded-xl bg-white/5 p-5 transition-all duration-300 ring-1 ring-white/10 hover:ring-[#137fec] hover:shadow-2xl hover:shadow-[#137fec]/20">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                  <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"></circle>
                  </svg>
                  Active
                </span>
                <button className="text-white/60 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-500/10 mb-4">
                <span className="material-symbols-outlined text-4xl text-yellow-400">code</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white">Work - Python</h3>
                <p className="text-sm text-white/60 mt-1">Configured for Django backend development with Docker.</p>
              </div>
              <button className="mt-4 w-full cursor-not-allowed rounded-lg bg-white/10 py-2 text-sm font-bold text-white/50">Currently Active</button>
            </div>

            {/* Profile Card 2 */}
            <div className="group relative flex flex-col rounded-xl bg-white/5 p-5 transition-all duration-300 ring-1 ring-white/10 hover:ring-[#137fec] hover:shadow-2xl hover:shadow-[#137fec]/20">
              <div className="absolute top-4 right-4">
                <button className="text-white/60 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-500/10 mb-4">
                <span className="material-symbols-outlined text-4xl text-blue-400">javascript</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white">Personal - React</h3>
                <p className="text-sm text-white/60 mt-1">Setup for Next.js and TypeScript frontend projects.</p>
              </div>
              <button className="mt-4 w-full rounded-lg bg-white/10 py-2 text-sm font-bold text-white hover:bg-white/20 transition-colors">Set as Active</button>
            </div>

            {/* Profile Card 3 */}
            <div className="group relative flex flex-col rounded-xl bg-white/5 p-5 transition-all duration-300 ring-1 ring-white/10 hover:ring-[#137fec] hover:shadow-2xl hover:shadow-[#137fec]/20">
              <div className="absolute top-4 right-4">
                <button className="text-white/60 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500/10 mb-4">
                <span className="material-symbols-outlined text-4xl text-orange-400">terminal</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white">DevOps - Shell</h3>
                <p className="text-sm text-white/60 mt-1">For scripting, infrastructure management, and CLI tools.</p>
              </div>
              <button className="mt-4 w-full rounded-lg bg-white/10 py-2 text-sm font-bold text-white hover:bg-white/20 transition-colors">Set as Active</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profiles;