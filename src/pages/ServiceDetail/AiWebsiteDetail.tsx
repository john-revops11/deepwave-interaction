
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Code, Bot, BarChart3, Users } from "lucide-react";

const AiWebsiteDetail = () => {
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
              <Globe className="w-8 h-8" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">AI Website Development</h1>
          </div>
          
          <div className="rounded-xl overflow-hidden h-80 md:h-96 w-full">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2670&auto=format&fit=crop" 
              alt="AI Website Development" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-3">Key Features</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Dynamic Personalization</h3>
                  <p className="text-white/70 text-sm">Content and layouts that adapt to user preferences and behavior patterns</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">AI Chat Integration</h3>
                  <p className="text-white/70 text-sm">Intelligent customer support and guidance through conversational interfaces</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Smart Content Generation</h3>
                  <p className="text-white/70 text-sm">AI-powered content creation and optimization for engagement and SEO</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Intelligent Analytics</h3>
                  <p className="text-white/70 text-sm">Advanced data insights that inform continuous website optimization</p>
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
              We build intelligent websites that learn from user interactions and adapt to provide personalized 
              experiences. Our AI-powered websites go beyond static content to deliver dynamic, engaging, and 
              conversion-focused digital experiences that evolve with your audience.
            </p>

            <h2 className="text-xl font-semibold text-white mb-3 mt-6">Our Approach</h2>
            <p className="text-white/80 mb-3">
              We combine cutting-edge AI technologies with human-centered design principles to create websites 
              that not only look stunning but learn and improve over time. Our development process includes:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">In-depth audience analysis and behavior mapping</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Custom AI model training for your specific industry and goals</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Iterative development with continuous learning capabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Integration with existing systems and data sources</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-auto">
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-mariana-accent hover:bg-mariana-accent/90 text-mariana-deep px-6 py-5 h-auto text-lg font-medium rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all w-full md:w-auto"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiWebsiteDetail;
