import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessageCircle } from "lucide-react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>

      <Button
        asChild
        variant="hero"
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full"
      >
        <a
          href="https://wa.me/351965773193"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </Button>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
