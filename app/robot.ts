import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ["/"],
      disallow: [],
    },
    sitemap: 'https://hitesh-padhara.vercel.app/sitemap.xml',
  }
}