import { ImageResponse } from "next/og";



export const alt = "WaveIA - Agence Web & SEO Pays Basque";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Font loading (using fetch for edge compatibility)
  const outfitBold = await fetch(
    new URL("https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC0C4G-6rLv.woff")
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #0a0a0f, #1e1e28)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Outfit",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Effects */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(14, 165, 233, 0.15)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            right: "-200px",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "rgba(14, 165, 233, 0.1)",
            filter: "blur(120px)",
          }}
        />

        {/* Brand Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "40px",
            padding: "60px 100px",
            boxShadow: "0 0 60px rgba(14, 165, 233, 0.15)",
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              display: "flex",
              width: "120px",
              height: "120px",
              background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
              borderRadius: "30px",
              marginBottom: "40px",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 40px rgba(14, 165, 233, 0.4)",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
            >
              <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
          </div>

          <div
            style={{
              fontSize: "80px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
              marginBottom: "10px",
              textShadow: "0 0 40px rgba(255,255,255,0.2)",
            }}
          >
            WaveIA
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#94a3b8",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Agence Web Premium
          </div>
        </div>

        {/* Footer/Tagline */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          Biarritz • Bayonne • Anglet
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Outfit",
          data: outfitBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
