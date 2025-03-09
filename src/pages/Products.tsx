
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  delay: number;
  link: string;
}

const ProductCard = ({ title, description, features, image, delay, link }: ProductCardProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`glass rounded-xl overflow-hidden transition-all duration-500 ${
      loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
              <span className="text-sm text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={link} 
          className="mt-auto"
        >
          <Button 
            variant="outline" 
            className="w-full justify-between bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/30 text-white"
          >
            <span>Explore Product</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Products = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      title: "MarianaMind",
      description: "Our flagship AI reasoning engine that powers intelligent decision-making across applications.",
      features: [
        "Context-aware reasoning capabilities",
        "Adaptive learning from interactions",
        "Seamless integration with existing systems",
        "Enterprise-grade security and privacy"
      ],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop",
      delay: 0,
      link: "/portfolio/nova-ai"
    },
    {
      title: "DeepVision",
      description: "Computer vision platform that transforms visual data into actionable business intelligence.",
      features: [
        "Real-time visual analysis",
        "Custom object and pattern recognition",
        "Automated quality control",
        "Visual data insights dashboard"
      ],
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2670&auto=format&fit=crop",
      delay: 200,
      link: "/portfolio/quantum-analytics"
    },
    {
      title: "PredictFlow",
      description: "Predictive analytics suite for forecasting trends and optimizing business operations.",
      features: [
        "Advanced forecasting algorithms",
        "Scenario modeling capabilities",
        "Automated insight generation",
        "Interactive visualization tools"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      delay: 400,
      link: "/portfolio/pulse-health"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className={`text-center mb-12 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="inline-flex items-center justify-center mb-4 px-4 py-1 rounded-full glass text-mariana-accent text-sm font-medium transition-all animate-pulse-glow shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          Our Products
        </div>
        
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Cutting-Edge AI Solutions Ready to Deploy
          </span>
        </h2>
        
        <p className="text-xl text-white/80 text-balance mx-auto max-w-2xl">
          Our suite of AI products brings the power of deep intelligence to your business without the need for custom development.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            title={product.title}
            description={product.description}
            features={product.features}
            image={product.image}
            delay={product.delay}
            link={product.link}
          />
        ))}
      </div>

      <div className={`mt-16 text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-2xl font-bold mb-4 text-white">Need a Custom Solution?</h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          Our team of AI experts can work with you to develop tailored solutions that address your specific business challenges.
        </p>
        <Link to="/contact">
          <Button className="bg-mariana-accent hover:bg-mariana-accent/90 text-mariana-deep px-6 py-2">
            Contact Our Team
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
