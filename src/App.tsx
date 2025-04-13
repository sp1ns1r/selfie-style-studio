
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Upload from "./pages/Upload";
import StyleSelection from "./pages/StyleSelection";
import Review from "./pages/Review";
import Processing from "./pages/Processing";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Index />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/styles" element={<StyleSelection />} />
        <Route path="/review" element={<Review />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
