
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Lightbulb, Bot, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScene } from '@/contexts/SceneContext';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  featureList: string[];
  fullDescription?: string;
  benefits?: string[];
  process?: { title: string; description: string }[];
  pricing?: { plan: string; price: string; features: string[] }[];
  faq?: { question: string; answer: string }[];
}

const services: Service[] = [
  {
    id: "ai-website",
    title: "AI Website Development",
    description: "We build intelligent websites that learn from user interactions and adapt to provide personalized experiences.",
    icon: <Lightbulb className="w-6 h-6" />,
    featureList: [
      "Dynamic content personalization",
      "Intelligent user journey mapping",
      "Seamless AI chat integration",
      "Adaptive interface design"
    ],
    fullDescription: "Our AI Website Development service transforms static websites into dynamic, intelligent digital experiences that learn and adapt to each visitor. We combine cutting-edge frontend technologies with machine learning backends to create websites that evolve over time, becoming increasingly personalized and effective with each user interaction. From content recommendations to interface adaptations, our AI-powered websites provide a unique experience tailored to each visitor's preferences and behavior patterns.",
    benefits: [
      "Increase conversion rates through personalized user journeys",
      "Reduce bounce rates with intelligent content recommendations",
      "Improve customer satisfaction through adaptive interfaces",
      "Gain valuable insights from AI-powered analytics",
      "Stay ahead of competitors with cutting-edge technology"
    ],
    process: [
      {
        title: "Discovery & Strategy",
        description: "We analyze your business goals, target audience, and existing data to develop a strategic plan for your AI website implementation."
      },
      {
        title: "Architecture & Design",
        description: "Our team designs the technical architecture and user interface, incorporating AI touchpoints for maximum impact."
      },
      {
        title: "Development & Integration",
        description: "We build your website with AI capabilities seamlessly integrated, ensuring performance and scalability."
      },
      {
        title: "Training & Optimization",
        description: "We train the AI models with initial data and optimize the algorithms for your specific business needs."
      },
      {
        title: "Launch & Continuous Learning",
        description: "After launch, we monitor performance and enable continuous learning capabilities so your website improves over time."
      }
    ],
    pricing: [
      {
        plan: "Standard",
        price: "$15,000",
        features: [
          "Basic content personalization",
          "User behavior tracking",
          "AI chatbot integration",
          "3 months of optimization"
        ]
      },
      {
        plan: "Advanced",
        price: "$30,000",
        features: [
          "Advanced personalization engine",
          "Predictive user journey mapping",
          "Custom AI assistant development",
          "6 months of optimization",
          "A/B testing framework"
        ]
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: [
          "Full-scale personalization ecosystem",
          "Custom ML model development",
          "Advanced analytics dashboard",
          "Ongoing optimization & support",
          "Integration with existing systems",
          "Dedicated AI engineer"
        ]
      }
    ],
    faq: [
      {
        question: "How long does it take to develop an AI-powered website?",
        answer: "Development time typically ranges from 2-4 months depending on the scope and complexity of the project. The initial launch includes baseline AI functionality, which continues to improve over time as the system learns from user interactions."
      },
      {
        question: "Will my website work without JavaScript enabled?",
        answer: "Yes, we build with accessibility in mind. While the AI features require JavaScript, we ensure the core functionality works without it through progressive enhancement techniques."
      },
      {
        question: "How is user data handled and protected?",
        answer: "We implement strict data protection measures compliant with GDPR and other privacy regulations. User data used for AI training is anonymized and secured with encryption."
      },
      {
        question: "Can an AI website integrate with my existing CMS?",
        answer: "Yes, we can build AI layers that integrate with popular CMS platforms like WordPress, Shopify, and custom solutions. This allows you to maintain your content workflow while adding AI capabilities."
      }
    ]
  },
  {
    id: "ai-agent",
    title: "AI Agent Automations",
    description: "Custom AI agents that automate customer interactions, support, and lead nurturing across your digital channels.",
    icon: <Bot className="w-6 h-6" />,
    featureList: [
      "24/7 customer engagement",
      "Personalized conversation flows",
      "Multi-channel integration",
      "Advanced analytics & insights"
    ],
    fullDescription: "Our AI Agent Automation service creates intelligent virtual assistants that handle customer interactions across all your digital touchpoints. Unlike basic chatbots, our AI agents understand context, remember conversation history, and continuously improve through machine learning. They can qualify leads, answer product questions, troubleshoot issues, and even process transactions, all while maintaining a natural, engaging conversation flow that reflects your brand voice.",
    benefits: [
      "Provide instant, 24/7 customer service without staffing limitations",
      "Qualify and nurture leads automatically, improving sales efficiency",
      "Reduce support costs while improving customer satisfaction",
      "Scale customer interactions without increasing headcount",
      "Collect valuable customer insights through conversation analysis"
    ],
    process: [
      {
        title: "Requirements Analysis",
        description: "We identify your business needs, communication challenges, and automation opportunities."
      },
      {
        title: "Knowledge Base Creation",
        description: "We build a comprehensive knowledge base that powers your AI agent's responses."
      },
      {
        title: "Conversation Design",
        description: "Our conversation designers map out dialogue flows and personality traits for your AI agent."
      },
      {
        title: "Development & Training",
        description: "We develop your AI agent and train it on your specific industry, products, and common questions."
      },
      {
        title: "Integration & Deployment",
        description: "We integrate your AI agent across your digital channels and deploy it with monitoring tools."
      }
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$10,000",
        features: [
          "Single-channel deployment",
          "FAQ handling capabilities",
          "Basic conversation flows",
          "Monthly performance reports"
        ]
      },
      {
        plan: "Business",
        price: "$25,000",
        features: [
          "Multi-channel deployment",
          "Advanced conversation capabilities",
          "CRM integration",
          "Custom analytics dashboard",
          "Quarterly retraining & optimization"
        ]
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: [
          "Omnichannel integration",
          "Complex workflow automation",
          "Full system integration",
          "Custom ML model development",
          "Dedicated support team",
          "Continuous improvement cycle"
        ]
      }
    ],
    faq: [
      {
        question: "How accurate are your AI agents in understanding customer inquiries?",
        answer: "Our AI agents typically achieve 85-95% accuracy in understanding customer inquiries, depending on the complexity of your domain. The system improves over time through continuous learning and regular retraining."
      },
      {
        question: "Can AI agents handle complex customer service issues?",
        answer: "Yes, our AI agents can handle multi-step troubleshooting and complex inquiries. For issues requiring human judgment, they seamlessly escalate to your team with full context transfer."
      },
      {
        question: "What languages do your AI agents support?",
        answer: "Our standard implementation supports English, Spanish, French, German, Japanese, and Chinese. Additional languages can be added upon request."
      },
      {
        question: "How do AI agents integrate with our existing systems?",
        answer: "We offer pre-built integrations with major CRM, helpdesk, and e-commerce platforms. For custom systems, we provide API integration services to ensure seamless data flow."
      }
    ]
  },
  {
    id: "auto-marketing",
    title: "Automated Marketing",
    description: "AI-powered marketing solutions that identify patterns, predict behaviors, and optimize campaigns in real-time.",
    icon: <BarChart className="w-6 h-6" />,
    featureList: [
      "Predictive audience targeting",
      "Content optimization & generation",
      "Automated campaign management",
      "Performance analytics & reporting"
    ],
    fullDescription: "Our Automated Marketing service leverages AI to transform how you acquire and engage customers. We implement predictive analytics that anticipate customer needs, automated content optimization that maximizes engagement, and intelligent campaign management that continuously improves performance. From identifying high-value customer segments to personalizing messaging at scale, our AI-powered marketing solutions help you achieve better results with less manual effort.",
    benefits: [
      "Increase marketing ROI through predictive targeting",
      "Create more effective content with AI-driven insights",
      "Optimize campaign performance in real-time",
      "Scale personalized marketing without increasing workload",
      "Discover actionable insights from complex marketing data"
    ],
    process: [
      {
        title: "Data Assessment",
        description: "We audit your existing marketing data and identify opportunities for AI enhancement."
      },
      {
        title: "Strategy Development",
        description: "We create a tailored AI marketing strategy aligned with your business objectives."
      },
      {
        title: "Technology Implementation",
        description: "We implement the AI tools and platforms needed to execute your strategy."
      },
      {
        title: "Campaign Setup",
        description: "We set up your initial AI-powered marketing campaigns and automation workflows."
      },
      {
        title: "Optimization & Scaling",
        description: "We monitor performance, refine algorithms, and scale successful approaches."
      }
    ],
    pricing: [
      {
        plan: "Starter",
        price: "$5,000/mo",
        features: [
          "Basic audience segmentation",
          "A/B testing automation",
          "Performance dashboard",
          "Monthly strategy sessions"
        ]
      },
      {
        plan: "Growth",
        price: "$10,000/mo",
        features: [
          "Advanced predictive targeting",
          "AI content optimization",
          "Multi-channel campaign automation",
          "Weekly optimization",
          "Quarterly strategy planning"
        ]
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: [
          "Full-scale marketing automation",
          "Custom predictive models",
          "AI content generation",
          "Cross-channel attribution",
          "Dedicated AI marketing team",
          "Continuous optimization"
        ]
      }
    ],
    faq: [
      {
        question: "How quickly can we expect to see results from AI marketing?",
        answer: "Initial performance improvements typically begin within 4-6 weeks as the system collects data and optimizes campaigns. Significant ROI improvements are usually evident by month 3, with continuous improvement thereafter."
      },
      {
        question: "Do we need a large existing customer dataset to start?",
        answer: "While more data improves initial performance, we can start with minimal data and implement strategies to rapidly build your dataset. The system becomes more effective as it gathers more interaction data."
      },
      {
        question: "How is the AI marketing performance measured?",
        answer: "We establish custom KPIs based on your business objectives, ranging from traditional metrics like CAC and ROAS to more advanced indicators like predictive CLV and engagement quality scores."
      },
      {
        question: "Can this integrate with our existing marketing technology stack?",
        answer: "Yes, we integrate with major marketing platforms and can build custom connectors for proprietary systems. This ensures that AI capabilities enhance rather than replace your existing marketing technology."
      }
    ]
  }
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const { changeScene } = useScene();

  useEffect(() => {
    // Simulate loading delay
    setLoading(true);
    setTimeout(() => {
      const foundService = services.find(s => s.id === id) || null;
      setService(foundService);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center h-screen">
        <div className="w-12 h-12 rounded-full border-4 border-mariana-accent/30 border-t-mariana-accent animate-spin"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="text-lg text-white/70 mb-8">The service you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => changeScene('solutions')} className="bg-mariana-accent hover:bg-mariana-accent/80 text-mariana-deep">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="mb-8">
        <Button 
          onClick={() => changeScene('solutions')} 
          variant="ghost" 
          className="hover:bg-white/10 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Button>
        
        <div className="glass rounded-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-mariana-accent/20 text-mariana-accent">
              {service.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 glow-text">{service.title}</h1>
              <p className="text-xl text-white/70">{service.description}</p>
            </div>
          </div>
          
          <p className="text-white/80 leading-relaxed text-lg mb-8">{service.fullDescription}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {service.featureList.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-mariana-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-mariana-accent" />
                </div>
                <span className="text-white/90">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button className="bg-mariana-accent hover:bg-mariana-accent/80 text-mariana-deep">
            Request a Consultation
          </Button>
        </div>
        
        {service.benefits && (
          <div className="glass rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-mariana-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-mariana-accent" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {service.process && (
          <div className="glass rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  {index < service.process!.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-mariana-accent/30"></div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mariana-accent/20 flex items-center justify-center text-mariana-accent text-xl font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {service.pricing && (
          <div className="glass rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.pricing.map((plan, index) => (
                <div key={index} className={`rounded-xl p-6 ${
                  index === 1 ? 'border-2 border-mariana-accent glow-border' : 'border border-white/10'
                }`}>
                  <h3 className="text-xl font-semibold mb-2">{plan.plan}</h3>
                  <div className="text-3xl font-bold text-mariana-accent mb-4">{plan.price}</div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-mariana-accent flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={index === 1 
                    ? "w-full bg-mariana-accent hover:bg-mariana-accent/80 text-mariana-deep" 
                    : "w-full bg-white/10 hover:bg-white/20 text-white"
                  }>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {service.faq && (
          <div className="glass rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faq.map((item, index) => (
                <div key={index} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-medium text-white mb-2">{item.question}</h3>
                  <p className="text-white/70">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="glass rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">Contact us today to discuss how our {service.title} can help your business thrive in the digital age.</p>
          <Button className="bg-mariana-accent hover:bg-mariana-accent/80 text-mariana-deep px-8 py-6">
            Request a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
