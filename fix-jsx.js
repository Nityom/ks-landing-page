const fs = require('fs');

function cssToObject(cssString) {
    if (!cssString) return "{}";
    const rules = cssString.split(';').filter(rule => rule.trim() !== '');
    const obj = {};
    rules.forEach(rule => {
        const parts = rule.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            const value = parts.slice(1).join(':').trim();
            obj[key] = value;
        }
    });
    return JSON.stringify(obj);
}

['about', 'compostable', 'contact'].forEach(page => {
    let content = fs.readFileSync('app/' + page + '/page.tsx', 'utf8');
    
    // Fix comments
    content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    
    // Fix SVG Attributes
    content = content.replace(/stroke-width/g, 'strokeWidth');
    content = content.replace(/stroke-linecap/g, 'strokeLinecap');
    content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
    content = content.replace(/fill-rule/g, 'fillRule');
    content = content.replace(/clip-rule/g, 'clipRule');
    content = content.replace(/stroke-miterlimit/g, 'strokeMiterlimit');
    
    // Fix inline styles
    content = content.replace(/style="([^"]*)"/g, (match, cssStr) => {
        return `style={${cssToObject(cssStr)}}`;
    });

    // Fix raw unescaped text like `<` or `{` inside text nodes
    // Wait, let's see if there are any. There shouldn't be much unless it's in text.
    
    fs.writeFileSync('app/' + page + '/page.tsx', content);
    console.log('Fixed ' + page);
});
