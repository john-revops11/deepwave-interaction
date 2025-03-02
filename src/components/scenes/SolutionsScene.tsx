
import { useState, useEffect } from 'react';
import { Lightbulb, Bot, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  featureList: string[];
  delay: number;
  id: string;
}

const SolutionCard = ({ title, description, icon, featureList, delay, id }: SolutionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Link 
      to={`/services/${id}`}
      className={`glass rounded-xl p-6 h-full transition-all duration-500 ${
        isHovered ? 'scale-[1.02] shadow-[0_0_20px_rgba(34,211,238,0.3)]' : ''
      } ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-mariana-accent/20 text-mariana-accent">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        
        <p className="text-white/70 mb-6">{description}</p>
        
        <ul className="mt-auto space-y-2">
          {featureList.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
              <span className="text-sm text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

const SolutionsScene = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const solutions = [
    {
      id: "ai-website",
      title: "AI Website Development",
      description: "We build intelligent websites that learn from user interactions and adapt to provide personalized experiences.",
      icon: <Lightbulb className="w-6 h-6" />,
      featureList: [
        "Dynamic content personalization",
        "Intelligent user journey mapping",
        "Seamless AI chat integration",
        "Adaptive interface design"
      ],
      delay: 0
    },
    {
      id: "ai-agent",
      title: "AI Agent Automations",
      description: "Custom AI agents that automate customer interactions, support, and lead nurturing across your digital channels.",
      icon: <Bot className="w-6 h-6" />,
      featureList: [
        "24/7 customer engagement",
        "Personalized conversation flows",
        "Multi-channel integration",
        "Advanced analytics & insights"
      ],
      delay: 200
    },
    {
      id: "auto-marketing",
      title: "Automated Marketing",
      description: "AI-powered marketing solutions that identify patterns, predict behaviors, and optimize campaigns in real-time.",
      icon: <BarChart className="w-6 h-6" />,
      featureList: [
        "Predictive audience targeting",
        "Content optimization & generation",
        "Automated campaign management",
        "Performance analytics & reporting"
      ],
      delay: 400
    }
  ];

  return (
    <div className="container mx-auto px-4 h-full flex flex-col justify-center">
      <div className={`text-center mb-12 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="inline-flex items-center justify-center mb-4 px-4 py-1 rounded-full glass text-mariana-accent text-sm font-medium transition-all animate-pulse-glow shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          Our Solutions
        </div>
        
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Intelligent Services for Modern Businesses
          </span>
        </h2>
        
        <p className="text-xl text-white/80 text-balance mx-auto max-w-2xl">
          We leverage the power of AI to create solutions that evolve with your business needs and exceed user expectations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <SolutionCard 
            key={index}
            title={solution.title}
            description={solution.description}
            icon={solution.icon}
            featureList={solution.featureList}
            delay={solution.delay}
            id={solution.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SolutionsScene;
