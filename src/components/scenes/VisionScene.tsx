
import { useState, useEffect } from 'react';

const VisionScene = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 h-full flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <div className="inline-block mb-4 px-4 py-1 rounded-full glass text-mariana-accent text-sm font-medium transition-all animate-pulse-glow">
            Our Vision
          </div>
          
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Pioneering the Future of Web Intelligence
            </span>
          </h2>
          
          <div className="space-y-6 text-white/80">
            <p>
              At Mariana Deep Intelligence, we explore the uncharted depths of AI to create web experiences that are as intelligent as they are beautiful.
            </p>
            <p>
              Founded on the principles of innovation, precision, and user-centricity, we're redefining what's possible in the digital space.
            </p>
            <p>
              Our mission is to empower businesses with AI-driven solutions that elevate their online presence, automate their operations, and forge deeper connections with their audience.
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold text-mariana-accent mb-2">Our Approach</h3>
              <p className="text-sm text-white/70">
                We blend cutting-edge technology with intuitive design to create solutions that are both powerful and accessible. Every project is built with scalability and future-readiness at its core.
              </p>
            </div>
          </div>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="relative w-full h-[400px]">
            <div className="absolute top-0 right-0 w-[80%] h-[80%] glass-dark rounded-xl overflow-hidden animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-mariana-accent/20 to-transparent opacity-70"></div>
              <div className="p-6">
                <div className="w-full h-4 bg-white/10 rounded-full mb-4"></div>
                <div className="w-3/4 h-4 bg-white/10 rounded-full mb-4"></div>
                <div className="w-5/6 h-4 bg-white/10 rounded-full mb-8"></div>
                
                <div className="flex space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-mariana-accent/30"></div>
                  <div className="flex-1">
                    <div className="w-full h-3 bg-white/10 rounded-full mb-2"></div>
                    <div className="w-5/6 h-3 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-10 h-10 rounded-full bg-mariana-accent/30"></div>
                  <div className="flex-1">
                    <div className="w-full h-3 bg-white/10 rounded-full mb-2"></div>
                    <div className="w-3/4 h-3 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-[70%] h-[70%] glass rounded-xl overflow-hidden animate-float" style={{ animationDelay: '2s' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-mariana-accent/20 to-transparent opacity-50"></div>
              <div className="h-full flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-mariana-accent/30 flex items-center justify-center animate-pulse-glow">
                  <div className="w-12 h-12 rounded-full bg-mariana-accent/50"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-8 right-12 glass rounded-lg p-4 max-w-[240px] animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-mariana-accent"></div>
              <p className="text-sm font-medium text-white">Our Values</p>
            </div>
            <ul className="text-xs space-y-1 text-white/70">
              <li>• Innovation at every level</li>
              <li>• User-centered design</li>
              <li>• Ethical AI development</li>
              <li>• Continuous evolution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionScene;
