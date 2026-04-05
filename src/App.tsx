import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import LaFirma from "./pages/LaFirma";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import CoursePMU from "./pages/CoursePMU";
import CourseMicroblading from "./pages/CourseMicroblading";
import CourseOmbrePowder from "./pages/CourseOmbrePowder";
import CourseOmbreLips from "./pages/CourseOmbreLips";
import CourseEyeliner from "./pages/CourseEyeliner";
import CourseMasterclassBrows from "./pages/CourseMasterclassBrows";
import CourseMasterclassLashes from "./pages/CourseMasterclassLashes";
import CourseMasterclassLamination from "./pages/CourseMasterclassLamination";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/la-firma" element={<LaFirma />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/corso-pmu-completo" element={<CoursePMU />} />
          <Route path="/corso-microblading" element={<CourseMicroblading />} />
          <Route path="/corso-correzione-pmu" element={<CourseOmbrePowder />} />
          <Route path="/corso-ombre-lips" element={<CourseOmbreLips />} />
          <Route path="/corso-eyeliner-permanente" element={<CourseEyeliner />} />
          <Route path="/masterclass-architettura-sopracciglia" element={<CourseMasterclassBrows />} />
          <Route path="/masterclass-extension-ciglia" element={<CourseMasterclassLashes />} />
          <Route path="/masterclass-laminazione-ciglia" element={<CourseMasterclassLamination />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;