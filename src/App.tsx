import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ComponentType, lazy, Suspense, useEffect } from "react";

const queryClient = new QueryClient();

type RouteComponents = {
  home: ComponentType;
  education: ComponentType;
  projects: ComponentType;
  work: ComponentType;
  extraCurricular: ComponentType;
  contact: ComponentType;
  notFound: ComponentType;
};

const clientRouteComponents: RouteComponents = {
  home: lazy(() => import("./pages/Index")),
  education: lazy(() => import("./pages/Education")),
  projects: lazy(() => import("./pages/Projects")),
  work: lazy(() => import("./pages/Work")),
  extraCurricular: lazy(() => import("./pages/ExtraCurricular")),
  contact: lazy(() => import("./pages/Contact")),
  notFound: lazy(() => import("./pages/NotFound"))
};

export const siteUrl = 'https://dev-kansara.web.app';
export const socialImage = `${siteUrl}/icon.png`;

export const pageMetadata: Record<string, { title: string; description: string; schemaType: string }> = {
  '/': {
    title: 'Dev Kansara | Computer Science Student & Software Developer',
    description: 'Portfolio of Dev Kansara, a Computer Science Engineering student and software developer focused on distributed systems, AI, algorithms, and web development.',
    schemaType: 'ProfilePage'
  },
  '/education': {
    title: 'Education & Certifications | Dev Kansara',
    description: 'Explore Dev Kansara\'s Computer Science education, academic achievements, certifications, and continuous learning journey.',
    schemaType: 'WebPage'
  },
  '/projects': {
    title: 'Projects | Distributed Systems, AI & Software Development | Dev Kansara',
    description: 'Explore Dev Kansara\'s projects in distributed systems, blockchain, artificial intelligence, machine learning, web development, and computer architecture.',
    schemaType: 'CollectionPage'
  },
  '/work': {
    title: 'Work Experience | Software Development & Teaching | Dev Kansara',
    description: 'View Dev Kansara\'s software development internships, teaching assistant roles, and technical experience at Ahmedabad University.',
    schemaType: 'WebPage'
  },
  '/extra-curricular': {
    title: 'Leadership, Sports & Community Service | Dev Kansara',
    description: 'Learn about Dev Kansara\'s leadership, volleyball achievements, student mentorship, and community service experience.',
    schemaType: 'WebPage'
  },
  '/contact': {
    title: 'Contact Dev Kansara | Software Developer',
    description: 'Get in touch with Dev Kansara about software development opportunities, technical collaborations, and projects.',
    schemaType: 'ContactPage'
  }
};

const getMetadata = (pathname: string) => pageMetadata[pathname] ?? {
  title: 'Page Not Found | Dev Kansara',
  description: 'The requested page could not be found on Dev Kansara\'s portfolio.',
  schemaType: 'WebPage'
};

const getStructuredData = (pathname: string) => {
  const metadata = getMetadata(pathname);
  const pageUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;
  const page = {
    '@type': metadata.schemaType,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: metadata.title,
    description: metadata.description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#person` }
  };

  if (pathname === '/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        page,
        {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Dev Kansara',
          url: siteUrl,
          image: socialImage,
          jobTitle: 'Computer Science Student and Software Developer',
          affiliation: {
            '@type': 'CollegeOrUniversity',
            name: 'Ahmedabad University'
          },
          sameAs: [
            'https://github.com/DevKansara97',
            'https://www.linkedin.com/in/devkansara97/'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          url: siteUrl,
          name: 'Dev Kansara Portfolio',
          publisher: { '@id': `${siteUrl}/#person` }
        }
      ]
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [page, {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: metadata.title.split(' | ')[0], item: pageUrl }
      ]
    }]
  };
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
  const isKnownRoute = pathname in pageMetadata;

  useEffect(() => {
    const metadata = getMetadata(pathname);
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;

    document.title = metadata.title;
    setMetaTag('name', 'description', metadata.description);
    setMetaTag('property', 'og:title', metadata.title);
    setMetaTag('property', 'og:description', metadata.description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Dev Kansara Portfolio');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', socialImage);
    setMetaTag('property', 'og:image:alt', 'Dev Kansara portfolio');
    setMetaTag('name', 'robots', isKnownRoute ? 'index, follow' : 'noindex, nofollow');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', metadata.title);
    setMetaTag('name', 'twitter:description', metadata.description);
    setMetaTag('name', 'twitter:image', socialImage);
    setMetaTag('name', 'twitter:image:alt', 'Dev Kansara portfolio');

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
  }, [isKnownRoute, pathname]);

  return null;
};

export const StructuredData = () => {
  const { pathname } = useLocation();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData(pathname)) }}
    />
  );
};

// Helper component to reset scroll position on every page navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const AppRoutes = ({ components = clientRouteComponents }: { components?: RouteComponents } = {}) => {
  const HomePage = components.home;
  const EducationPage = components.education;
  const ProjectsPage = components.projects;
  const WorkPage = components.work;
  const ExtraCurricularPage = components.extraCurricular;
  const ContactPage = components.contact;
  const NotFoundPage = components.notFound;

  return (
  <>
    <ScrollToTop />
    <SeoMetadata />
    <StructuredData />
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/extra-curricular" element={<ExtraCurricularPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;