import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hitesh-padhara.vercel.app',
      lastModified: new Date(),
    },
    ]
}