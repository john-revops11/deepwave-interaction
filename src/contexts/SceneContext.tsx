
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type SceneType = 'welcome' | 'vision' | 'solutions' | 'creations' | 'contact' | 'dashboard';

interface SceneContextType {
  currentScene: SceneType;
  changeScene: (scene: SceneType) => void;
  chatPosition: 'open' | 'minimized';
  setChatPosition: (position: 'open' | 'minimized') => void;
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
  const [chatPosition, setChatPosition] = useState<'open' | 'minimized'>('minimized');

  const changeScene = (scene: SceneType) => {
    setCurrentScene(scene);
  };

  const toggleChat = () => {
    setChatPosition(prev => prev === 'open' ? 'minimized' : 'open');
  };

  return (
    <SceneContext.Provider 
      value={{ 
        currentScene, 
        changeScene,
        chatPosition,
        setChatPosition,
        toggleChat
      }}
    >
      {children}
    </SceneContext.Provider>
  );
};
