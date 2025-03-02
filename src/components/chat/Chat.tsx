import { useState, useEffect, useRef } from 'react';
import { useScene, type SceneType } from '@/contexts/SceneContext';
import { X, Send, Bot, User, Minimize, Maximize, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Message from './Message';
import { sendMessageToOpenAI } from '@/services/chatService';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface OpenAIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
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
  { text: "What is Mariana Deep?", scene: 'vision' },
  { text: "What solutions can you offer?", scene: 'solutions' },
  { text: "Show me your portfolio", scene: 'creations' },
  { text: "I'd like to connect", scene: 'contact' },
];

const Chat = () => {
  const { toggleChat, changeScene, chatPosition, setChatPosition, currentScene } = useScene();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [conversationHistory, setConversationHistory] = useState<OpenAIMessage[]>([
    { role: 'assistant', content: INITIAL_MESSAGES[0].text }
  ]);
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (chatPosition !== 'minimized') {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [chatPosition]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && 
          !chatRef.current.contains(event.target as Node) && 
          chatPosition !== 'minimized') {
        setChatPosition('minimized');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [chatPosition, setChatPosition]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && chatPosition !== 'minimized') {
        setChatPosition('minimized');
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [chatPosition, setChatPosition]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    
    const userOpenAIMessage: OpenAIMessage = {
      role: 'user',
      content: inputText
    };
    setConversationHistory(prev => [...prev, userOpenAIMessage]);
    
    setInputText('');
    setIsTyping(true);

    try {
      const [responseText, suggestedScene] = await sendMessageToOpenAI(
        inputText, 
        conversationHistory
      );
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      
      const botOpenAIMessage: OpenAIMessage = {
        role: 'assistant',
        content: responseText
      };
      setConversationHistory(prev => [...prev, botOpenAIMessage]);
      
      if (suggestedScene) {
        console.log(`Navigation suggested to: ${suggestedScene}`);
        setTimeout(() => {
          toast.info(`Navigating to ${suggestedScene} page...`, { duration: 2000 });
          changeScene(suggestedScene);
        }, 1500);
      }
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
      toast.error("Failed to get a response from the AI. Please try again.");
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
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
      setChatPosition('center');
    } else {
      setChatPosition('minimized');
    }
  };

  const chatContainerClasses = () => {
    if (chatPosition === 'minimized') {
      return "";
    }
    
    if (isMobile) {
      return "fixed inset-0 z-50 glass-dark flex flex-col animate-scale-in";
    }
    
    return "fixed inset-0 m-auto w-[90%] max-w-4xl h-[70vh] glass-dark rounded-xl overflow-hidden shadow-2xl animate-scale-in z-50 transition-all duration-300";
  };

  if (chatPosition === 'minimized') {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={toggleChatPosition}
        className={`fixed ${
          isMobile 
            ? 'left-[8.33%] right-[8.33%] bottom-6 w-5/6' 
            : 'left-1/4 right-1/4 bottom-8 w-1/2'
        } z-50 h-[10vh] min-h-[60px] glass-dark rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer ${
          hovered ? 'shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'opacity-90'
        }`}
      >
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-mariana-accent rounded-full">
              <Bot className="w-6 h-6 text-mariana-deep" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Mariana AI</h3>
              <p className="text-xs text-mariana-accent">AI Concierge</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="hidden md:block text-white/80 text-sm">Click to chat with Mariana</p>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-10 w-10 text-mariana-accent hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                toggleChatPosition();
              }}
            >
              <Maximize className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={chatRef}
      className={chatContainerClasses()}
      onTouchStart={(e) => {
        const touchStartY = e.touches[0].clientY;
        
        const handleTouchMove = (e: TouchEvent) => {
          const touchMoveY = e.touches[0].clientY;
          if (touchMoveY - touchStartY > 50) { // Swipe down threshold
            setChatPosition('minimized');
            document.removeEventListener('touchmove', handleTouchMove);
          }
        };
        
        document.addEventListener('touchmove', handleTouchMove, { once: true });
      }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 bg-mariana-light border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-mariana-accent rounded-full animate-pulse-glow">
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
              className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              <Minimize className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto scrollbar-hide">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          {isTyping && (
            <div className="flex items-start gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-mariana-accent rounded-full">
                <Bot className="w-5 h-5 text-mariana-deep" />
              </div>
              <div className="px-4 py-2 glass rounded-lg rounded-tl-none max-w-[80%]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-mariana-accent rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-mariana-accent rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-mariana-accent rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-white/10 bg-mariana-deep/50">
          {QUICK_PROMPTS.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handleQuickPrompt(prompt)}
              className="px-3 py-1 text-xs glass hover-glow rounded-full transition-all duration-300 text-mariana-accent hover:text-white hover:bg-mariana-light/50"
            >
              {prompt.text}
            </button>
          ))}
        </div>
        
        <div className="p-4 border-t border-white/10 bg-mariana-deep/80">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mariana-accent/50 text-white placeholder:text-white/50 transition-all duration-200"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-mariana-accent hover:bg-mariana-accent/80 text-mariana-deep transition-all duration-200 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]"
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
