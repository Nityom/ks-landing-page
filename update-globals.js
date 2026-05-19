const fs = require('fs');

const globalsPath = 'app/globals.css';
let content = fs.readFileSync(globalsPath, 'utf8');

const fontCSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

@layer utilities {
  .font-inter {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
  .font-montserrat {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
}

`;

if (!content.includes('fonts.googleapis.com')) {
  fs.writeFileSync(globalsPath, fontCSS + content, 'utf8');
  console.log("Injected Google Fonts into globals.css");
} else {
  console.log("Google Fonts already injected.");
}
