import React from 'react';
import { Editor } from '@monaco-editor/react';
import { useSettings } from '../../contexts/SettingsContext';

export default function MonacoEditor({
    code,
    onChange,
    onCursorPositionChange,
    language = "javascript",
    theme = "vs-dark"
}) {
    const { settings } = useSettings();

    const handleEditorDidMount = (editor, monaco) => {
        editor.onDidChangeCursorPosition((e) => {
            if (onCursorPositionChange) {
                onCursorPositionChange(e.position);
            }
        });
    };

    return (
        <div className="h-full w-full overflow-hidden">
            <Editor
                height="100%"
                width="100%"
                language={language}
                theme={theme}
                value={code}
                onChange={onChange}
                onMount={handleEditorDidMount}
                options={{
                    fontSize: settings.fontSize,
                    minimap: { enabled: settings.minimap },
                    lineNumbers: settings.lineNumbers,
                    wordWrap: settings.wordWrap,
                    rulers: [80, 120],
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, 'Courier New', monospace",
                }}
            />
        </div>
    );
}
