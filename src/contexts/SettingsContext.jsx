import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
    // Load settings from localStorage or use defaults
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('snappy-settings');
        return saved ? JSON.parse(saved) : {
            fontSize: 14,
            wordWrap: 'on',
            minimap: true,
            theme: 'vs-dark',
            lineNumbers: 'on',
            tabSize: 4
        };
    });

    // Save to localStorage whenever settings change
    useEffect(() => {
        localStorage.setItem('snappy-settings', JSON.stringify(settings));
    }, [settings]);

    const updateSetting = (key, value) => {
        setSettings(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSetting }}>
            {children}
        </SettingsContext.Provider>
    );
};
