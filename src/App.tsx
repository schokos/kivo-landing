import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieBanner } from "@/components/marketing/CookieBanner";

import ComingSoon from "./pages/ComingSoon";
import Impressum from "./pages/legal/Impressum";
import AGB from "./pages/legal/AGB";
import Datenschutz from "./pages/legal/Datenschutz";
import Cookies from "./pages/legal/Cookies";

const queryClient = new QueryClient();

// When deployed to https://<user>.github.io/kivo-landing/ the React Router
// must know about the sub-path. Vite injects BASE_URL from vite.config.ts.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
