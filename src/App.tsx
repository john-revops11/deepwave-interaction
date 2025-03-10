
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SceneProvider } from "@/contexts/SceneContext";
import AppLayout from "./components/layout/AppLayout";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

// Service Detail Pages
import AiWebsiteDetail from "./pages/ServiceDetail/AiWebsiteDetail";
import AiAgentDetail from "./pages/ServiceDetail/AiAgentDetail";
import AutoMarketingDetail from "./pages/ServiceDetail/AutoMarketingDetail";

// Portfolio Detail Pages
import NovaAiDetail from "./pages/PortfolioDetail/NovaAiDetail";
import QuantumAnalyticsDetail from "./pages/PortfolioDetail/QuantumAnalyticsDetail";
import GenericPortfolioDetail from "./pages/PortfolioDetail/GenericPortfolioDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SceneProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Index />} />
              <Route path="contact" element={<Contact />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="services" element={<Services />} />
              <Route path="products" element={<Products />} />
              
              {/* Service Detail Routes */}
              <Route path="services/ai-website" element={<AiWebsiteDetail />} />
              <Route path="services/ai-agent" element={<AiAgentDetail />} />
              <Route path="services/auto-marketing" element={<AutoMarketingDetail />} />
              
              {/* Portfolio Detail Routes */}
              <Route path="portfolio/nova-ai" element={<NovaAiDetail />} />
              <Route path="portfolio/quantum-analytics" element={<QuantumAnalyticsDetail />} />
              <Route path="portfolio/:id" element={<GenericPortfolioDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SceneProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
