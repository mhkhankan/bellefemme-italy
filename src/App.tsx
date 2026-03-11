import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import AboutMouna from "./pages/AboutMouna";
import CoursePMU from "./pages/CoursePMU";
import CourseMicroblading from "./pages/CourseMicroblading";
import CourseMasterclass from "./pages/CourseMasterclass";
import CourseOmbrePowder from "./pages/CourseOmbrePowder";
import CourseOmbreLips from "./pages/CourseOmbreLips";
import CourseEyeliner from "./pages/CourseEyeliner";
import CourseMasterclassBrows from "./pages/CourseMasterclassBrows";
import CourseMasterclassLashes from "./pages/CourseMasterclassLashes";
import CourseMasterclassLamination from "./pages/CourseMasterclassLamination";
import TreatmentsPage from "./pages/TreatmentsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-mouna" element={<AboutMouna />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/course/pmu" element={<CoursePMU />} />
            <Route path="/course/microblading" element={<CourseMicroblading />} />
            <Route path="/course/masterclass" element={<CourseMasterclass />} />
            <Route path="/course/ombre-powder" element={<CourseOmbrePowder />} />
            <Route path="/course/ombre-lips" element={<CourseOmbreLips />} />
            <Route path="/course/eyeliner" element={<CourseEyeliner />} />
            <Route path="/course/masterclass-brows" element={<CourseMasterclassBrows />} />
            <Route path="/course/masterclass-lashes" element={<CourseMasterclassLashes />} />
            <Route path="/course/masterclass-lamination" element={<CourseMasterclassLamination />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
