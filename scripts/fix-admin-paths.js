const fs = require('fs');
const path = require('path');

// Fix paths in admin/index.html for GitHub Pages deployment
const adminIndexPath = path.join(__dirname, '..', 'out', 'admin', 'index.html');

if (fs.existsSync(adminIndexPath)) {
  let content = fs.readFileSync(adminIndexPath, 'utf8');
  
  // Replace incorrect paths with correct GitHub Pages paths
  content = content.replace(/src="\/\/my-docs/g, 'src="/my-docs');
  content = content.replace(/href="\/\/my-docs/g, 'href="/my-docs');
  content = content.replace(/src="\/admin/g, 'src="/my-docs/admin');
  content = content.replace(/href="\/admin/g, 'href="/my-docs/admin');
  
  fs.writeFileSync(adminIndexPath, content);
  console.log('✅ Fixed admin paths for GitHub Pages deployment');
} else {
  console.log('⚠️  admin/index.html not found in out directory');
}