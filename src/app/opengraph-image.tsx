import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";



export const alt = "WaveIA - Agence Web & SEO Pays Basque";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Font loading (using fs for Node runtime compatibility)
  const outfitBold = fs.readFileSync(
    path.join(process.cwd(), "src/app/outfit-bold.woff")
  );

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
            padding: "80px 120px",
            boxShadow: "0 0 60px rgba(14, 165, 233, 0.15)",
          }}
        >
          {/* Real Site Logo */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "24px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.6 2 5.2 2 2.5 0 2.5-2 5.2-2 1.3 0 1.9.5 2.5 1" />
                <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5.2 2 2.5 0 2.5-2 5.2-2 1.3 0 1.9.5 2.5 1" />
                <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5.2 2 2.5 0 2.5-2 5.2-2 1.3 0 1.9.5 2.5 1" />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "100px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-4px",
                textShadow: "0 0 40px rgba(255,255,255,0.2)",
              }}
            >
              <span>wave</span>
              <span style={{ color: "#0ea5e9" }}>IA</span>
            </div>
          </div>
          
          <div
            style={{
              fontSize: "36px",
              color: "#94a3b8",
              letterSpacing: "6px",
              textTransform: "uppercase",
              fontWeight: 600,
              marginTop: "10px",
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
