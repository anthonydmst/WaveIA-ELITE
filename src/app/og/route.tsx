import { ImageResponse } from 'next/og'



export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Waveia | Agence Web Premium'
  const description = searchParams.get('description') || 'Agence web innovante du Pays Basque. Création de sites internet, SEO et communication digitale.'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #000000, #0ea5e9)',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          {/* Logo Placeholder */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: '#fff', marginRight: '16px' }}
          >
            <path d="M2 22h20" />
            <path d="M22 2 2 22" />
            <path d="M12 6 2 16" />
            <path d="M12 6l10 10" />
          </svg>
          <div style={{ fontSize: 48, fontWeight: 800 }}>Waveia</div>
        </div>
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              background: 'linear-gradient(to right, #fff, #38bdf8)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          
          <div
            style={{
              fontSize: 32,
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 400,
            }}
          >
            {description.length > 100 ? description.slice(0, 100) + '...' : description}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
