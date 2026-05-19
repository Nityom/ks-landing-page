const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];

// Color mapping (case-insensitive replacements using regex)
const mappings = [
  // Background -> #E9EFE6
  { regex: /#5FBBB5/gi, replacement: '#E9EFE6' },
  { regex: /#E6F7F6/gi, replacement: '#E9EFE6' },
  { regex: /#CBEBE8/gi, replacement: '#E9EFE6' },
  { regex: /#def2f1/gi, replacement: '#E9EFE6' },
  
  // Dark Green -> #31473A
  { regex: /#16423B/gi, replacement: '#31473A' },
  { regex: /#329893/gi, replacement: '#31473A' },
  
  // Button / Primary Accents -> #2F5D50
  { regex: /#56AFA9/gi, replacement: '#2F5D50' },
  { regex: /#30807B/gi, replacement: '#2F5D50' },
  { regex: /#55A9A3/gi, replacement: '#2F5D50' },
  { regex: /#168F84/gi, replacement: '#2F5D50' },
  { regex: /#77D1CB/gi, replacement: '#2F5D50' },
  
  // Text Dark -> #1E1E1E
  { regex: /#17252a/gi, replacement: '#1E1E1E' },
  { regex: /#2E2E2E/gi, replacement: '#1E1E1E' },
  
  // Extra light teal accents -> Accent Beige (#CBB89D)
  { regex: /#7DCEA0/gi, replacement: '#CBB89D' },
  { regex: /#A6D6D3/gi, replacement: '#CBB89D' },
  { regex: /#85C1B6/gi, replacement: '#CBB89D' },
];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const map of mappings) {
        if (map.regex.test(content)) {
          content = content.replace(map.regex, map.replacement);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
console.log("Done updating theme colors.");
