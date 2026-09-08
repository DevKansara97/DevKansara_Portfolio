import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import ExtraCurricular from "./pages/ExtraCurricular";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const siteUrl = 'https://dev-kansara.web.app';
const socialImage = `${siteUrl}/icon.png`;

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Dev Kansara | Computer Science Student & Software Developer',
    description: 'Portfolio of Dev Kansara, a Computer Science Engineering student and software developer focused on distributed systems, AI, algorithms, and web development.'
  },
  '/education': {
    title: 'Education & Certifications | Dev Kansara',
    description: 'Explore Dev Kansara\'s Computer Science education, academic achievements, certifications, and continuous learning journey.'
  },
  '/projects': {
    title: 'Projects | Distributed Systems, AI & Software Development | Dev Kansara',
    description: 'Explore Dev Kansara\'s projects in distributed systems, blockchain, artificial intelligence, machine learning, web development, and computer architecture.'
  },
  '/work': {
    title: 'Work Experience | Software Development & Teaching | Dev Kansara',
    description: 'View Dev Kansara\'s software development internships, teaching assistant roles, and technical experience at Ahmedabad University.'
  },
  '/extra-curricular': {
    title: 'Leadership, Sports & Community Service | Dev Kansara',
    description: 'Learn about Dev Kansara\'s leadership, volleyball achievements, student mentorship, and community service experience.'
  },
  '/contact': {
    title: 'Contact Dev Kansara | Software Developer',
    description: 'Get in touch with Dev Kansara about software development opportunities, technical collaborations, and projects.'
  }
};

const setMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const SeoMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? {
      title: 'Page Not Found | Dev Kansara',
      description: 'The requested page could not be found on Dev Kansara\'s portfolio.'
    };
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;

    document.title = metadata.title;
    setMetaTag('name', 'description', metadata.description);
    setMetaTag('property', 'og:title', metadata.title);
    setMetaTag('property', 'og:description', metadata.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', socialImage);
    setMetaTag('name', 'twitter:title', metadata.title);
    setMetaTag('name', 'twitter:description', metadata.description);
    setMetaTag('name', 'twitter:image', socialImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    return () => {
      canonical?.remove();
    };
  }, [pathname]);

  return null;
};

// Helper component to reset scroll position on every page navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ScrollToTop must be inside BrowserRouter but outside Routes */}
        <ScrollToTop />
        <SeoMetadata />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/extra-curricular" element={<ExtraCurricular />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;