
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Bot, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, link, delay }: ServiceCardProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`glass rounded-xl p-6 transition-all duration-500 ${
      loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-mariana-accent/20 text-mariana-accent">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        
        <p className="text-white/70 mb-6">{description}</p>
        
        <Link 
          to={link} 
          className="mt-auto"
        >
          <Button 
            variant="outline" 
            className="w-full justify-between bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/30 text-white"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

// Enterprise Solutions Section
const EnterpriseSolutions = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`glass p-8 rounded-xl transition-all duration-500 ${
      loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-white">Enterprise Solutions</h2>
          <p className="text-white/80 mb-6">
            Tailored AI implementations for large-scale businesses looking to transform their operations, 
            enhance decision-making, and create competitive advantages in their industry.
          </p>
          <Link to="/contact">
            <Button className="bg-mariana-accent hover:bg-mariana-accent/90 text-mariana-deep">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden h-64">
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2574&auto=format&fit=crop" 
              alt="Enterprise Solutions" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "AI Website Development",
      description: "We build intelligent websites that learn from user interactions and adapt to provide personalized experiences.",
      icon: <Lightbulb className="w-6 h-6" />,
      link: "/services/ai-website",
      delay: 0
    },
    {
      title: "AI Agent Automations",
      description: "Custom AI agents that automate customer interactions, support, and lead nurturing across your digital channels.",
      icon: <Bot className="w-6 h-6" />,
      link: "/services/ai-agent",
      delay: 200
    },
    {
      title: "Automated Marketing",
      description: "AI-powered marketing solutions that identify patterns, predict behaviors, and optimize campaigns in real-time.",
      icon: <BarChart className="w-6 h-6" />,
      link: "/services/auto-marketing",
      delay: 400
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className={`text-center mb-12 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="inline-flex items-center justify-center mb-4 px-4 py-1 rounded-full glass text-mariana-accent text-sm font-medium transition-all animate-pulse-glow shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          Our Services
        </div>
        
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Intelligent Solutions for Modern Businesses
          </span>
        </h2>
        
        <p className="text-xl text-white/80 text-balance mx-auto max-w-2xl">
          We leverage the power of AI to create solutions that evolve with your business needs and exceed user expectations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
            delay={service.delay}
          />
        ))}
      </div>

      <EnterpriseSolutions />
    </div>
  );
};

export default Services;
