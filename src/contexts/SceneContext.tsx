
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type SceneType = 'welcome' | 'vision' | 'solutions' | 'creations' | 'contact' | 'dashboard';

interface SceneContextType {
  currentScene: SceneType;
  changeScene: (scene: SceneType) => void;
  chatOpen: boolean;
  toggleChat: () => void;
}

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export const useScene = () => {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error('useScene must be used within a SceneProvider');
  }
  return context;
};

interface SceneProviderProps {
  children: ReactNode;
}

export const SceneProvider = ({ children }: SceneProviderProps) => {
  const [currentScene, setCurrentScene] = useState<SceneType>('welcome');
  const [chatOpen, setChatOpen] = useState(true); // Set chat to be open by default

  const changeScene = (scene: SceneType) => {
    setCurrentScene(scene);
  };

  const toggleChat = () => {
    setChatOpen(prev => !prev);
  };

  return (
    <SceneContext.Provider value={{ currentScene, changeScene, chatOpen, toggleChat }}>
      {children}
    </SceneContext.Provider>
  );
};
