
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  features: string[];
  technical: string[];
  results: string[];
}

const portfolioData: Record<string, PortfolioItem> = {
  "lumina-ecommerce": {
    id: "lumina-ecommerce",
    title: "Lumina E-Commerce",
    description: "Next-generation shopping experience with AI-driven personalization and recommendations. This platform leverages machine learning to understand customer preferences and deliver tailored product suggestions, enhancing conversion rates and customer satisfaction.",
    technologies: ["Next.js", "GraphQL", "ML"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2670&auto=format&fit=crop",
    features: [
      "AI-powered product recommendations",
      "Personalized shopping experiences",
      "Advanced search with natural language processing",
      "Dynamic pricing optimization",
      "Behavioral analytics and customer insights"
    ],
    technical: [
      "Next.js frontend for SEO-optimized pages",
      "GraphQL API for efficient data fetching",
      "Machine learning recommendation engine",
      "Serverless architecture for scalability",
      "Real-time inventory management system"
    ],
    results: [
      "43% increase in average order value",
      "27% improvement in conversion rates",
      "68% of purchases influenced by AI recommendations",
      "52% reduction in cart abandonment",
      "4.8/5 customer satisfaction rating"
    ]
  },
  "prism-crm": {
    id: "prism-crm",
    title: "Prism CRM",
    description: "Intelligent customer relationship management system with predictive analytics. Prism CRM transforms traditional customer management by incorporating advanced AI to predict customer needs, optimize engagement strategies, and provide actionable insights for sales teams.",
    technologies: ["Angular", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    features: [
      "Predictive lead scoring and qualification",
      "Automated customer journey mapping",
      "Smart task prioritization for sales teams",
      "AI-powered email and communication suggestions",
      "Integrated customer sentiment analysis"
    ],
    technical: [
      "Angular frontend with modular architecture",
      "Node.js backend services",
      "MongoDB for flexible data storage",
      "Machine learning pipeline for predictions",
      "WebSocket integration for real-time updates"
    ],
    results: [
      "156% increase in sales team productivity",
      "32% higher lead conversion rate",
      "41% reduction in sales cycle duration",
      "89% accuracy in lead scoring predictions",
      "3.2x ROI for client businesses"
    ]
  },
  "echo-social": {
    id: "echo-social",
    title: "Echo Social Platform",
    description: "AI-enhanced social network with advanced content curation and moderation. Echo creates safer, more engaging social experiences by intelligently filtering content, connecting like-minded users, and protecting against harmful interactions.",
    technologies: ["React Native", "Firebase", "AI"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop",
    features: [
      "AI content moderation and safety filtering",
      "Personalized feed curation algorithms",
      "Community matching based on interests",
      "Sentiment analysis for trend identification",
      "Advanced privacy and security controls"
    ],
    technical: [
      "React Native for cross-platform mobile support",
      "Firebase backend for real-time database and authentication",
      "Custom AI moderation system",
      "Content recommendation algorithms",
      "Distributed content delivery network"
    ],
    results: [
      "78% reduction in reported harmful content",
      "42% increase in daily active users",
      "57% higher user retention rates",
      "4.7/5 average app store rating",
      "87% of users report finding relevant communities"
    ]
  },
  "pulse-health": {
    id: "pulse-health",
    title: "Pulse Health Tracker",
    description: "Personalized health monitoring platform with AI health insights and predictions. Pulse combines wearable data, user input, and machine learning to deliver actionable health recommendations and early warning indicators.",
    technologies: ["Swift", "TensorFlow", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    features: [
      "Personalized health insights and recommendations",
      "Early warning system for potential health issues",
      "AI-generated fitness and nutrition plans",
      "Integration with popular fitness wearables",
      "Secure medical data sharing capabilities"
    ],
    technical: [
      "Swift native iOS application",
      "TensorFlow for on-device ML inference",
      "AWS backend infrastructure",
      "HIPAA-compliant data storage",
      "HealthKit integration for comprehensive data collection"
    ],
    results: [
      "92% of users report improved health awareness",
      "68% adherence to recommended health activities",
      "27% average improvement in key health indicators",
      "83% accuracy in early health issue detection",
      "4.9/5 user satisfaction rating"
    ]
  }
};

const GenericPortfolioDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const portfolioItem = id ? portfolioData[id] : null;
  
  if (!portfolioItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl text-white">Portfolio item not found</h1>
        <Button 
          variant="ghost" 
          onClick={() => navigate("/creations")} 
          className="mt-4 text-white hover:text-mariana-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Creations
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)} 
        className="mb-8 text-white hover:text-mariana-accent"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{portfolioItem.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {portfolioItem.technologies.map((tech, index) => (
            <span key={index} className="text-sm px-3 py-1 rounded-full bg-mariana-accent/20 text-mariana-accent">
              {tech}
            </span>
          ))}
        </div>

        <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8">
          <img 
            src={portfolioItem.image}
            alt={portfolioItem.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="glass p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Project Overview</h2>
          <p className="text-white/80 mb-6">
            {portfolioItem.description}
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
          <ul className="space-y-3 mb-6">
            {portfolioItem.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Technical Approach</h2>
          <p className="text-white/80 mb-4">
            We developed {portfolioItem.title} using innovative technologies to ensure optimal performance:
          </p>
          <ul className="space-y-3 mb-6">
            {portfolioItem.technical.map((tech, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
                <span className="text-white/80">{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
          <p className="text-white/80 mb-4">
            {portfolioItem.title} has delivered significant value:
          </p>
          <ul className="space-y-3 mb-6">
            {portfolioItem.results.map((result, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
                <span className="text-white/80">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            className="bg-white hover:bg-white/90 text-gray-900 px-6 py-6 h-auto text-lg font-medium rounded-xl transition-all flex items-center gap-2"
          >
            <ExternalLink className="h-5 w-5" />
            View Live Project
          </Button>
          
          <Button 
            variant="outline"
            className="border-white/20 hover:bg-white/10 text-white px-6 py-6 h-auto text-lg font-medium rounded-xl transition-all flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            View Source Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GenericPortfolioDetail;
