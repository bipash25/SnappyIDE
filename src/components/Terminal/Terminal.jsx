import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import { Command } from '@tauri-apps/plugin-shell';

export default function Terminal() {
    const terminalRef = useRef(null);
    const xtermRef = useRef(null);
    const fitAddonRef = useRef(null);
    const resizeObserverRef = useRef(null);
    const isOpenedRef = useRef(false);

    useEffect(() => {
        if (!terminalRef.current) return;

        // Initialize xterm
        const term = new XTerm({
            theme: {
                background: '#101922',
                foreground: '#cccccc',
                cursor: '#ffffff',
                selectionBackground: '#3e4451',
                black: '#000000',
                red: '#e06c75',
                green: '#98c379',
                yellow: '#e5c07b',
                blue: '#61afef',
                magenta: '#c678dd',
                cyan: '#56b6c2',
                white: '#abb2bf',
                brightBlack: '#5c6370',
                brightRed: '#e06c75',
                brightGreen: '#98c379',
                brightYellow: '#e5c07b',
                brightBlue: '#61afef',
                brightMagenta: '#c678dd',
                brightCyan: '#56b6c2',
                brightWhite: '#ffffff',
            },
            fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, 'Courier New', monospace",
            fontSize: 14,
            cursorBlink: true,
            convertEol: true,
        });

        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);

        xtermRef.current = term;
        fitAddonRef.current = fitAddon;

        // Use ResizeObserver to trigger open() only when visible
        resizeObserverRef.current = new ResizeObserver(() => {
            if (terminalRef.current && terminalRef.current.clientWidth > 0) {
                if (!isOpenedRef.current) {
                    term.open(terminalRef.current);
                    isOpenedRef.current = true;
                    term.writeln('Welcome to Snappy Terminal');
                    term.write('$ ');
                }
                try {
                    fitAddon.fit();
                } catch (e) {
                    // Ignore fit errors
                }
            }
        });
        resizeObserverRef.current.observe(terminalRef.current);

        let currentLine = '';

        const runCommand = async (cmd) => {
            if (!cmd.trim()) {
                term.write('$ ');
                return;
            }

            try {
                const output = await Command.create('powershell', ['-Command', cmd]).execute();

                if (output.stdout) {
                    term.write(output.stdout);
                    // Ensure we end with a newline if the output didn't have one
                    if (!output.stdout.endsWith('\n')) {
                        term.write('\r\n');
                    }
                }
                if (output.stderr) {
                    term.write(output.stderr);
                    if (!output.stderr.endsWith('\n')) {
                        term.write('\r\n');
                    }
                }

            } catch (error) {
                term.writeln(`\r\nError: ${error}`);
                term.writeln(`Details: ${JSON.stringify(error)}`);
            }

            term.write('$ ');
        };

        term.onData(async (data) => {
            const code = data.charCodeAt(0);

            // Enter key
            if (code === 13) {
                term.write('\r\n');
                await runCommand(currentLine);
                currentLine = '';
            } else if (code === 127) { // Backspace
                if (currentLine.length > 0) {
                    term.write('\b \b');
                    currentLine = currentLine.slice(0, -1);
                }
            } else {
                if (code >= 32) {
                    term.write(data);
                    currentLine += data;
                }
            }
        });

        return () => {
            if (resizeObserverRef.current) {
                resizeObserverRef.current.disconnect();
            }
            term.dispose();
            isOpenedRef.current = false;
        };
    }, []);

    return <div ref={terminalRef} className="h-full w-full" />;
}
