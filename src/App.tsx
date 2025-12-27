import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Crypto from "./pages/courses/Crypto";
import Stocks from "./pages/courses/Stocks";
import Forex from "./pages/courses/Forex";
import Commodities from "./pages/courses/Commodities";
import Options from "./pages/courses/Options";
import Futures from "./pages/courses/Futures";
import Bonds from "./pages/courses/Bonds";
import ETFs from "./pages/courses/ETFs";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Refunds from "./pages/legal/Refunds";
import Cookies from "./pages/legal/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Asset Class Courses */}
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/options" element={<Options />} />
          <Route path="/futures" element={<Futures />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/etfs" element={<ETFs />} />
          {/* Legal */}
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/refunds" element={<Refunds />} />
          <Route path="/legal/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
