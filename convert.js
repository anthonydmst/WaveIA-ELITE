const fs = require('fs');
const html = fs.readFileSync('/Users/damestoyanthony/Downloads/waveia_modules_grid.html', 'utf8');

// Extract body between <h2 class="sr-only"> and the end of file
let body = html.substring(html.indexOf('<h2 class="sr-only">'));

// Basic React conversions
body = body.replace(/class=/g, 'className=');

// Convert styles to objects
body = body.replace(/style="([^"]+)"/g, (match, styleString) => {
  const styles = {};
  styleString.split(';').forEach(rule => {
    if (!rule.trim()) return;
    const [prop, value] = rule.split(':').map(s => s.trim());
    const camelProp = prop.replace(/-([a-z])/g, g => g[1].toUpperCase());
    styles[camelProp] = value;
  });
  return `style={${JSON.stringify(styles)}}`;
});

const componentCode = `import './ModulesGridBlock.css';

export function ModulesGridBlock() {
  return (
    <>
      ${body}
    </>
  );
}
`;

fs.writeFileSync('/Users/damestoyanthony/Documents/WaveIA-ELITE/src/components/sections/ModulesGridBlock.tsx', componentCode);
console.log('Done!');
