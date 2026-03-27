import { MetadataRoute } from 'next'
import { SERVICES, CITIES } from '@/lib/data/services'
import { COMBO_WHITELIST } from '@/lib/data/whitelist'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://waveia.fr'
  const now = new Date()
  
  const routes: MetadataRoute.Sitemap = [
    // Core Pages (Priority 1.0)
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Hubs (Priority 0.9)
    {
      url: `${baseUrl}/creation-site-internet`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/referencement-seo`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/agence-communication`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Services Pages (Priority 0.7-0.8)
  const services = SERVICES.filter(s => !CITIES.find(c => c.slug === s.slug))
  services.forEach(service => {
    const rootPath = service.silo === 'local' ? '/creation-site-internet' :
                    service.silo === 'metier' ? '/solutions' :
                    service.silo === 'service' ? '/creation-site-internet' :
                    service.silo === 'web' ? '/creation-site-internet' :
                    service.silo === 'seo' ? '/referencement-seo' :
                    '/agence-communication'
    
    // Prevent duplicate slug (e.g. /solutions/solutions)
    if (rootPath === `/${service.slug}`) return

    routes.push({
      url: `${baseUrl}${rootPath}/${service.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: service.silo === 'local' ? 0.8 : 0.7,
    })
  })

  // Combo Pages - MUST mirror generateStaticParamsForCombo logic exactly
  // Group by silo to match how routes are generated
  const siloToRootPath: Record<string, string> = {
    web: '/creation-site-internet',
    local: '/creation-site-internet',
    service: '/creation-site-internet',
    seo: '/referencement-seo',
    agence: '/agence-communication',
    metier: '/solutions',
  }

  // Generate combos for each silo that uses WHITELIST_ONLY scope
  const silosWithWhitelist = ['web', 'seo', 'agence', 'metier', 'service'] as const
  
  for (const silo of silosWithWhitelist) {
    const rootPath = siloToRootPath[silo]
    const siloServices = SERVICES.filter(s => s.silo === silo && s.type !== 'hub')
    
    for (const service of siloServices) {
      // Skip if service slug matches a city (city landing pages)
      if (CITIES.find(c => c.slug === service.slug)) continue
      
      // Only add combos that are explicitly whitelisted
      const allowedCities = COMBO_WHITELIST[service.slug]
      if (!allowedCities) continue
      
      for (const citySlug of allowedCities) {
        // Verify city exists
        if (!CITIES.find(c => c.slug === citySlug)) continue
        
        routes.push({
          url: `${baseUrl}${rootPath}/${service.slug}/${citySlug}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.6,
        })
      }
    }
  }

  return routes
}
