
import { useState, useEffect, useRef } from 'react';
import { useScene, type SceneType } from '@/contexts/SceneContext';
import { Bot, Send } from 'lucide-react';
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
  const { changeScene } = useScene();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [expanded, setExpanded] = useState(true);
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

  const toggleExpanded = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-auto">
      {/* Minimized avatar that's visible when chat is collapsed */}
      <div 
        className={`w-12 h-12 rounded-full bg-mariana-accent flex items-center justify-center cursor-pointer 
          transition-opacity duration-300 ${expanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={toggleExpanded}
      >
        <Bot className="w-6 h-6 text-mariana-deep" />
      </div>

      {/* Chat Interface (expanded view) */}
      <div 
        className={`transition-all duration-500 
          ${expanded ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}
      >
        <div className="w-[350px] h-[450px] glass-dark rounded-xl overflow-hidden shadow-2xl">
          <div className="flex flex-col h-full relative">
            {/* Chat header */}
            <div className="flex items-center justify-between p-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-mariana-accent rounded-full">
                  <Bot className="w-5 h-5 text-mariana-deep" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Mariana AI</h3>
                  <p className="text-xs text-mariana-accent">AI Concierge</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-white/70 hover:text-white hover:bg-white/10"
                onClick={toggleExpanded}
              >
                <span className="sr-only">Minimize</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 14 10 14 10 20"></polyline>
                  <polyline points="20 10 14 10 14 4"></polyline>
                  <line x1="14" y1="10" x2="21" y2="3"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </Button>
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
            <div className="p-3 border-t border-white/10 bg-mariana-deep/80">
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
      </div>
    </div>
  );
};

export default Chat;
