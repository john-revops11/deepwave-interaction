
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const QuantumAnalyticsDetail = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Quantum Analytics Platform</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
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

        <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
            alt="Quantum Analytics Platform" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="glass p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Project Overview</h2>
          <p className="text-white/80 mb-6">
            Quantum Analytics Platform provides real-time data visualization and AI-powered insights 
            for enterprise decision-making. This sophisticated analytics solution transforms complex 
            datasets into actionable intelligence, enabling businesses to identify trends, predict 
            outcomes, and optimize operations with unprecedented accuracy.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Interactive data visualization dashboards</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Predictive analytics using machine learning models</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Real-time data processing and analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Custom report generation and scheduling</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Multi-source data integration capabilities</span>
            </li>
          </ul>
        </div>

        <div className="glass p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Technical Approach</h2>
          <p className="text-white/80 mb-4">
            We built Quantum Analytics using a sophisticated technology stack to handle complex 
            data processing requirements:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Vue.js frontend for responsive and interactive dashboards</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">D3.js for advanced data visualization components</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Python backend for data processing and ML algorithms</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">GraphQL API for efficient data queries</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">Containerized microservices architecture for scalability</span>
            </li>
          </ul>
        </div>

        <div className="glass p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
          <p className="text-white/80 mb-4">
            Quantum Analytics has transformed data-driven decision making for our clients:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">85% reduction in time spent on data analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">37% increase in prediction accuracy</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">62% improvement in operational efficiency</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-mariana-accent mt-2.5"></div>
              <span className="text-white/80">$2.4M in cost savings through optimized resource allocation</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            className="bg-white hover:bg-white/90 text-gray-900 px-6 py-6 h-auto text-lg font-medium rounded-xl transition-all flex items-center gap-2"
          >
            <ExternalLink className="h-5 w-5" />
            View Live Dashboard
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

export default QuantumAnalyticsDetail;
