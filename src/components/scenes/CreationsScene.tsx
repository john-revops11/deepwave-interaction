
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  delay: number;
}

const ProjectCard = ({ title, description, technologies, image, delay }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl transition-all duration-500 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-mariana-deep/0 to-mariana-deep z-10"
          style={{
            opacity: isHovered ? 0.9 : 0.7,
            transition: 'opacity 0.5s ease'
          }}
        ></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
        ></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          
          <p 
            className="text-white/80 text-sm mb-3 line-clamp-2 transition-all duration-500"
            style={{
              maxHeight: isHovered ? '3rem' : '0',
              opacity: isHovered ? 1 : 0,
              overflow: 'hidden'
            }}
          >
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 rounded-full bg-mariana-accent/20 text-mariana-accent">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div 
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(-10px)'
          }}
        >
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

const CreationsScene = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Nova AI Assistant",
      description: "An intelligent digital assistant that adapts to user behavior and preferences.",
      technologies: ["React", "TensorFlow.js", "WebGL"],
      image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?q=80&w=2574&auto=format&fit=crop",
      delay: 0
    },
    {
      title: "Quantum Analytics Platform",
      description: "Real-time data visualization and AI-powered insights for enterprise decision-making.",
      technologies: ["Vue.js", "D3.js", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      delay: 100
    },
    {
      title: "Lumina E-Commerce",
      description: "Next-generation shopping experience with AI-driven personalization and recommendations.",
      technologies: ["Next.js", "GraphQL", "ML"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2670&auto=format&fit=crop",
      delay: 200
    },
    {
      title: "Prism CRM",
      description: "Intelligent customer relationship management system with predictive analytics.",
      technologies: ["Angular", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      delay: 300
    },
    {
      title: "Echo Social Platform",
      description: "AI-enhanced social network with advanced content curation and moderation.",
      technologies: ["React Native", "Firebase", "AI"],
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop",
      delay: 400
    },
    {
      title: "Pulse Health Tracker",
      description: "Personalized health monitoring platform with AI health insights and predictions.",
      technologies: ["Swift", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      delay: 500
    }
  ];

  return (
    <div className="container mx-auto px-4 h-full flex flex-col justify-center">
      <div className={`text-center mb-12 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="inline-block mb-4 px-4 py-1 rounded-full glass text-mariana-accent text-sm font-medium transition-all animate-pulse-glow">
          Our Creations
        </div>
        
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Innovative Projects That Push Boundaries
          </span>
        </h2>
        
        <p className="text-xl text-white/80 text-balance mx-auto max-w-2xl">
          Explore our portfolio of cutting-edge work that demonstrates our commitment to excellence and innovation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            delay={project.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default CreationsScene;
