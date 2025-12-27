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
import Lesson from "./pages/Lesson";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Upgrade from "./pages/Upgrade";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Courses from "./pages/Courses";
import Progress from "./pages/Progress";
import Help from "./pages/Help";
import Leaderboard from "./pages/Leaderboard";
import Certificates from "./pages/Certificates";
import Achievements from "./pages/Achievements";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Glossary from "./pages/Glossary";
import ProfitCalculator from "./pages/tools/ProfitCalculator";
import PositionSizeCalculator from "./pages/tools/PositionSizeCalculator";
import RiskRewardCalculator from "./pages/tools/RiskRewardCalculator";
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/checkout/:plan" element={<Checkout />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/help" element={<Help />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/lessons/:id" element={<Lesson />} />
          <Route path="/glossary" element={<Glossary />} />
          {/* Trading Tools */}
          <Route path="/tools/profit" element={<ProfitCalculator />} />
          <Route path="/tools/position-size" element={<PositionSizeCalculator />} />
          <Route path="/tools/risk-reward" element={<RiskRewardCalculator />} />
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
          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
