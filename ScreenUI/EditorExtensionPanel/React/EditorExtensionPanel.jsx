import React from 'react';

export default function EditorExtensionPanel() {
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
              <a className="text-[#808080] hover:text-white" href="#" title="Explorer">
                <span className="material-symbols-outlined text-2xl">description</span>
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
              <a className="text-white relative" href="#" title="Extensions">
                <span className="material-symbols-outlined text-2xl">extension</span>
                <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-primary"></div>
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
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xs uppercase text-[#808080] font-bold px-2">Extensions</h2>
              <button className="flex items-center justify-center p-1 rounded hover:bg-white/10" title="More Actions">
                <span className="material-symbols-outlined text-lg">more_horiz</span>
              </button>
            </div>
            <div className="relative mb-2">
              <span className="material-symbols-outlined text-[#808080] absolute left-2 top-1/2 -translate-y-1/2 text-lg">search</span>
              <input className="w-full bg-[#1e2d3b] text-sm rounded border border-transparent focus:border-primary focus:ring-0 pl-8 pr-2 py-1" placeholder="Search Extensions" type="text" />
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="text-sm font-semibold text-white mb-2 flex items-center cursor-pointer">
                <span className="material-symbols-outlined text-lg mr-1">expand_more</span>
                INSTALLED
              </div>
              <ul className="space-y-2 pl-2 text-sm">
                <li>
                  <div className="flex items-start gap-2">
                    <img className="h-10 w-10 mt-1" data-alt="Rust language logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt0XVNdBsXBPqCzHc1J-tO3aWfSF_YBlLLVNED3oIS2y784VXm8OuGMyHylHgWt8aX7LBPKS3v7vVU73hqm19aS_4xMghiGWDUt8koHNBUlKntLFL5RIUsgFQM6aY-jegshjOI8gFJ1pNuynRwgvjF1Fw9-OY5w70aqvN6VL3d7PaMQiuuUD1usQLBeVLAUjNdW54s7up3g9Np-rHrYY1th9POJnV-TnUqxOV2iC7KeiPUS5qR3WFXxlpmW8XnYCiK3TpH_xhbVHJk" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">Rust Analyzer</h3>
                      <p className="text-xs text-[#808080] mb-1">Full-featured language support for Rust.</p>
                      <div className="flex items-center gap-2">
                        <button className="text-xs bg-primary/20 hover:bg-primary/30 text-primary px-2 py-0.5 rounded">Disable</button>
                        <button className="text-xs bg-primary/20 hover:bg-primary/30 text-primary px-2 py-0.5 rounded">Uninstall</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <img className="h-10 w-10 mt-1" data-alt="TOML language logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpWDZreihBwKwKrG6hDPPdLAOi55EB7lSkQkaKu25OE1H18fDS0Hv9R5fHYB8JSkFNxYhNV_-WjVtfomIQe4AED1vdXfKs1z9FMsJHk33K2lgLUqcmLT4RMRA5pMD8JgoJf3ZBLQptjITfgN2dJduLEKP06HuTvnjr3xkY-9WrZT95yhWlR2L0gWoO1gEyDef_FLtvrjoC3IVwUmLqQIaMtiKVevHsqc7vNbdrXX7Z-l2179Zz-1der3GWFHtfMfZ9OxvlSXLGFoQm" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">Even Better TOML</h3>
                      <p className="text-xs text-[#808080] mb-1">Fully-featured TOML support.</p>
                      <div className="flex items-center gap-2">
                        <button className="text-xs bg-primary/20 hover:bg-primary/30 text-primary px-2 py-0.5 rounded">Disable</button>
                        <button className="text-xs bg-primary/20 hover:bg-primary/30 text-primary px-2 py-0.5 rounded">Uninstall</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="text-sm font-semibold text-white mt-4 mb-2 flex items-center cursor-pointer">
                <span className="material-symbols-outlined text-lg mr-1">expand_more</span>
                RECOMMENDED
              </div>
              <ul className="space-y-2 pl-2 text-sm">
                <li>
                  <div className="flex items-start gap-2">
                    <img className="h-10 w-10 mt-1" data-alt="GitLens logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkYjBovEpYmV-jK3wrWYoDHLCJDJI4YjrvZQOPCSyccufRP7jehFDSdD1SxTMsKfNd5a5drwqt9WYFrDO1_Ep_8DKNI99RQNtGFmm7TJw0-mmMzJ2eGAYEbKgeCe3b5CRIlVOsgCLFeCcXJVqrDrlH0JMBIvx4OgTPmqkfQL5TdyRQVyvVp2m_W126lc3NoSjd9FIFZHTiEvTFQqZgVKWMjLgmYSitwawSZpHCtgmvh9-8JGt-2zBqkxLWbEuQMRsNXxM4C5et7h0S" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">GitLens</h3>
                      <p className="text-xs text-[#808080] mb-1">Supercharge your Git experience.</p>
                      <div className="flex items-center gap-2">
                        <button className="text-xs bg-primary hover:bg-blue-600 text-white px-2 py-0.5 rounded">Install</button>
                      </div>
                    </div>
                  </div>
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
                <table>
                  <tbody>
                    <tr><td className="line-number">1</td><td><span className="syntax-comment">// Welcome to Snappy IDE!</span></td></tr>
                    <tr><td className="line-number">2</td><td><span className="syntax-comment">// Edit this file to get started.</span></td></tr>
                    <tr><td className="line-number">3</td><td></td></tr>
                    <tr><td className="line-number">4</td><td><span className="syntax-keyword">fn</span> <span className="syntax-function">main</span><span className="syntax-punctuation">() {'{'}</span></td></tr>
                    <tr><td className="line-number">5</td><td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-variable">println!</span><span className="syntax-punctuation">(</span><span className="syntax-string">"Hello, world!"</span><span className="syntax-punctuation">);</span></td></tr>
                    <tr><td className="line-number">6</td><td><span className="syntax-punctuation">{'}'}</span></td></tr>
                    <tr><td className="line-number">7</td><td></td></tr>
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