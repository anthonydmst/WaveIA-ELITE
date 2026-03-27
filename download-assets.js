
const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { url: "https://images.unsplash.com/photo-1502680390469-be75c70e094f?auto=format&fit=crop&w=1200&q=80", path: "public/images/cities/hossegor.jpg" },
  { url: "https://images.unsplash.com/photo-1533596200216-3e4b78759d3d?auto=format&fit=crop&w=1200&q=80", path: "public/images/cities/capbreton.jpg" },
  { url: "https://images.unsplash.com/photo-1563725055459-ac228dc2c448?auto=format&fit=crop&w=1200&q=80", path: "public/images/cities/dax.jpg" },
  { url: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=1200&q=80", path: "public/images/cities/saint-jean-de-luz.jpg" },
  { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", path: "public/images/cities/hendaye.jpg" },
  { url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80", path: "public/images/cities/guethary.jpg" },
  { url: "https://images.unsplash.com/photo-1580974558569-455b8e9992f8?auto=format&fit=crop&w=1200&q=80", path: "public/images/cities/cambo-les-bains.jpg" },
  { url: "https://images.unsplash.com/photo-1621327178330-81f147a46c3b?auto=format&fit=crop&w=1200&q=80", path: "public/images/cities/espelette.jpg" },
  { url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80", path: "public/images/blog/seo-local-basque.jpg" }
];

function downloadFile(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  const file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(() => console.log(`Downloaded: ${dest}`));
      });
    } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle basic redirect
        if (response.headers.location) {
             downloadFile(response.headers.location, dest); 
        } else {
             console.error(`Redirect without location for ${url}`);
        }
    } else {
       console.error(`Failed to download ${url}: Status ${response.statusCode}`);
       file.close();
       fs.unlink(dest, () => {}); // Delete failed file
    }
  }).on('error', function(err) { 
    fs.unlink(dest, () => {}); 
    console.error(`Error downloading ${url}: ${err.message}`);
  });
}

images.forEach(img => downloadFile(img.url, img.path));
