import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ValentineProvider } from "./context/ValentineContext";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";
import AskPage from "./pages/AskPage";
import CelebrationPage from "./pages/CelebrationPage";
import CustomizePage from "./pages/CustomizePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ValentineProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/ask" element={<AskPage />} />
            <Route path="/celebration" element={<CelebrationPage />} />
            <Route path="/customize" element={<CustomizePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ValentineProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
