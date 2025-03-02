
import { useState, useEffect } from 'react';
import { Send, Calendar, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactScene = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <div className="inline-block mb-4 px-4 py-1 rounded-full glass text-mariana-accent text-sm font-medium transition-all animate-pulse-glow">
            Let's Connect
          </div>
          
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </span>
          </h2>
          
          <p className="text-white/80 mb-8">
            Whether you have a specific project in mind or you're just exploring possibilities, we'd love to hear from you. Let's start a conversation about how we can help transform your digital presence.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mariana-accent/20 text-mariana-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white/60">Email Us</p>
                <p className="text-white">hello@marianadeep.io</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mariana-accent/20 text-mariana-accent">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white/60">Call Us</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mariana-accent/20 text-mariana-accent">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white/60">Schedule a Meeting</p>
                <Button variant="link" className="px-0 text-mariana-accent">
                  Book a 30-minute consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <form onSubmit={handleSubmit} className="glass rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-white">Send Us a Message</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white/70">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white/70">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-white/70">Company (Optional)</label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/70">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white resize-none h-32"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-mariana-accent hover:bg-mariana-accent/90 text-mariana-deep hover-glow flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
          
          <div className="mt-6 glass rounded-lg p-4">
            <p className="text-sm text-white/70">
              By submitting this form, you agree to our privacy policy and consent to be contacted regarding your inquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScene;
