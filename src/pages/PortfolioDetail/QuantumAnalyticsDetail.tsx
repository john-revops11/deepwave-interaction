
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const QuantumAnalyticsDetail = () => {
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
          <h1 className="text-2xl md:text-3xl font-bold text-white">Quantum Analytics Platform</h1>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm px-3 py-1 rounded-full bg-mariana-accent/20 text-mariana-accent">
              Vue.js
            </span>
            <span className="text-sm px-3 py-1 rounded-full bg-mariana-accent/20 text-mariana-accent">
              D3.js
            </span>
            <span className="text-sm px-3 py-1 rounded-full bg-mariana-accent/20 text-mariana-accent">
              Python
            </span>
          </div>
          
          <div className="rounded-xl overflow-hidden h-80 md:h-96 w-full">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
              alt="Quantum Analytics Platform" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-3">Technical Approach</h2>
            <p className="text-white/80 mb-3">
              We built Quantum Analytics using a sophisticated technology stack to handle complex 
              data processing requirements:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Vue.js frontend for responsive and interactive dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">D3.js for advanced data visualization components</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Python backend for data processing and ML algorithms</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">GraphQL API for efficient data queries</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Overview and CTA */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-3">Project Overview</h2>
            <p className="text-white/80 mb-4">
              Quantum Analytics Platform provides real-time data visualization and AI-powered insights 
              for enterprise decision-making. This sophisticated analytics solution transforms complex 
              datasets into actionable intelligence, enabling businesses to identify trends, predict 
              outcomes, and optimize operations with unprecedented accuracy.
            </p>

            <h2 className="text-xl font-semibold text-white mb-3 mt-5">Key Features</h2>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Interactive data visualization dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Predictive analytics using machine learning models</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Real-time data processing and analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Custom report generation and scheduling</span>
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-white mb-3 mt-5">Results</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">85% reduction in time spent on data analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">37% increase in prediction accuracy</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">62% improvement in operational efficiency</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-auto">
            <Button 
              className="bg-white hover:bg-white/90 text-gray-900 px-5 py-3 h-auto font-medium rounded-xl transition-all flex items-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              View Live Dashboard
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

export default QuantumAnalyticsDetail;
