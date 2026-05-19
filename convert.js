const fs = require('fs');
const { JSDOM } = require('jsdom');

['about', 'compostable', 'contact'].forEach(page => {
  const dom = new JSDOM(fs.readFileSync(page + '.html'));
  const body = dom.window.document.body;
  
  // Remove Header, Footer, Scripts, hidden divs, and the mobile menu (which has a specific fixed class)
  Array.from(body.querySelectorAll('header, footer, script, div[hidden]')).forEach(el => el.remove());
  Array.from(body.querySelectorAll('div.fixed.inset-0.z-50')).forEach(el => el.remove());

  // Also remove the Next.js hydration scripts
  Array.from(body.querySelectorAll('next-route-announcer')).forEach(el => el.remove());

  let html = body.innerHTML;

  // Basic JSX cleanup
  html = html.replace(/class=/g, 'className=');
  html = html.replace(/<img([^>]+)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<img${p1} />`;
  });
  html = html.replace(/<br>/g, '<br />');
  html = html.replace(/<hr>/g, '<hr />');
  html = html.replace(/<input([^>]+)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<input${p1} />`;
  });
  html = html.replace(/<textarea([^>]+)><\/textarea>/g, '<textarea$1 />');
  
  // Clean Next.js specific injected classes if any, e.g., jsx-82ecdb6c95ff530d
  html = html.replace(/jsx-[a-z0-9]+\s?/g, '');
  
  // Wrap in a React component
  const tsx = `import Image from 'next/image';\nimport Link from 'next/link';\n\nexport default function ${page.charAt(0).toUpperCase() + page.slice(1)}() {\n  return (\n    <div className="pt-20">\n      ${html}\n    </div>\n  );\n}\n`;
  
  fs.mkdirSync('app/' + page, { recursive: true });
  fs.writeFileSync('app/' + page + '/page.tsx', tsx);
  console.log('Created app/' + page + '/page.tsx');
});
