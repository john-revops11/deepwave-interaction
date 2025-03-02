
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type SceneType = 'welcome' | 'vision' | 'solutions' | 'creations' | 'contact' | 'dashboard';
export type ChatPositionType = 'center' | 'bottom-right' | 'minimized';

interface SceneContextType {
  currentScene: SceneType;
  changeScene: (scene: SceneType) => void;
  chatOpen: boolean;
  toggleChat: () => void;
  chatPosition: ChatPositionType;
  setChatPosition: (position: ChatPositionType) => void;
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
  const [chatOpen, setChatOpen] = useState(true); // Set to true by default so it's always available
  const [chatPosition, setChatPosition] = useState<ChatPositionType>('minimized'); // Start minimized

  const changeScene = (scene: SceneType) => {
    setCurrentScene(scene);
    
    // If moving to welcome page, show the chat
    if (scene === 'welcome') {
      setChatPosition('center');
    } 
    // If moving away from welcome page, minimize the chat
    else if (chatPosition !== 'minimized') {
      setChatPosition('minimized');
    }
  };

  const toggleChat = () => {
    // Instead of toggling open/closed, we now toggle between minimized and center
    if (chatPosition === 'minimized') {
      setChatPosition('center');
    } else {
      setChatPosition('minimized');
    }
  };

  return (
    <SceneContext.Provider 
      value={{ 
        currentScene, 
        changeScene, 
        chatOpen, 
        toggleChat, 
        chatPosition, 
        setChatPosition 
      }}
    >
      {children}
    </SceneContext.Provider>
  );
};
