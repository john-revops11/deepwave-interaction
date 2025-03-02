
import { useState, useEffect } from 'react';
import { LogIn, User, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const DashboardScene = () => {
  const [loaded, setLoaded] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    // Simulate login attempt
    setTimeout(() => {
      setIsLoggingIn(false);
      toast({
        title: "Login feature is coming soon",
        description: "This is a demo. The client dashboard is not yet implemented.",
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 h-full flex items-center justify-center">
      <div className={`max-w-md w-full transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mariana-accent/20 text-mariana-accent mb-4 animate-pulse-glow">
            <User className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl font-bold mb-2 tracking-tight text-white">
            Client Dashboard
          </h2>
          
          <p className="text-white/70">
            Access your project updates, analytics, and resources
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="glass rounded-xl p-8 shadow-lg">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-white/70">Email</label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white pl-10"
                  required
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-white/70">Password</label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white pl-10"
                  required
                />
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-mariana-accent focus:ring-mariana-accent/30"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-white/70">
                  Remember me
                </label>
              </div>
              
              <Button variant="link" className="text-mariana-accent text-sm p-0">
                Forgot password?
              </Button>
            </div>
            
            <Button 
              type="submit" 
              disabled={isLoggingIn}
              className="w-full bg-mariana-accent hover:bg-mariana-accent/90 text-mariana-deep hover-glow flex items-center justify-center gap-2"
            >
              {isLoggingIn ? 'Logging in...' : 'Sign In'}
              <LogIn className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-white/50">
              Don't have an account?{' '}
              <Button variant="link" className="text-mariana-accent p-0">
                Contact us
              </Button>
            </p>
          </div>
        </form>
        
        <div className="mt-6 flex justify-center space-x-4">
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
            Terms of Service
          </Button>
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
            Privacy Policy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardScene;
