
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-mariana-deep flex items-center justify-center p-4">
      <div className={`text-center max-w-md transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="inline-block mb-8 px-4 py-1 rounded-full glass text-mariana-accent text-sm font-medium transition-all animate-pulse-glow">
          404 Error
        </div>
        
        <h1 className="text-6xl font-bold mb-4 text-white">Page Not Found</h1>
        
        <p className="text-xl mb-8 text-white/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button 
          onClick={() => window.location.href = '/'}
          className="group relative inline-flex items-center gap-2 py-6 px-8 bg-mariana-accent hover:bg-mariana-accent/90 text-mariana-deep font-medium rounded-xl hover-glow"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
