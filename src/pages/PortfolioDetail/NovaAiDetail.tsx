
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const NovaAiDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 h-full flex flex-col">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)} 
        className="mb-6 text-white hover:text-mariana-accent self-start"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[calc(100vh-10rem)] overflow-hidden">
        {/* Left Column - Image and Tech Stack */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Nova AI Assistant</h1>
          
          <div className="flex flex-wrap gap-2 mb-4">
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
          
          <div className="rounded-xl overflow-hidden h-80 md:h-96 w-full">
            <img 
              src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?q=80&w=2574&auto=format&fit=crop" 
              alt="Nova AI Assistant" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-3">Technical Approach</h2>
            <p className="text-white/80 mb-3">
              We developed Nova AI using cutting-edge technologies to ensure optimal performance, 
              security, and scalability:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">React-based frontend for responsive and interactive UI</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">TensorFlow.js for client-side machine learning capabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">WebGL acceleration for complex ML operations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Custom natural language processing pipeline</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Overview and CTA */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-3">Project Overview</h2>
            <p className="text-white/80 mb-4">
              Nova AI is an intelligent digital assistant that adapts to user behavior and preferences, 
              providing personalized support across devices. This cutting-edge AI solution leverages 
              advanced machine learning algorithms to learn from each interaction, becoming increasingly 
              effective at anticipating user needs over time.
            </p>

            <h2 className="text-xl font-semibold text-white mb-3 mt-5">Key Features</h2>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Natural language processing for human-like conversations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Personalized user experience based on interaction history</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Real-time data processing for instant responses</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Multi-platform integration (web, mobile, desktop)</span>
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-white mb-3 mt-5">Results</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">78% reduction in support ticket volume</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">92% user satisfaction rating</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">42% increase in user engagement metrics</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-auto">
            <Button 
              className="bg-white hover:bg-white/90 text-gray-900 px-5 py-3 h-auto font-medium rounded-xl transition-all flex items-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              Visit Live Demo
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/20 hover:bg-white/10 text-white px-5 py-3 h-auto font-medium rounded-xl transition-all flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovaAiDetail;
