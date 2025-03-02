
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
  const [chatOpen, setChatOpen] = useState(false);
  const [chatPosition, setChatPosition] = useState<ChatPositionType>('center');

  const changeScene = (scene: SceneType) => {
    setCurrentScene(scene);
    
    // If moving away from welcome page, minimize the chat if it's open
    if (scene !== 'welcome' && chatOpen && chatPosition !== 'minimized') {
      setChatPosition('minimized');
    }
    
    // If returning to welcome page and chat is minimized but open, center it
    if (scene === 'welcome' && chatOpen && chatPosition === 'minimized') {
      setChatPosition('center');
    }
  };

  const toggleChat = () => {
    const newChatOpen = !chatOpen;
    setChatOpen(newChatOpen);
    
    // If opening the chat, set it to center position regardless of page
    // unless we're not on the welcome page, then it should be minimized
    if (newChatOpen) {
      if (currentScene === 'welcome') {
        setChatPosition('center');
      } else {
        setChatPosition('minimized');
      }
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
