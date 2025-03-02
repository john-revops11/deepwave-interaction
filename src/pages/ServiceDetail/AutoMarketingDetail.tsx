
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BarChart, Target, Zap, LineChart, BarChart3 } from "lucide-react";

const AutoMarketingDetail = () => {
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
              <BarChart className="w-8 h-8" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Automated Marketing</h1>
          </div>
          
          <div className="rounded-xl overflow-hidden h-80 md:h-96 w-full">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
              alt="Automated Marketing" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-3">Key Features</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Audience Targeting</h3>
                  <p className="text-white/70 text-sm">Predictive analytics to identify and reach high-value prospects</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Content Optimization</h3>
                  <p className="text-white/70 text-sm">AI-generated content that resonates with your target audience</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Campaign Management</h3>
                  <p className="text-white/70 text-sm">Automated campaign execution, testing, and optimization</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mariana-accent/20 flex items-center justify-center text-mariana-accent">
                  <LineChart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Performance Analytics</h3>
                  <p className="text-white/70 text-sm">Real-time insights and actionable recommendations</p>
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
              Our AI-powered marketing solutions identify patterns, predict behaviors, and optimize campaigns 
              in real-time. By leveraging advanced machine learning algorithms, we help businesses create 
              more effective marketing strategies that deliver measurable results.
            </p>

            <h2 className="text-xl font-semibold text-white mb-3 mt-6">Our Approach</h2>
            <p className="text-white/80 mb-3">
              We transform your marketing efforts through data-driven automation that continuously learns 
              and improves. Our process includes:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Comprehensive data analysis of your audience and market</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Custom AI model development for your specific marketing goals</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Automated A/B testing to optimize conversion rates</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mariana-accent mt-2"></div>
                <span className="text-white/80">Continuous learning systems that improve over time</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-auto">
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-mariana-accent hover:bg-mariana-accent/90 text-mariana-deep px-6 py-5 h-auto text-lg font-medium rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all w-full md:w-auto"
            >
              Transform Your Marketing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoMarketingDetail;
