import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CodeEditor from "./components/Editor/CodeEditor";

function App() {
  const [currentView, setCurrentView] = useState("welcome");

  const handleOpenProject = () => {
    setCurrentView("editor");
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-background-dark text-white">
      {currentView === "welcome" && <WelcomeScreen onOpenProject={handleOpenProject} />}
      {currentView === "editor" && <CodeEditor />}
    </div>
  );
}

export default App;
