import React from 'react';

export default function ChallengeEditor() {
  return (
    <div className="bg-background-dark font-display text-[#CCCCCC] h-screen w-full flex flex-col">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
        .resize-handle {
            position: absolute;
            cursor: ew-resize;
            width: 6px;
            height: 100%;
            background: #101922;
            right: -3px;
            top: 0;
            z-index: 10;
            transition: background-color 0.2s;
        }
        .resize-handle-h {
            position: absolute;
            cursor: ns-resize;
            width: 100%;
            height: 6px;
            background: #101922;
            bottom: -3px;
            left: 0;
            z-index: 10;
            transition: background-color 0.2s;
        }
        .resize-handle:hover, .resize-handle-h:hover {
            background-color: #137fec;
        }
      `}</style>
      
      {/* External Scripts and Fonts */}
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      <link href="https://fonts.googleapis.com" rel="preconnect"/>
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
      
      {/* Tailwind Config */}
      <script dangerouslySetInnerHTML={{__html: `
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

      <header className="flex h-8 items-center border-b border-white/10 bg-[#16212d] px-2 text-xs">
        <nav className="flex h-full items-center gap-2">
          <div className="flex items-center gap-2 pr-2">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded size-5" data-alt="Snappy IDE logo with abstract blue shapes" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBV56lXDcfRcYRLIDP0BERHDAeHjijdjZkjuPPlJDfxqgJva7YZ8xE6ju57meCh805mfAL69QmsoUew4niUejgGPPSrQYymerqZ-qzkYcSSEp_PPJTPtV_11_h0-WgYl_Jmq8YZGnxddEltWu1JyKkFSmmFlH3cisbRy1t6pP0VdCSJYMtNk3lchDRkvkKmGuL350p4dQqQMJkDf5cDkWC3XyEZ7m0YJACczObZVFW5nHITgguk0fE364uENcTGLV3qtnF7Hps-d6ZY")'}}></div>
          </div>
          <button className="flex h-full items-center rounded-sm px-2 hover:bg-white/10">File</button>
          <button className="flex h-full items-center rounded-sm px-2 hover:bg-white/10">Edit</button>
          <button className="flex h-full items-center rounded-sm px-2 hover:bg-white/10">View</button>
          <button className="flex h-full items-center rounded-sm px-2 hover:bg-white/10">Run</button>
          <button className="flex h-full items-center rounded-sm px-2 hover:bg-white/10">Terminal</button>
          <button className="flex h-full items-center rounded-sm px-2 hover:bg-white/10">Help</button>
        </nav>
        <div className="flex-1 text-center font-medium">Daily Challenge: Two Sum - Snappy IDE</div>
        <div className="flex items-center gap-2 text-white/70">
          <button className="flex size-6 items-center justify-center rounded hover:bg-white/10">
            <span className="material-symbols-outlined text-base">minimize</span>
          </button>
          <button className="flex size-6 items-center justify-center rounded hover:bg-white/10">
            <span className="material-symbols-outlined text-base">crop_square</span>
          </button>
          <button className="flex size-6 items-center justify-center rounded hover:bg-red-500/80">
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>
      </header>
      <main className="flex-1 p-2 grid grid-cols-2 grid-rows-2 gap-2 bg-background-dark overflow-hidden">
        <div className="col-span-1 row-span-2 relative">
          <div className="w-full h-full flex flex-col rounded-md border border-white/10 bg-[#16212d] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#101922] cursor-move">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-primary">description</span>
                <h3 className="font-semibold text-white">Challenge: Two Sum</h3>
              </div>
              <div className="flex items-center gap-1 text-white/60">
                <button className="flex size-6 items-center justify-center rounded hover:bg-white/10">
                  <span className="material-symbols-outlined text-sm">more_horiz</span>
                </button>
              </div>
            </div>
            <div className="prose prose-invert p-4 text-sm text-[#CCCCCC] overflow-y-auto flex-1">
              <span className="inline-block rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400 mb-4">Easy</span>
              <p>Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.</p>
              <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
              <br/>
              <p><strong>Example 1:</strong></p>
              <pre><code><strong>Input:</strong> nums = [2,7,11,15], target = 9{'\n'}
              <strong>Output:</strong> [0,1]</code></pre>
              <br/>
              <p><strong>Example 2:</strong></p>
              <pre><code><strong>Input:</strong> nums = [3,2,4], target = 6{'\n'}
              <strong>Output:</strong> [1,2]</code></pre>
            </div>
          </div>
          <div className="resize-handle"></div>
        </div>
        <div className="col-span-1 row-span-1 relative">
          <div className="w-full h-full flex flex-col rounded-md border border-white/10 bg-[#16212d] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#101922] cursor-move">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-primary">code</span>
                <span className="text-sm font-medium text-white">Solution.js</span>
              </div>
              <div className="flex items-center gap-2">
                <select className="form-select bg-[#233648] border-none text-white text-xs rounded py-1 px-2 focus:ring-primary">
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Rust</option>
                </select>
              </div>
            </div>
            <div className="flex-1 bg-[#0d1117] font-mono text-sm relative overflow-y-auto p-4">
              <pre className="text-white/80"><code><span className="text-gray-500">1 </span><span style={{color: '#c678dd'}}>var</span> <span style={{color: '#e06c75'}}>twoSum</span> = <span style={{color: '#c678dd'}}>function</span>(<span style={{color: '#d19a66'}}>nums, target</span>) {'{'}{'\n'}
              <span className="text-gray-500">2 </span>  <span className="text-gray-500">// Your code here</span>{'\n'}
              <span className="text-gray-500">3 </span>{'\n'}
              <span className="text-gray-500">4 </span>{'}'};</code></pre>
            </div>
          </div>
          <div className="resize-handle-h"></div>
        </div>
        <div className="col-span-1 row-span-1 relative">
          <div className="w-full h-full flex flex-col rounded-md border border-white/10 bg-[#16212d] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#101922] cursor-move">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-primary">terminal</span>
                <h3 className="font-semibold text-white">Console / Output</h3>
              </div>
              <div className="flex items-center gap-1 text-white/60">
                <button className="flex size-6 items-center justify-center rounded hover:bg-white/10">
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            </div>
            <div className="flex-1 p-4 bg-[#0d1117] font-mono text-xs overflow-y-auto text-gray-300">
              <p><span className="text-green-400">&gt;</span> Running test cases...</p>
              <p>Test Case 1: [2,7,11,15], 9 ... <span className="text-green-400">PASSED</span></p>
              <p>Test Case 2: [3,2,4], 6 ... <span className="text-green-400">PASSED</span></p>
              <p>All test cases passed successfully.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex h-8 items-center justify-between border-t border-white/10 bg-[#101922] px-4">
        <div className="flex items-center gap-4 text-xs text-[#92adc9]">
          <p>Ready</p>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">share</span>
            <span>main</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">sync</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center gap-2 rounded bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/20">
            <span className="material-symbols-outlined text-sm">play_arrow</span>
            <span>Run Test Cases</span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded bg-primary px-3 py-1 text-xs font-bold text-white hover:bg-primary/90">
            <span className="material-symbols-outlined text-sm">check</span>
            <span>Submit Solution</span>
          </button>
        </div>
      </footer>
    </div>
  );
}