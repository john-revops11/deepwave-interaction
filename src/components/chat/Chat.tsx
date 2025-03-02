import { useState, useEffect, useRef } from 'react';
import { useScene, type SceneType } from '@/contexts/SceneContext';
import { X, Send, Bot, User, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Message from './Message';
import { sendMessageToOpenAI } from '@/services/chatService';
import { toast } from 'sonner';

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
  const [conversationHistory, setConversationHistory] = useState<OpenAIMessage[]>([
    { role: 'assistant', content: INITIAL_MESSAGES[0].text }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
