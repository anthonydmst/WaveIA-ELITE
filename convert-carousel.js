const fs = require('fs');
const html = fs.readFileSync('/Users/damestoyanthony/Downloads/waveia_platform_carousel.html', 'utf8');

// Extract styles
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  let css = styleMatch[1].trim();
  fs.writeFileSync('/Users/damestoyanthony/Documents/WaveIA-ELITE/src/components/sections/PlatformCarouselBlock.css', css);
}

// Extract body between <h2 class="sr-only"> and <script>
let body = html.substring(html.indexOf('<h2 class="sr-only">'), html.indexOf('<script>'));

// Basic React conversions
body = body.replace(/class=/g, 'className=');

// Fix unclosed tags for React if any: <br>, <img>, <input>
body = body.replace(/<br>/g, '<br/>');

// Convert styles to objects
body = body.replace(/style="([^"]+)"/g, (match, styleString) => {
  const styles = {};
  styleString.split(';').forEach(rule => {
    if (!rule.trim()) return;
    const parts = rule.split(':');
    const prop = parts[0].trim();
    const value = parts.slice(1).join(':').trim();
    const camelProp = prop.replace(/-([a-z])/g, g => g[1].toUpperCase());
    styles[camelProp] = value;
  });
  return `style={${JSON.stringify(styles)}}`;
});

// Replace onclick
body = body.replace(/onclick="sendPrompt\('([^']+)'\)"/g, "onClick={() => console.log('Prompt: $1')}");
body = body.replace(/onclick="goTo\(([^)]+)\)"/g, "onClick={() => goTo($1)}");
body = body.replace(/onclick="shift\(([^)]+)\)"/g, "onClick={() => shift($1)}");

// We need to inject React state handlers into the DOM for active classes and disabled states
// The original script did: 
// dots.forEach(...) toggle active
// prev/next opacity toggle
body = body.replace(/className="wv-dot active"/, 'className={`wv-dot ${cur === 0 ? "active" : ""}`}');
body = body.replace(/className="wv-dot"/g, (match, offset, str) => {
  // Let's manually replace the 4 dots
  return match; // We will handle it by a series of replaces
});
let dotCount = 0;
body = body.replace(/className="wv-dot( active)?"/g, (match) => {
  const count = dotCount++;
  return `className={\`wv-dot \${cur === ${count} ? "active" : ""}\`}`;
});

body = body.replace(/id="wvPrev"[^>]+>/, 'id="wvPrev" onClick={() => shift(-1)} aria-label="Précédent" style={{ opacity: cur === 0 ? 0.35 : 1 }}>');
body = body.replace(/id="wvNext"[^>]+>/, 'id="wvNext" onClick={() => shift(1)} aria-label="Suivant" style={{ opacity: cur === total - 1 ? 0.35 : 1 }}>');
body = body.replace(/id="wvTrack"/, 'id="wvTrack" ref={trackRef}');


const componentCode = `"use client";
import './PlatformCarouselBlock.css';
import { useState, useRef, useEffect, useCallback } from 'react';

export function PlatformCarouselBlock() {
  const total = 4;
  const [cur, setCur] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const render = useCallback(() => {
    if (!trackRef.current || !trackRef.current.parentElement) return;
    const outer = trackRef.current.parentElement.offsetWidth;
    const cardW = (outer - 3 * 14) / 4;
    const offset = cur * (cardW + 14);
    trackRef.current.style.transform = \`translateX(-\${offset}px)\`;
  }, [cur]);

  useEffect(() => {
    render();
    window.addEventListener('resize', render);
    return () => window.removeEventListener('resize', render);
  }, [render]);

  const goTo = (i: number) => {
    setCur(Math.max(0, Math.min(total - 1, i)));
  };

  const shift = (d: number) => {
    goTo(cur + d);
  };

  return (
    <>
      ${body}
    </>
  );
}
`;

fs.writeFileSync('/Users/damestoyanthony/Documents/WaveIA-ELITE/src/components/sections/PlatformCarouselBlock.tsx', componentCode);
console.log('Done convert-carousel!');
