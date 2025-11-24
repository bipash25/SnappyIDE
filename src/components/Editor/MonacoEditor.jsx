import React from 'react';
import { Editor } from '@monaco-editor/react';

export default function MonacoEditor({
    code,
    onChange,
    language = "javascript",
    theme = "vs-dark"
}) {
    return (
        <div className="h-full w-full overflow-hidden">
            <Editor
                height="100%"
                width="100%"
                language={language}
                theme={theme}
                value={code}
                onChange={onChange}
                options={{
                    fontSize: 14,
                    minimap: { enabled: true },
                    lineNumbers: 'on',
                    rulers: [80, 120],
                    wordWrap: 'on',
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, 'Courier New', monospace",
                }}
            />
        </div>
    );
}
