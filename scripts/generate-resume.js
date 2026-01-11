const fs = require('fs');
const PDFDocument = require('pdfkit');

const md = fs.readFileSync('resume.md', 'utf8');

const doc = new PDFDocument({ size: 'A4', margin: 50 });
doc.pipe(fs.createWriteStream('public/resume.pdf'));

doc.font('Helvetica-Bold').fontSize(20).text('Ashspire — Resume', { align: 'left' });
doc.moveDown(0.5);

doc.font('Helvetica').fontSize(10);
md.split('\n\n').forEach(par => {
  const txt = par.replace(/\n/g, ' ');
  doc.text(txt, { lineGap: 4 });
  doc.moveDown(0.5);
});

doc.end();
console.log('public/resume.pdf generated');
