
import { Bot, User } from 'lucide-react';

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

  return (
    <div className={`flex items-start gap-3 mb-4 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
        isBot 
          ? 'bg-mariana-accent' 
          : 'bg-white/20'
      }`}>
        {isBot 
          ? <Bot className="w-5 h-5 text-mariana-deep" /> 
          : <User className="w-5 h-5 text-white" />
        }
      </div>
      <div className={`px-4 py-2 ${
        isBot 
          ? 'glass rounded-lg rounded-tl-none max-w-[80%]' 
          : 'bg-mariana-accent/90 text-mariana-deep rounded-lg rounded-tr-none max-w-[80%] ml-auto'
      }`}>
        <p className="text-sm">{message.text}</p>
        <div className={`text-[10px] mt-1 ${isBot ? 'text-gray-400' : 'text-mariana-deep/70'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default Message;
