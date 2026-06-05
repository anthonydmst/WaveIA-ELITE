const fs = require('fs');
const html = fs.readFileSync('/Users/damestoyanthony/Downloads/waveia_addons_block.html', 'utf8');

// Extract styles
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  fs.writeFileSync('/Users/damestoyanthony/Documents/WaveIA-ELITE/src/components/sections/AddonsBlock.css', styleMatch[1].trim());
}

// Extract body
let body = html.substring(html.indexOf('<h2 class="sr-only">'));

// Basic React conversions
body = body.replace(/class=/g, 'className=');

// Convert styles to objects
body = body.replace(/style="([^"]+)"/g, (match, styleString) => {
  const styles = {};
  styleString.split(';').forEach(rule => {
    if (!rule.trim()) return;
    const [prop, ...valParts] = rule.split(':');
    const value = valParts.join(':').trim();
    const camelProp = prop.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    styles[camelProp] = value;
  });
  return `style={${JSON.stringify(styles)}}`;
});

// Convert onclick
body = body.replace(/onclick="sendPrompt\('([^']+)'\)"/g, "onClick={() => console.log('Prompt: $1')}");

const componentCode = `"use client";
import './AddonsBlock.css';

export function AddonsBlock() {
  return (
    <>
      ${body}
    </>
  );
}
`;

fs.writeFileSync('/Users/damestoyanthony/Documents/WaveIA-ELITE/src/components/sections/AddonsBlock.tsx', componentCode);
console.log('Done convert-addons!');
