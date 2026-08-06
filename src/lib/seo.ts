import { SITE } from './constants';

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}

export function getSEO({ title, description, path = '', noindex = false }: SEOProps) {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.title;
  const pageDescription = description ?? SITE.description;
  const canonical = new URL(path, SITE.url).href;

  return {
    title: pageTitle,
    description: pageDescription,
    canonical,
    noindex,
    og: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      type: 'website',
      siteName: SITE.name,
    },
  };
}
