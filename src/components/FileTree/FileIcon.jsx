import React from 'react';
import { File, Folder, FolderOpen } from 'lucide-react';

// Dynamically import all SVGs as React components
const fileIcons = import.meta.glob('../../assets/icons/files/*.svg', {
    eager: true,
    query: '?react',
    import: 'default'
});

const folderIcons = import.meta.glob('../../assets/icons/folders/*.svg', {
    eager: true,
    query: '?react',
    import: 'default'
});

// Helper to normalize keys and create a lookup map
const createIconMap = (imports, prefix) => {
    const map = {};
    for (const path in imports) {
        // Extract filename: .../angular.svg -> angular
        const filename = path.split('/').pop().replace('.svg', '').toLowerCase();
        // Remove prefix if present
        const key = filename.startsWith(prefix) ? filename.replace(prefix, '') : filename;
        map[key] = imports[path];
    }
    return map;
};

const FILE_ICONS = createIconMap(fileIcons, '');
const FOLDER_ICONS = createIconMap(folderIcons, 'folder-');

// Manual overrides
const EXTENSION_MAP = {
    'js': 'js',
    'jsx': 'react',
    'ts': 'typescript',
    'tsx': 'react-ts',
    'json': 'json',
    'html': 'html',
    'css': 'css',
    'md': 'markdown',
    'py': 'python',
    'rs': 'rust',
    'c': 'c',
    'cpp': 'cpp',
    'go': 'go',
    'java': 'java',
    'php': 'php',
    'rb': 'ruby',
    'sql': 'database',
    'xml': 'xml',
    'yaml': 'yaml',
    'yml': 'yaml',
    'gitignore': 'git',
    'env': 'gear',
    'txt': 'document',
    'pdf': 'pdf',
    'zip': 'zip',
    'png': 'image',
    'jpg': 'image',
    'jpeg': 'image',
    'svg': 'svg',
    'config.ts': 'tsconfig',
};

const FOLDER_MAP = {
    'src': 'src',
    'assets': 'assets',
    'utils': 'utils',
    'hooks': 'hooks',
    'context': 'context',
    'contexts': 'context',
    'node_modules': 'node-modules',
    'public': 'public',
    'dist': 'build',
    'build': 'build',
    '.git': 'git',
    '.github': 'github',
    '.vscode': 'vscode',
    'include': 'include',
    'lib': 'lib',
    'test': 'test',
    'tests': 'test',
    '__tests__': 'test',
};

function FileIcon({ name, isDirectory, isExpanded, className = "w-4 h-4" }) {
    const lowerName = name.toLowerCase();

    if (isDirectory) {
        let iconName = FOLDER_MAP[lowerName] || lowerName;

        // 1. PRIORITY: Check Expanded State First
        if (isExpanded) {
            // A. Specific Open (e.g., 'src-open')
            if (FOLDER_ICONS[`${iconName}-open`]) {
                const OpenSpecific = FOLDER_ICONS[`${iconName}-open`];
                return <OpenSpecific className={className} />;
            }
            // B. Generic Open (e.g., 'open' or 'folder-open')
            if (FOLDER_ICONS['open']) {
                const OpenGeneric = FOLDER_ICONS['open'];
                return <OpenGeneric className={className} />;
            }
        }

        // 2. Check Specific Closed State (e.g., 'src')
        if (FOLDER_ICONS[iconName]) {
            const IconComponent = FOLDER_ICONS[iconName];
            return <IconComponent className={className} />;
        }
        
        // 3. Fallback: Check for 'folder-name' pattern if not found above
        // (Just in case the map stripper didn't catch it)
        if (FOLDER_ICONS[`folder-${iconName}`]) {
            const IconComponent = FOLDER_ICONS[`folder-${iconName}`];
            return <IconComponent className={className} />;
        }

        // 4. Default Closed State
        if (FOLDER_ICONS['default']) {
            const DefaultFolderIcon = FOLDER_ICONS['default'];
            return <DefaultFolderIcon className={className} />;
        }

        // 5. Lucide Fallback
        return isExpanded 
            ? <FolderOpen className={`${className} text-yellow-500`} /> 
            : <Folder className={`${className} text-yellow-500`} />;
    }

    // --- File Handling ---
    const ext = lowerName.split('.').pop();

    // 1. Exact match
    let iconName = lowerName;
    if (FILE_ICONS[iconName]) {
        const Icon = FILE_ICONS[iconName];
        return <Icon className={className} />;
    }

    // 2. Extension match
    iconName = EXTENSION_MAP[ext] || ext;
    if (FILE_ICONS[iconName]) {
        const Icon = FILE_ICONS[iconName];
        return <Icon className={className} />;
    }

    // 3. Default Document
    if (FILE_ICONS['document']) {
        const DefaultIcon = FILE_ICONS['document'];
        return <DefaultIcon className={className} />;
    }

    // 4. Lucide Fallback
    return <File className={`${className} text-gray-400`} />;
}

export default React.memo(FileIcon);