import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WaveIA - Agence Web & SEO Pays Basque',
    short_name: 'WaveIA',
    description: 'Agence Web et SEO au Pays Basque. Création de sites internet, référencement Google et communication digitale à Bayonne, Biarritz, Anglet.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
