
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const NovaAiDetail = () => {
  const navigate = useNavigate();

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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Nova AI Assistant</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-sm px-3 py-1 rounded-full bg-mariana-accent/20 text-mariana-accent">
            React
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-mariana-accent/20 text-mariana-accent">
            TensorFlow.js
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-mariana-accent/20 text-mariana-accent">
            WebGL
          </span>
        </div>

        <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8">
          <img 
            src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?q=80&w=2574&auto=format&fit=crop" 
            alt="Nova AI Assistant" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="glass p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Project Overview</h2>
          <p className="text-white/80 mb-6">
            Nova AI is an intelligent digital assistant that adapts to user behavior and preferences, 
            providing personalized support across devices. This cutting-edge AI solution leverages 
            advanced machine learning algorithms to learn from each interaction, becoming increasingly 
            effective at anticipating user needs over time.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Natural language processing for human-like conversations</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Personalized user experience based on interaction history</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Real-time data processing for instant responses</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Multi-platform integration (web, mobile, desktop)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">On-device machine learning for enhanced privacy</span>
            </li>
          </ul>
        </div>

        <div className="glass p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Technical Approach</h2>
          <p className="text-white/80 mb-4">
            We developed Nova AI using cutting-edge technologies to ensure optimal performance, 
            security, and scalability:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">React-based frontend for responsive and interactive UI</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">TensorFlow.js for client-side machine learning capabilities</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">WebGL acceleration for complex ML operations</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Custom natural language processing pipeline</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">End-to-end encryption for all user data</span>
            </li>
          </ul>
        </div>

        <div className="glass p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
          <p className="text-white/80 mb-4">
            Nova AI has transformed how users interact with digital services, achieving:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">78% reduction in support ticket volume</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">92% user satisfaction rating</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">42% increase in user engagement metrics</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">65% improvement in task completion efficiency</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            className="bg-white hover:bg-white/90 text-gray-900 px-6 py-6 h-auto text-lg font-medium rounded-xl transition-all flex items-center gap-2"
          >
            <ExternalLink className="h-5 w-5" />
            Visit Live Demo
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

export default NovaAiDetail;
