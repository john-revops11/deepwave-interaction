
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bot, Zap, Globe, MessageSquare, Shield } from "lucide-react";

const AiAgentDetail = () => {
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
        {/* Left Column - Image and Key Features */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-mariana-accent/20 text-mariana-accent">
              <Bot className="w-8 h-8" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">AI Agent Automations</h1>
          </div>
          
          <div className="rounded-xl overflow-hidden h-80 md:h-96 w-full">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop" 
              alt="AI Agent Automations" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-3">Key Features</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Natural Conversations</h3>
                  <p className="text-white/70 text-sm">Human-like interactions that evolve through machine learning</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Multi-Channel Presence</h3>
                  <p className="text-white/70 text-sm">Consistent experience across web, mobile, and messaging platforms</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Process Automation</h3>
                  <p className="text-white/70 text-sm">Handle routine tasks, appointments, and information gathering</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Secure Integration</h3>
                  <p className="text-white/70 text-sm">Enterprise-grade security for sensitive customer interactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Overview and CTA */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
            <p className="text-white/80 mb-4">
              Our custom AI agents automate customer interactions, support, and lead nurturing across your 
              digital channels. These intelligent virtual assistants work 24/7 to engage with your audience, 
              answer questions, and guide users through their journey with your brand.
            </p>

            <h2 className="text-xl font-semibold text-white mb-3 mt-6">Our Approach</h2>
            <p className="text-white/80 mb-3">
              We develop AI agents that truly understand your business, products, and customers. Our 
              development process includes:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Deep knowledge base construction from your existing content</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Personality and tone alignment with your brand voice</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Scenario training for common and complex customer interactions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Ongoing optimization based on conversation analytics</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-auto">
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-mariana-accent hover:bg-mariana-accent/90 text-mariana-deep px-6 py-5 h-auto text-lg font-medium rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all w-full md:w-auto"
            >
              Build Your AI Agent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAgentDetail;
