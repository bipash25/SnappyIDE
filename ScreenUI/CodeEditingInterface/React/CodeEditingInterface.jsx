import React from 'react';

export default function CodeEditingInterface() {
  return (
    <div className="bg-background-dark font-display text-[#d4d4d4] flex flex-col h-screen w-full">
      <style>{`
        .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
        .material-symbols-outlined.fill {
            font-variation-settings: 'FILL' 1;
        }
        .syntax-keyword { color: #569cd6; }
        .syntax-function { color: #dcdcaa; }
        .syntax-string { color: #ce9178; }
        .syntax-comment { color: #6a9955; }
        .syntax-number { color: #b5cea8; }
        .syntax-punctuation { color: #d4d4d4; }
        .syntax-type { color: #4ec9b0; }
        .syntax-variable { color: #9cdcfe; }
        .syntax-macro { color: #c586c0; }
        .line-number { color: #858585; text-align: right; user-select: none; padding-right: 1.5rem;}
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
                "display": ["Space Grotesk"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
      `}} />

      <div className="flex-shrink-0 bg-[#1e2d3b] text-white text-xs px-2">
        <div className="flex items-center h-8 space-x-4">
          <div className="font-bold">Snappy</div>
          <span>File</span>
          <span>Edit</span>
          <span>Selection</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-shrink-0">
          <div className="w-12 bg-[#17222c] flex flex-col items-center justify-between py-2">
            <div className="flex flex-col items-center gap-4">
              <a className="text-white relative" href="#" title="Explorer">
                <span className="material-symbols-outlined text-2xl">description</span>
                <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-primary"></div>
              </a>
              <a className="text-[#808080] hover:text-white" href="#" title="Search">
                <span className="material-symbols-outlined text-2xl">search</span>
              </a>
              <a className="text-[#808080] hover:text-white" href="#" title="Source Control">
                <span className="material-symbols-outlined text-2xl">fork_right</span>
              </a>
              <a className="text-[#808080] hover:text-white" href="#" title="Run & Debug">
                <span className="material-symbols-outlined text-2xl">play_circle</span>
              </a>
              <a className="text-[#808080] hover:text-white" href="#" title="Extensions">
                <span className="material-symbols-outlined text-2xl">extension</span>
              </a>
              <a className="text-[#808080] hover:text-white" href="#" title="Quick Actions">
                <span className="material-symbols-outlined text-2xl">bolt</span>
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <a className="text-[#808080] hover:text-white" href="#" title="Account">
                <span className="material-symbols-outlined text-2xl">account_circle</span>
              </a>
              <a className="text-[#808080] hover:text-white" href="#" title="Settings">
                <span className="material-symbols-outlined text-2xl">settings</span>
              </a>
            </div>
          </div>
          <div className="w-64 bg-background-dark p-2 flex flex-col border-r border-white/10">
            <h2 className="text-xs uppercase text-[#808080] font-bold px-2 mb-2">Explorer</h2>
            <div className="flex-1 overflow-y-auto">
              <div className="text-sm font-semibold text-white mb-2 flex items-center cursor-pointer">
                <span className="material-symbols-outlined text-lg mr-1">expand_more</span>
                SNAPPY_PROJECT
              </div>
              <ul className="space-y-1 pl-2 text-sm">
                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-yellow-500">folder</span>
                  <span>src</span>
                </li>
                <li className="flex items-center space-x-2 pl-8 text-white bg-primary/20 hover:bg-primary/30 rounded py-0.5 cursor-pointer">
                  <img className="h-4 w-4 invert brightness-0" data-alt="Rust language logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt0XVNdBsXBPqCzHc1J-tO3aWfSF_YBlLLVNED3oIS2y784VXm8OuGMyHylHgWt8aX7LBPKS3v7vVU73hqm19aS_4xMghiGWDUt8koHNBUlKntLFL5RIUsgFQM6aY-jegshjOI8gFJ1pNuynRwgvjF1Fw9-OY5w70aqvN6VL3d7PaMQiuuUD1usQLBeVLAUjNdW54s7up3g9Np-rHrYY1th9POJnV-TnUqxOV2iC7KeiPUS5qR3WFXxlpmW8XnYCiK3TpH_xhbVHJk" />
                  <span className="font-semibold">main.rs</span>
                </li>
                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-yellow-500">folder</span>
                  <span>target</span>
                </li>
                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                  <span className="material-symbols-outlined text-lg">description</span>
                  <span>.gitignore</span>
                </li>
                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                  <span className="material-symbols-outlined text-lg">description</span>
                  <span>Cargo.toml</span>
                </li>
                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                  <span className="material-symbols-outlined text-lg">description</span>
                  <span>README.md</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-[#101922]">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex border-b border-white/10 flex-shrink-0 items-center justify-between pr-3">
              <div className="flex">
                <a className="flex items-center justify-center gap-2 px-4 py-2 bg-background-dark rounded-t-md" href="#">
                  <img className="h-4 w-4 invert brightness-0" data-alt="Rust language logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwbCAzP0v71RGrytHtJ7IBKPi9x6eWK8q76VRHGffx29rCmjrkhX00dcf_zmcnKnxl0G376xOsvpyXumYGO-5ATim4SXS62CazaEnMUl5YBr6neAPOWucpRcvfMR2RL7gW_Z38MxE4KWGZVqBvRnSiClS3IgpyD9AcXZahAJfuP4JOwEGHOL6IEnztYKxT3n391gsghLYsbY2WGBHeYsNBGHEIrxgHrl6C447VwaH3wjdhLOC3kRzsQmulyPmnvuR5FCzumLh6BLJV" />
                  <p className="text-white text-sm font-medium leading-normal">main.rs</p>
                  <span className="material-symbols-outlined text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full p-0.5">close</span>
                </a>
                <a className="flex items-center justify-center gap-2 px-4 py-2 border-r border-white/10 text-[#808080] hover:bg-white/5 group rounded-t-md" href="#">
                  <span className="material-symbols-outlined text-base">description</span>
                  <p className="text-sm font-medium leading-normal">Cargo.toml</p>
                  <span className="material-symbols-outlined text-base text-transparent group-hover:text-white/70 hover:text-white hover:bg-white/10 rounded-full p-0.5">close</span>
                </a>
                <a className="flex items-center justify-center gap-2 px-4 py-2 border-r border-white/10 text-[#808080] hover:bg-white/5 group rounded-t-md" href="#">
                  <span className="material-symbols-outlined text-base">description</span>
                  <p className="text-sm font-medium leading-normal">README.md</p>
                  <span className="material-symbols-outlined text-base text-transparent group-hover:text-white/70 hover:text-white hover:bg-white/10 rounded-full p-0.5">close</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#d4d4d4]">
                <button className="flex items-center justify-center p-1.5 rounded hover:bg-white/10" title="Run Code">
                  <span className="material-symbols-outlined text-lg fill">play_arrow</span>
                </button>
                <button className="flex items-center justify-center p-1.5 rounded hover:bg-white/10" title="Split Editor">
                  <span className="material-symbols-outlined text-lg">splitscreen</span>
                </button>
                <button className="flex items-center justify-center p-1.5 rounded hover:bg-white/10" title="More Actions">
                  <span className="material-symbols-outlined text-lg">more_horiz</span>
                </button>
              </div>
            </div>
            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 font-mono text-sm leading-6 overflow-y-auto p-2">
                {/* Removed invalid tag <td="line-number">7</td="line-number"> */}
                <table>
                  <tbody>
                    <tr><td className="line-number">1</td><td><span className="syntax-comment">// Welcome to Snappy IDE!</span></td></tr>
                    <tr><td className="line-number">2</td><td><span className="syntax-comment">// Edit this file to get started.</span></td></tr>
                    <tr><td className="line-number">3</td><td></td></tr>
                    <tr><td className="line-number">4</td><td><span className="syntax-keyword">fn</span> <span className="syntax-function">main</span><span className="syntax-punctuation">() {'{'}</span></td></tr>
                    <tr><td className="line-number">5</td><td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-variable">println!</span><span className="syntax-punctuation">(</span><span className="syntax-string">"Hello, world!"</span><span className="syntax-punctuation">);</span></td></tr>
                    <tr><td className="line-number">6</td><td><span className="syntax-punctuation">{'}'}</span></td></tr>
                    <tr><td></td></tr>
                  </tbody>
                </table>
              </div>
              <div className="w-28 bg-[#101922] border-l border-white/5 flex-shrink-0">
                <div className="h-full opacity-30 bg-center bg-no-repeat bg-contain" data-alt="Abstract representation of code minimap" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC97DEXqamWGNJXjcV3EpiKil74WEE_hCNSDXG9sPFIJ5ZHYga3pap3WXQ6BvMm8ax_AEVMS000xPl_yeS7Jm_abyJ1A49iUngxr8SiKEE0hk3aJI_X-xwY0Qigyq06ECGgxDV_Q4vXVC_KxJxXwW721KkXQ6nAyeALYMXwvbJjc-tRpXEloVCIQjfrEh4BIL-lAgBc4y2jBcE-uErI9-sHzBbt1c-j3-3DFmg4Cgq1Y8zJgSQamQ6CQwi2HBNxkSKSXu8mpX4RMhU2")' }}></div>
              </div>
            </div>
          </div>
          <div className="h-48 flex-shrink-0 border-t border-white/10 flex flex-col">
            <div className="flex px-4 py-1.5 border-b border-white/10">
              <div className="flex items-center justify-center p-1 bg-[#17222c] rounded-lg">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-3 py-1 text-sm font-medium leading-normal text-white bg-primary">
                  <span className="truncate">Terminal</span>
                  <input defaultChecked className="invisible w-0" name="terminal-tabs" type="radio" value="Terminal" />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-3 py-1 text-sm font-medium leading-normal text-[#808080] hover:bg-white/10">
                  <span className="truncate">Debug Console</span>
                  <input className="invisible w-0" name="terminal-tabs" type="radio" value="Debug Console" />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-3 py-1 text-sm font-medium leading-normal text-[#808080] hover:bg-white/10">
                  <span className="truncate">Output</span>
                  <input className="invisible w-0" name="terminal-tabs" type="radio" value="Output" />
                </label>
              </div>
            </div>
            <div className="flex-1 p-2 font-mono text-sm bg-background-dark overflow-y-auto">
              <p>user@snappy-dev:~$ <span className="bg-primary animate-pulse w-2 h-4 inline-block"></span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 bg-primary h-6 flex items-center justify-between px-3 text-white text-xs">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-1 hover:bg-white/20 px-1 rounded" href="#">
            <span className="material-symbols-outlined text-sm">fork_right</span>
            <span>main</span>
          </a>
          <a className="flex items-center gap-1 hover:bg-white/20 px-1 rounded" href="#">
            <span className="material-symbols-outlined text-sm">sync</span>
            <span>0</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:bg-white/20 px-1 rounded" href="#">
            <span>Ln 6, Col 2</span>
          </a>
          <a className="hover:bg-white/20 px-1 rounded" href="#">
            <span>Spaces: 4</span>
          </a>
          <a className="hover:bg-white/20 px-1 rounded" href="#">
            <span>UTF-8</span>
          </a>
          <a className="hover:bg-white/20 px-1 rounded" href="#">
            <span>Rust</span>
          </a>
          <a className="flex items-center gap-1 hover:bg-white/20 px-1 rounded" href="#" title="Errors">
            <span className="material-symbols-outlined text-sm">close</span>
            <span>0</span>
          </a>
          <a className="flex items-center gap-1 hover:bg-white/20 px-1 rounded" href="#" title="Warnings">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>0</span>
          </a>
        </div>
      </div>
    </div>
  );
}