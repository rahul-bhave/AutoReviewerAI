// scripts/md-to-html.js
const fs = require('fs');
const { marked } = require('marked');
const mdPath = './ai_digest.md';
const htmlPath = './ai_digest.html';

const markdown = fs.readFileSync(mdPath, 'utf-8');
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Digest</title>
  <style>
    body { font-family: -apple-system, sans-serif; padding: 20px; line-height: 1.6; }
    h2 { color: #2a2a2a; }
    a { color: #1a73e8; }
  </style>
</head>
<body>
${marked.parse(markdown)}
</body>
</html>
`;

fs.writeFileSync(htmlPath, html);
console.log('✅ ai_digest.html generated.');
