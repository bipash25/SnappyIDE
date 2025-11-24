import React from 'react';

export default function EditorHTMLPreview() {
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
        .syntax-tag { color: #569cd6; }
        .syntax-attr-name { color: #9cdcfe; }
        .syntax-attr-value { color: #ce9178; }
        .syntax-text { color: #d4d4d4; }
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
          <div className="w-72 bg-background-dark p-2 flex flex-col border-r border-white/10">
            <h2 className="text-xs uppercase text-[#808080] font-bold px-2 mb-2">Explorer</h2>
            <div className="flex-1 overflow-y-auto">
              <div className="text-sm font-semibold text-white mb-2 flex items-center cursor-pointer">
                <span className="material-symbols-outlined text-lg mr-1">expand_more</span>
                <span>WEB_PROJECT</span>
              </div>
              <ul className="space-y-0.5 pl-2 text-sm">
                <li>
                  <div className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                    <span className="material-symbols-outlined text-lg transform -rotate-90">chevron_right</span>
                    <span className="material-symbols-outlined text-base text-yellow-500">folder</span>
                    <span>.vscode</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                    <span className="material-symbols-outlined text-base text-yellow-500">folder_open</span>
                    <span>src</span>
                  </div>
                  <ul className="pl-6 space-y-0.5 mt-0.5">
                    <li className="flex items-center space-x-2 pl-2 text-white bg-primary/20 hover:bg-primary/30 rounded py-0.5 cursor-pointer">
                      <img alt="HTML icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC4zHxG74fLJRaoCKhDnWocoGlSnaAC2EqzZ7KIfMubWY_LWBnNE78lOD-BsVVHsP-dW3IB9pddW1TBaQiBxPnHLGw6a8Uko4YW1Wc3BVimNHhA_FioOHr-HFy-WgdtOv66oz4d9fV0nMJGjh4aiBgGVYtkWQDSsh6EGGR244SAX_sldla2kdisrLeFjSGniXSma8S6HJfB8F44KWgAwcCvyXNS3AigouG3JVq_SUYcfnGQ8dIlNj067VPytBi8FS7pXq43YHM4RvS" />
                      <span className="font-semibold">index.html</span>
                      <span className="text-green-400 ml-auto mr-2 font-mono text-xs">A</span>
                    </li>
                    <li className="flex items-center space-x-2 pl-2 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                      <img alt="CSS icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDswBBlBqoU6_JZF0W0iRw6wU-1y91AE18UjGXrQtn9awwqKBDnqOQ4CY9RiVilMoneATNuc6oDnTiWTarpYWWuHnrdQd2jTXffWaqH7E554qaP5sVySMsUcvj8QefnfUJu5d17VLrLIX1FmjknNniP4tgh3rzUZNZcsyt66p2lpaHNOPrFWRbfwjIKA8e1XMZ9llFQy-yY8GwpLNxI7K5xcSoVvrNCKWsD68AVaYD2Fw8-uuzSviOPb_v9ZsyQXz9LzdGnIdM3GTZu" />
                      <span>styles.css</span>
                    </li>
                    <li className="flex items-center space-x-2 pl-2 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                      <img alt="JS icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAU-bgjFrcBuBAhZ3jWzdupbgIW1yx5uGXUOIRTfu2MW7fEWyEeQtbIXiZC0E7rCXwPW40UDMEmXU60zCkHdkKbQBcAcfYVAKj-0eDHFkLeuXmIVbnTyFK2h31ZG4Gou8Jyrm3hXC36Chq04vc2jT-GnkGD_OOcw1K0WAuqeYL3r8bjbi47P-iM9sYVsmJesswVGU5AHXTAW4Wt1gy_TA4ERh3gnnt5FXl_kYf7YQe7ydqrGDV1SNLbjXvP6QiJR5eReO5vEk-XpgB" />
                      <span>script.js</span>
                      <span className="text-yellow-400 ml-auto mr-2 font-mono text-xs">M</span>
                    </li>
                  </ul>
                </li>
                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                  <img alt="Git icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE0eDTWE95VgBhq2Tc6DcsZcI_rMOw-dlaCuCXGVgFbOWFhVNOBEOZ3EkeIeXvF182Vwstf2EGn6tLYN7ureuMup-ikhgynxNOj6oNFnTg77dsie8nzBcf4Pa4750FktqQQmVwH5t0JSirTRBbAWoHDTh_FDfIYzDnehNf0NfmKStsKyR-XHBnfcyCYBQ0a7gQgv0_ULaGZDv9PJrrJsgpIiwht0xe2IdjNAkStjVgu1XbjCHag5n8ozzDtVVTXlqNRCnBdoKghy9n" />
                  <span>.gitignore</span>
                </li>
                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                  <img alt="NextJS icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpLB4STLTyKnxxsPAsckE2FsErSj2YncbWbZyVZCrt4HQ7OFaIN4WsVg4JKxjSAJzI3GmJVfLuzW4o56bPl4pLFVOMqu2g1eZYmzGGyjbVHcktJkJujVlOki20SeHsy55LO7GHXI161Q1p07iJckJ5ktke4sa7v2iv45RxWm91IxKoYCcRk2JGqKtQDc7VsTqunyJ6dYVID4SPsm8u9MtVzgHW-TmtIBfuusR-leS7WT1r9TrrkQLvcxIriBAU-fm3ShAO5d0eMkKV" />
                  <span>package.json</span>
                </li>
                <li className="flex items-center space-x-2 pl-4 text-white hover:bg-white/10 rounded py-0.5 cursor-pointer">
                  <img alt="Markdown icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBRpo4m0G-0pZRSX_oU_cY7ho4cX7-XzBxKLqTJp9ogvLRtFSVbBSJhcOt29_IV37RTSBmm3jqlUGwcXKi_Sq7o10BOwUpcHP7gsYVubyEQtO_wBZzA5vkXhocOGIBJyB5FFilNUo8DFCPelSSRHx2sszBNS1PkbCorYDvQd2L0viq81o2q_0sFagMU-RveCMBPREFrP2v7eNcef0mVoRb912hnxnvxRQwIM4xaCYE2IYGEgFHBnyjea9Tor6R73FQoljt_vWdEE5P" />
                  <span>README.md</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-[#101922]">
          <div className="flex flex-1 overflow-hidden">
            <div className="flex flex-col flex-1 w-1/2">
              <div className="flex border-b border-white/10 flex-shrink-0 items-center justify-between">
                <div className="flex">
                  <a className="flex items-center justify-center gap-2 px-4 py-2 bg-background-dark" href="#">
                    <img alt="HTML icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_7saPjNs3k_i8z_14s40v8m2HguZlM86p2YsokModKznkuBer3LiUwRc6-VmnAOIFxPMFAnCxInrIJipWRHLKhehnEiHOwfYe7PiUJH4Idw8y89lv1aK8Tw1ij5ByTRXWkQmQpBeQBZM5_Jvj8CjA3RD00XymVoSbcl32RdFoy9eUXAyBHR6n6-Ddn9A0AR9zCnsacAcjK9YVcSqKBI4nCeooVBIfD3ACG090K0mQAsYt0qJ2WeRJPNdPBL-8l0MQR3ZfviNOTdMH" />
                    <p className="text-white text-sm font-medium leading-normal">index.html</p>
                    <span className="material-symbols-outlined text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full p-0.5">close</span>
                  </a>
                </div>
              </div>
              <div className="flex-1 font-mono text-sm leading-6 overflow-y-auto p-2">
                <table>
                  <tbody>
                    <tr><td className="line-number">1</td><td><span className="syntax-comment">{'<!-- Welcome to Snappy IDE! -->'}</span></td></tr>
                    <tr><td className="line-number">2</td><td><span className="syntax-tag">{'<!DOCTYPE '}<span className="syntax-attr-name">html</span>{'>'}</span></td></tr>
                    <tr><td className="line-number">3</td><td><span className="syntax-tag">{'<html '}<span className="syntax-attr-name">lang</span>=<span className="syntax-attr-value">"en"</span>{'>'}</span></td></tr>
                    <tr><td className="line-number">4</td><td><span className="syntax-tag">{'<head>'}</span></td></tr>
                    <tr><td className="line-number">5</td><td> <span className="syntax-tag">{'<title>'}</span><span className="syntax-text">My Website</span><span className="syntax-tag">{'</title>'}</span></td></tr>
                    <tr><td className="line-number">6</td><td><span className="syntax-tag">{'</head>'}</span></td></tr>
                    <tr><td className="line-number">7</td><td><span className="syntax-tag">{'<body>'}</span></td></tr>
                    <tr><td className="line-number">8</td><td> <span className="syntax-tag">{'<h1>'}</span><span className="syntax-text">Hello, Preview!</span><span className="syntax-tag">{'</h1>'}</span></td></tr>
                    <tr><td className="line-number">9</td><td><span className="syntax-tag">{'</body>'}</span></td></tr>
                    <tr><td className="line-number">10</td><td><span className="syntax-tag">{'</html>'}</span></td></tr>
                    <tr><td className="line-number">11</td><td></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col flex-1 w-1/2 border-l border-white/10">
              <div className="flex-shrink-0 bg-[#17222c] border-b border-white/10 flex items-center justify-between px-3 h-[37px]">
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded hover:bg-white/10" title="Refresh">
                    <span className="material-symbols-outlined text-base">refresh</span>
                  </button>
                  <div className="w-px h-5 bg-white/10"></div>
                  <button className="p-1 rounded hover:bg-white/10" title="Responsive Mode">
                    <span className="material-symbols-outlined text-base">devices</span>
                  </button>
                  <select className="bg-transparent border-none text-xs focus:ring-0 focus:outline-none -ml-2 pr-1">
                    <option>Desktop (1920px)</option>
                    <option>Tablet (768px)</option>
                    <option>Mobile (375px)</option>
                  </select>
                  <div className="w-px h-5 bg-white/10"></div>
                  <button className="p-1 rounded hover:bg-white/10" title="Zoom Out">
                    <span className="material-symbols-outlined text-base">zoom_out</span>
                  </button>
                  <span className="text-xs">100%</span>
                  <button className="p-1 rounded hover:bg-white/10" title="Zoom In">
                    <span className="material-symbols-outlined text-base">zoom_in</span>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded hover:bg-white/10" title="Rotate">
                    <span className="material-symbols-outlined text-base">screen_rotation</span>
                  </button>
                  <button className="p-1 rounded hover:bg-white/10" title="Open in External Browser">
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-white overflow-y-auto">
                <div className="p-4">
                  <h1 className="text-black font-sans text-2xl font-bold">Hello, Preview!</h1>
                </div>
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
            <span>Ln 10, Col 7</span>
          </a>
          <a className="hover:bg-white/20 px-1 rounded" href="#">
            <span>Spaces: 2</span>
          </a>
          <a className="hover:bg-white/20 px-1 rounded" href="#">
            <span>UTF-8</span>
          </a>
          <a className="hover:bg-white/20 px-1 rounded" href="#">
            <span>HTML</span>
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