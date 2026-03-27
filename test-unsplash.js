
const urls = [
  "https://images.unsplash.com/photo-1502680390469-be75c70e094f", // Hossegor
  "https://images.unsplash.com/photo-1533596200216-3e4b78759d3d", // Capbreton
  "https://images.unsplash.com/photo-1563725055459-ac228dc2c448", // Dax
];

async function checkUrls() {
  for (const url of urls) {
    try {
      const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
      console.log(`${url}: ${response.status} ${response.statusText} (Final URL: ${response.url})`);
    } catch (error) {
      console.error(`${url}: Error - ${error.message}`);
    }
  }
}

checkUrls();
