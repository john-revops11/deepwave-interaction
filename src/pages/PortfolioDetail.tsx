
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScene } from '@/contexts/SceneContext';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  fullDescription?: string;
  date?: string;
  team?: string;
  category?: string;
  link?: string;
  github?: string;
  screenshots?: string[];
}

const projects: Project[] = [
  {
    id: "nova-ai",
    title: "Nova AI Assistant",
    description: "An intelligent digital assistant that adapts to user behavior and preferences.",
    fullDescription: "Nova AI is our flagship intelligent assistant that learns from every interaction to provide increasingly personalized responses. Built with natural language processing at its core, Nova can understand context, sentiment, and intent to deliver human-like conversations. The system includes a sophisticated memory model that remembers user preferences over time and adapts its responses accordingly.",
    technologies: ["React", "TensorFlow.js", "WebGL", "Natural Language Processing", "Adaptive Learning"],
    image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?q=80&w=2574&auto=format&fit=crop",
    date: "March 2023",
    team: "AI Team & Frontend Engineers",
    category: "Artificial Intelligence",
    link: "#",
    github: "#",
    screenshots: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "quantum-analytics",
    title: "Quantum Analytics Platform",
    description: "Real-time data visualization and AI-powered insights for enterprise decision-making.",
    fullDescription: "Quantum Analytics Platform transforms complex business data into actionable insights through advanced visualization techniques and predictive analytics. The platform processes millions of data points in real-time, providing executives with critical decision-making tools through an intuitive dashboard interface. Our proprietary algorithms detect patterns and anomalies invisible to traditional analytics tools.",
    technologies: ["Vue.js", "D3.js", "Python", "TensorFlow", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    date: "November 2022",
    team: "Data Science & UI/UX Team",
    category: "Business Intelligence",
    link: "#",
    github: "#",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    ]
  },
  {
    id: "lumina-ecommerce",
    title: "Lumina E-Commerce",
    description: "Next-generation shopping experience with AI-driven personalization and recommendations.",
    fullDescription: "Lumina redefines e-commerce through hyper-personalization. Its recommendation engine analyzes browsing patterns, purchase history, and even cursor movements to create uniquely tailored shopping experiences for each user. The platform includes AI-powered search functionality that understands natural language queries and visual product recognition technology that allows users to find products by uploading images.",
    technologies: ["Next.js", "GraphQL", "ML", "Redis", "MongoDB"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2670&auto=format&fit=crop",
    date: "July 2023",
    team: "Full Stack & ML Engineers",
    category: "E-Commerce",
    link: "#",
    github: "#",
    screenshots: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2629&auto=format&fit=crop"
    ]
  },
  {
    id: "prism-crm",
    title: "Prism CRM",
    description: "Intelligent customer relationship management system with predictive analytics.",
    fullDescription: "Prism CRM helps businesses not just manage customer relationships but predict their future needs. The system uses machine learning to analyze communication patterns, purchase history, and support tickets to forecast customer satisfaction and churn probability. Its intelligent scoring system prioritizes leads based on conversion likelihood, while the automated workflow engine handles routine follow-ups and nurturing sequences.",
    technologies: ["Angular", "Node.js", "MongoDB", "Regression Analysis", "NLP"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    date: "January 2023",
    team: "Backend & AI Engineers",
    category: "Business Software",
    link: "#",
    github: "#",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "echo-social",
    title: "Echo Social Platform",
    description: "AI-enhanced social network with advanced content curation and moderation.",
    fullDescription: "Echo is a next-generation social platform where content quality takes precedence over virality. Our sophisticated content curation algorithms balance user preferences with discovery of diverse perspectives, creating healthy information ecosystems. The platform features industry-leading automated moderation that can detect nuanced policy violations including context-dependent harassment and misinformation, while protecting legitimate speech and expression.",
    technologies: ["React Native", "Firebase", "AI", "Content Analysis", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop",
    date: "October 2022",
    team: "Mobile & ML Engineers",
    category: "Social Media",
    link: "#",
    github: "#",
    screenshots: [
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "pulse-health",
    title: "Pulse Health Tracker",
    description: "Personalized health monitoring platform with AI health insights and predictions.",
    fullDescription: "Pulse Health Tracker combines wearable technology with advanced health analytics to provide personalized wellness insights. The platform processes biometric data from multiple sources to create a comprehensive health profile, then uses predictive modeling to offer preventative health recommendations. Features include sleep quality analysis, stress level tracking, and early warning indicators for potential health issues based on subtle pattern changes.",
    technologies: ["Swift", "TensorFlow", "AWS", "Health Data Analysis", "IoT"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    date: "April 2023",
    team: "Mobile Health & Data Science",
    category: "Health Tech",
    link: "#",
    github: "#",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2670&auto=format&fit=crop"
    ]
  }
];

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const { changeScene } = useScene();

  useEffect(() => {
    // Simulate loading delay
    setLoading(true);
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === id) || null;
      setProject(foundProject);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center h-screen">
        <div className="w-12 h-12 rounded-full border-4 border-mariana-accent/30 border-t-mariana-accent animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <p className="text-lg text-white/70 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => changeScene('creations')} className="bg-mariana-accent hover:bg-mariana-accent/80 text-mariana-deep">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="mb-8">
        <Button 
          onClick={() => changeScene('creations')} 
          variant="ghost" 
          className="hover:bg-white/10 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Button>
        
        <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-mariana-deep/30 to-mariana-deep z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 glow-text">{project.title}</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="glass rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-white/80 leading-relaxed mb-6">{project.fullDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-mariana-accent/20 text-mariana-accent text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.link && (
                  <Button className="bg-mariana-accent hover:bg-mariana-accent/80 text-mariana-deep">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live
                  </Button>
                )}
                
                {project.github && (
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                )}
              </div>
            </div>
            
            {project.screenshots && (
              <div className="glass rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="rounded-lg overflow-hidden hover-glow">
                      <img 
                        src={screenshot} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              
              <div className="space-y-4">
                {project.date && (
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-mariana-accent" />
                    <div>
                      <h3 className="text-sm text-white/50">Completed</h3>
                      <p className="text-white">{project.date}</p>
                    </div>
                  </div>
                )}
                
                {project.team && (
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-mariana-accent" />
                    <div>
                      <h3 className="text-sm text-white/50">Team</h3>
                      <p className="text-white">{project.team}</p>
                    </div>
                  </div>
                )}
                
                {project.category && (
                  <div className="flex items-start gap-3">
                    <Tag className="w-5 h-5 text-mariana-accent" />
                    <div>
                      <h3 className="text-sm text-white/50">Category</h3>
                      <p className="text-white">{project.category}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Related Projects</h2>
              <div className="space-y-4">
                {projects
                  .filter(p => p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject, index) => (
                    <Link 
                      key={index} 
                      to={`/portfolio/${relatedProject.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    >
                      <div 
                        className="w-12 h-12 rounded-md bg-cover bg-center"
                        style={{ backgroundImage: `url(${relatedProject.image})` }}
                      ></div>
                      <div>
                        <h3 className="font-medium text-white">{relatedProject.title}</h3>
                        <p className="text-xs text-white/60">{relatedProject.category}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
