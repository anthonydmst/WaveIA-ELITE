const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set a large viewport just in case
  await page.setViewport({ width: 1920, height: 1080 });

  page.on('console', async msg => {
    if (msg.type() === 'error') {
      const args = await Promise.all(msg.args().map(a => a.jsonValue().catch(() => a.toString())));
      console.log('CONSOLE ERROR:', ...args);
    }
  });

  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });
    
    // Auto-scroll down the page to trigger IntersectionObservers
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 200;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
    
    // Wait a bit for animations/effects
    await new Promise(r => setTimeout(r, 2000));
  } catch (err) {
    console.log('GOTO ERROR:', err.message);
  }
  
  await browser.close();
})();
