import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppRoutes, pageMetadata, siteUrl, socialImage } from './src/App';
import { QueryClient } from '@tanstack/react-query';

const routes = ['/', ...Object.keys(pageMetadata).filter((route) => route !== '/')];

export async function prerender({ url }: { url: string }) {
  const pathname = new URL(url, siteUrl).pathname;
  const metadata = pageMetadata[pathname] ?? pageMetadata['/'];
  const [Index, Education, Projects, Work, ExtraCurricular, Contact, NotFound] = await Promise.all([
    import('./src/pages/Index').then((module) => module.default),
    import('./src/pages/Education').then((module) => module.default),
    import('./src/pages/Projects').then((module) => module.default),
    import('./src/pages/Work').then((module) => module.default),
    import('./src/pages/ExtraCurricular').then((module) => module.default),
    import('./src/pages/Contact').then((module) => module.default),
    import('./src/pages/NotFound').then((module) => module.default)
  ]);
  const queryClient = new QueryClient();
  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={pathname}>
          <AppRoutes components={{
            home: Index,
            education: Education,
            projects: Projects,
            work: Work,
            extraCurricular: ExtraCurricular,
            contact: Contact,
            notFound: NotFound
          }} />
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  return {
    html,
    links: new Set(routes),
    head: {
      lang: 'en',
      title: metadata.title,
      elements: new Set([
        { type: 'meta', props: { name: 'description', content: metadata.description } },
        { type: 'meta', props: { property: 'og:type', content: 'website' } },
        { type: 'meta', props: { property: 'og:site_name', content: 'Dev Kansara Portfolio' } },
        { type: 'meta', props: { property: 'og:title', content: metadata.title } },
        { type: 'meta', props: { property: 'og:description', content: metadata.description } },
        { type: 'meta', props: { property: 'og:url', content: `${siteUrl}${pathname === '/' ? '' : pathname}` } },
        { type: 'meta', props: { property: 'og:image', content: socialImage } },
        { type: 'meta', props: { property: 'og:image:alt', content: 'Dev Kansara portfolio' } },
        { type: 'meta', props: { name: 'robots', content: 'index, follow' } },
        { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
        { type: 'meta', props: { name: 'twitter:title', content: metadata.title } },
        { type: 'meta', props: { name: 'twitter:description', content: metadata.description } },
        { type: 'meta', props: { name: 'twitter:image', content: socialImage } },
        { type: 'link', props: { rel: 'canonical', href: `${siteUrl}${pathname === '/' ? '' : pathname}` } }
      ])
    }
  };
}