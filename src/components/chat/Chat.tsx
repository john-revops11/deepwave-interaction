
import { useState, useEffect, useRef } from 'react';
import { useScene, type SceneType } from '@/contexts/SceneContext';
import { X, Send, Bot, User, Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Message from './Message';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    text: "Welcome to Mariana Deep Intelligence! I'm Mariana, your AI Concierge. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const QUICK_PROMPTS: { text: string; scene?: SceneType }[] = [
  { text: "Tell me about Mariana Deep", scene: 'vision' },
  { text: "What solutions do you offer?", scene: 'solutions' },
  { text: "Show me your work", scene: 'creations' },
  { text: "I'd like to contact you", scene: 'contact' },
];

const Chat = () => {
  const { toggleChat, changeScene, chatPosition, setChatPosition, currentScene } = useScene();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (text: string): [string, SceneType | undefined] => {
    // Simple response logic based on keywords
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('vision') || lowerText.includes('about') || lowerText.includes('company')) {
      return ["Mariana Deep Intelligence is pioneering the future of AI-driven web experiences. We specialize in creating immersive, intelligent websites that engage users in unprecedented ways.", 'vision'];
    } 
    else if (lowerText.includes('solution') || lowerText.includes('service') || lowerText.includes('offer')) {
      return ["We offer three core services: AI Website Development, AI Agent Automations, and Automated Marketing solutions. Each is designed to transform how businesses connect with their audiences.", 'solutions'];
    }
    else if (lowerText.includes('work') || lowerText.includes('portfolio') || lowerText.includes('project') || lowerText.includes('creation')) {
      return ["Our portfolio showcases innovative AI-driven websites and applications that we've built for forward-thinking clients across various industries.", 'creations'];
    }
    else if (lowerText.includes('contact') || lowerText.includes('connect') || lowerText.includes('talk') || lowerText.includes('build')) {
      return ["I'd be happy to connect you with our team! Let me show you our contact options.", 'contact'];
    }
    else if (lowerText.includes('login') || lowerText.includes('dashboard') || lowerText.includes('account')) {
      return ["You can access your client dashboard to view project updates and analytics.", 'dashboard'];
    }
    
    return ["I'm here to guide you through our services and capabilities. Feel free to ask about our vision, solutions, past work, or how to get in touch with our team.", undefined];
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const [responseText, sceneToChangeTo] = getResponse(inputText);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // Change scene if applicable
      if (sceneToChangeTo) {
        setTimeout(() => changeScene(sceneToChangeTo), 1000);
      }
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleQuickPrompt = (prompt: { text: string; scene?: SceneType }) => {
    setInputText(prompt.text);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const toggleChatPosition = () => {
    if (chatPosition === 'minimized') {
      setChatPosition(currentScene === 'welcome' ? 'center' : 'bottom-right');
    } else {
      setChatPosition('minimized');
    }
  };

  // Determine the correct CSS classes based on chat position
  const chatContainerClasses = () => {
    switch (chatPosition) {
      case 'center':
        return "fixed inset-0 m-auto w-[90%] max-w-4xl h-[70vh] glass-dark rounded-xl overflow-hidden shadow-2xl animate-scale-in z-50";
      case 'bottom-right':
        return "fixed right-8 bottom-8 z-50 w-[380px] h-[500px] glass-dark rounded-xl overflow-hidden shadow-2xl animate-scale-in";
      case 'minimized':
        return "fixed right-8 bottom-8 z-50 animate-scale-in";
      default:
        return "fixed right-8 bottom-8 z-50 w-[380px] h-[500px] glass-dark rounded-xl overflow-hidden shadow-2xl animate-scale-in";
    }
  };

  // If minimized, just show the avatar button
  if (chatPosition === 'minimized') {
    return (
      <Button
        onClick={toggleChatPosition}
        className="fixed right-8 bottom-8 z-50 w-14 h-14 rounded-full bg-mariana-accent text-mariana-deep shadow-lg hover:scale-105 transition-all duration-300"
      >
        <Bot className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className={chatContainerClasses()}>
      <div className="flex flex-col h-full">
        {/* Chat header */}
        <div className="flex items-center justify-between p-4 bg-mariana-light border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-mariana-accent rounded-full">
              <Bot className="w-5 h-5 text-mariana-deep" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Mariana AI</h3>
              <p className="text-xs text-mariana-accent">AI Concierge</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChatPosition}
              className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
            >
              <Minimize className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Messages area */}
        <div className="flex-1 p-4 overflow-y-auto scrollbar-hide">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          {isTyping && (
            <div className="flex items-start gap-3 mb-4 animate-pulse">
              <div className="flex items-center justify-center w-8 h-8 bg-mariana-accent rounded-full">
                <Bot className="w-5 h-5 text-mariana-deep" />
              </div>
              <div className="px-4 py-2 glass rounded-lg rounded-tl-none max-w-[80%]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-mariana-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-mariana-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-mariana-accent rounded-full"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick prompts */}
        <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-white/10 bg-mariana-deep/50">
          {QUICK_PROMPTS.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handleQuickPrompt(prompt)}
              className="px-3 py-1 text-xs glass hover-glow rounded-full transition-all duration-300 text-mariana-accent"
            >
              {prompt.text}
            </button>
          ))}
        </div>
        
        {/* Input area */}
        <div className="p-4 border-t border-white/10 bg-mariana-deep/80">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mariana-accent/50 text-white"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-mariana-accent hover:bg-mariana-accent/80 text-mariana-deep"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
