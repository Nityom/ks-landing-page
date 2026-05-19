const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Hero Headings / General Headings -> Montserrat 700
      content = content.replace(/font-outfit/g, 'font-montserrat');
      content = content.replace(/font-aboreto/g, 'font-montserrat');
      
      // Buttons -> Montserrat 600
      // We will look for "btn" or "button" classes and ensure they have font-montserrat
      content = content.replace(/font-poppins/g, 'font-montserrat');
      
      // Body Text / General -> Inter
      content = content.replace(/font-dm-sans/g, 'font-inter');
      content = content.replace(/font-sans/g, 'font-inter');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated fonts in: ${fullPath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
console.log("Done updating font classes.");
