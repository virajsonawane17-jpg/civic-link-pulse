import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deadlines from "./pages/Deadlines";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/polling" element={<Deadlines />} />
          <Route path="/fact-check" element={<div className="min-h-screen flex items-center justify-center pb-20"><div className="text-center"><h1 className="text-2xl font-bold mb-4">Fact-Check Hub</h1><p className="text-muted-foreground">Coming soon - verify voting information and combat misinformation</p></div></div>} />
          <Route path="/language" element={<div className="min-h-screen flex items-center justify-center pb-20"><div className="text-center"><h1 className="text-2xl font-bold mb-4">Language Support</h1><p className="text-muted-foreground">Coming soon - access voting materials in your preferred language</p></div></div>} />
          <Route path="/help" element={<div className="min-h-screen flex items-center justify-center pb-20"><div className="text-center"><h1 className="text-2xl font-bold mb-4">Help & Support</h1><p className="text-muted-foreground">Coming soon - FAQ and multilingual support resources</p></div></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNavigation />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
