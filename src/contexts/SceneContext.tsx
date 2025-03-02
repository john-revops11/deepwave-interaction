
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
    // Only adjust chat position if it's currently open and not minimized
    if (chatOpen && chatPosition !== 'minimized') {
      // Adjust chat position based on scene
      if (scene === 'welcome') {
        setChatPosition('center');
      } else {
        setChatPosition('bottom-right');
      }
    }
  };

  const toggleChat = () => {
    const newChatOpen = !chatOpen;
    setChatOpen(newChatOpen);
    
    // If opening the chat and it was previously minimized,
    // set the appropriate position based on current scene
    if (newChatOpen && chatPosition === 'minimized') {
      setChatPosition(currentScene === 'welcome' ? 'center' : 'bottom-right');
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
