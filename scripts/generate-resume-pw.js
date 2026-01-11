const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const filePath = 'file://' + path.resolve(__dirname, '../public/resume.html');
    await page.goto(filePath, { waitUntil: 'networkidle' });
    const out = path.resolve(__dirname, '../public/resume_playwright.pdf');
    await page.pdf({ path: out, format: 'A4', printBackground: true });
    await browser.close();
    console.log('Generated', out);
  } catch (err) {
    console.error('PDF generation failed:', err.message || err);
    process.exitCode = 1;
  }
})();
