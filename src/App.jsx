import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CodeEditor from "./components/Editor/CodeEditor";
import { FileSystemProvider } from "./contexts/FileSystemContext";

import { SettingsProvider } from "./contexts/SettingsContext";

function App() {
  const [currentView, setCurrentView] = useState("welcome");

  const handleOpenProject = () => {
    setCurrentView("editor");
  };

  return (
    <SettingsProvider>
      <FileSystemProvider>
        <div className="h-screen w-screen overflow-hidden bg-background-dark text-white">
          {currentView === "welcome" && <WelcomeScreen onOpenProject={handleOpenProject} />}
          {currentView === "editor" && <CodeEditor />}
        </div>
      </FileSystemProvider>
    </SettingsProvider>
  );
}

export default App;
