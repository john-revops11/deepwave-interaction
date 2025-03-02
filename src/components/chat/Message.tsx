
import { Bot, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useMobile } from '@/hooks/use-mobile';

interface MessageProps {
  message: {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
  };
}

const Message = ({ message }: MessageProps) => {
  const isBot = message.sender === 'bot';
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMobile();

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`flex items-start gap-3 mb-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isBot ? '' : 'flex-row-reverse'}`}
    >
      <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${
        isBot 
          ? 'bg-mariana-accent' 
          : 'bg-white/20'
      }`}>
        {isBot 
          ? <Bot className="w-5 h-5 text-mariana-deep" /> 
          : <User className="w-5 h-5 text-white" />
        }
      </div>
      <div className={`px-4 py-2 transition-all duration-300 hover:shadow-lg ${
        isBot 
          ? 'glass rounded-lg rounded-tl-none max-w-[80%] hover:bg-white/10' 
          : 'bg-mariana-accent/90 text-mariana-deep rounded-lg rounded-tr-none max-w-[80%] ml-auto hover:bg-mariana-accent'
      }`}>
        <p className={`${isMobile ? 'text-sm' : 'text-sm'} font-medium break-words`}>{message.text}</p>
        <div className={`text-[10px] mt-1 ${isBot ? 'text-gray-400' : 'text-mariana-deep/70'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default Message;
