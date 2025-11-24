import React from 'react';

export default function CodingChallengesAndProblemsDashboard() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#CCCCCC] h-screen w-full flex flex-col">
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

      <div className="grid flex-1 grid-cols-12 gap-0 overflow-hidden">
        <aside className="col-span-3 flex h-full flex-col border-r border-white/10 bg-[#16212d] p-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 px-2">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Snappy IDE logo with abstract blue shapes" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBV56lXDcfRcYRLIDP0BERHDAeHjijdjZkjuPPlJDfxqgJva7YZ8xE6ju57meCh805mfAL69QmsoUew4niUejgGPPSrQYymerqZ-qzkYcSSEp_PPJTPtV_11_h0-WgYl_Jmq8YZGnxddEltWu1JyKkFSmmFlH3cisbRy1t6pP0VdCSJYMtNk3lchDRkvkKmGuL350p4dQqQMJkDf5cDkWC3XyEZ7m0YJACczObZVFW5nHITgguk0fE364uENcTGLV3qtnF7Hps-d6ZY")' }}></div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-medium leading-normal">Challenges List</h1>
                <p className="text-[#92adc9] text-sm font-normal leading-normal">Snappy IDE</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-3 py-2 text-white bg-white/10">
                <span className="material-symbols-outlined text-xl">emoji_events</span>
                <span className="text-sm font-medium leading-normal">All Challenges</span>
              </button>
              <button className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-3 py-2 text-white hover:bg-white/10">
                <span className="material-symbols-outlined text-xl">arrow_back</span>
                <span className="text-sm font-medium leading-normal">Back to Welcome</span>
              </button>
            </div>
          </div>
        </aside>
        <main className="col-span-9 flex h-full flex-col bg-background-dark p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-6">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-white">Coding Challenges</h2>
                <p className="text-[#92adc9]">Sharpen your skills and climb the ranks.</p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90">
                <span className="material-symbols-outlined text-base">shuffle</span>
                <span>Pick One</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="rounded-lg border border-white/10 bg-[#16212d] p-4 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-400">task_alt</span>
                  <h3 className="text-white font-medium">Problems Solved</h3>
                </div>
                <p className="text-3xl font-bold text-white">42</p>
                <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className="text-xs text-[#92adc9] mt-1">12 Easy / 20 Medium / 10 Hard</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#16212d] p-4 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-400">military_tech</span>
                  <h3 className="text-white font-medium">Current Streak</h3>
                </div>
                <p className="text-3xl font-bold text-white">12 Days</p>
                <p className="text-xs text-[#92adc9] mt-1">Keep it going! Your longest streak is 25 days.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#16212d] p-4 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-400">shield</span>
                  <h3 className="text-white font-medium">Badges Earned</h3>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center justify-center size-8 bg-yellow-500/20 rounded-full" title="Problem Solver I"><span className="material-symbols-outlined text-yellow-400">star</span></div>
                  <div className="flex items-center justify-center size-8 bg-blue-500/20 rounded-full" title="Algorithm Ace"><span className="material-symbols-outlined text-blue-400">psychology</span></div>
                  <div className="flex items-center justify-center size-8 bg-purple-500/20 rounded-full" title="Speed Coder"><span className="material-symbols-outlined text-purple-400">bolt</span></div>
                  <div className="flex items-center justify-center size-8 bg-white/10 rounded-full text-[#92adc9]">+2 more</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col rounded-lg border border-white/10 bg-[#16212d] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <h3 className="text-base font-semibold text-white">All Problems</h3>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="material-symbols-outlined text-base absolute left-2 top-1/2 -translate-y-1/2 text-white/50">search</span>
                    <input className="form-input bg-[#233648] border-none text-white text-xs rounded py-1.5 pl-8 pr-2 w-48 focus:ring-primary" placeholder="Search challenges..." type="search" />
                  </div>
                  <select className="form-select bg-[#233648] border-none text-white text-xs rounded py-1.5 px-2 focus:ring-primary">
                    <option>Difficulty</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-[#92adc9] uppercase bg-white/5">
                    <tr>
                      <th className="px-6 py-3 w-12" scope="col"></th>
                      <th className="px-6 py-3" scope="col">Title</th>
                      <th className="px-6 py-3" scope="col">Difficulty</th>
                      <th className="px-6 py-3" scope="col">Category</th>
                      <th className="px-6 py-3" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 hover:bg-white/5 cursor-pointer">
                      <td className="px-6 py-4 text-green-400"><span className="material-symbols-outlined">check_circle</span></td>
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">Two Sum</th>
                      <td className="px-6 py-4"><span className="inline-block flex-shrink-0 rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">Easy</span></td>
                      <td className="px-6 py-4">Arrays</td>
                      <td className="px-6 py-4 text-right"><button className="text-primary text-xs font-bold hover:underline">Solve</button></td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 cursor-pointer">
                      <td className="px-6 py-4 text-green-400"><span className="material-symbols-outlined">check_circle</span></td>
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">Reverse Linked List</th>
                      <td className="px-6 py-4"><span className="inline-block flex-shrink-0 rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">Easy</span></td>
                      <td className="px-6 py-4">Linked List</td>
                      <td className="px-6 py-4 text-right"><button className="text-primary text-xs font-bold hover:underline">Solve</button></td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 cursor-pointer">
                      <td className="px-6 py-4 text-white/30"></td>
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">Longest Substring Without Repeating Characters</th>
                      <td className="px-6 py-4"><span className="inline-block flex-shrink-0 rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-400">Medium</span></td>
                      <td className="px-6 py-4">Strings</td>
                      <td className="px-6 py-4 text-right"><button className="text-primary text-xs font-bold hover:underline">Solve</button></td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 cursor-pointer">
                      <td className="px-6 py-4 text-white/30"></td>
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">Container With Most Water</th>
                      <td className="px-6 py-4"><span className="inline-block flex-shrink-0 rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-400">Medium</span></td>
                      <td className="px-6 py-4">Arrays</td>
                      <td className="px-6 py-4 text-right"><button className="text-primary text-xs font-bold hover:underline">Solve</button></td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 cursor-pointer">
                      <td className="px-6 py-4 text-green-400"><span className="material-symbols-outlined">check_circle</span></td>
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">Valid Palindrome</th>
                      <td className="px-6 py-4"><span className="inline-block flex-shrink-0 rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">Easy</span></td>
                      <td className="px-6 py-4">Strings</td>
                      <td className="px-6 py-4 text-right"><button className="text-primary text-xs font-bold hover:underline">Solve</button></td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 cursor-pointer">
                      <td className="px-6 py-4 text-white/30"></td>
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">Median of Two Sorted Arrays</th>
                      <td className="px-6 py-4"><span className="inline-block flex-shrink-0 rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-400">Hard</span></td>
                      <td className="px-6 py-4">Arrays, Binary Search</td>
                      <td className="px-6 py-4 text-right"><button className="text-primary text-xs font-bold hover:underline">Solve</button></td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 cursor-pointer">
                      <td className="px-6 py-4 text-white/30"></td>
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap" scope="row">Product of Array Except Self</th>
                      <td className="px-6 py-4"><span className="inline-block flex-shrink-0 rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-400">Medium</span></td>
                      <td className="px-6 py-4">Arrays</td>
                      <td className="px-6 py-4 text-right"><button className="text-primary text-xs font-bold hover:underline">Solve</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="flex h-6 items-center border-t border-white/10 bg-[#101922] px-4">
        <p className="text-xs text-[#92adc9]">Ready</p>
      </footer>
    </div>
  );
}