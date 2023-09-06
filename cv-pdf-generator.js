// todo: convert this to typescript, the problem is that ts-node
// complains a lot!

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(process.cwd());
const nextOutDir = path.join(rootDir, 'out');

async function main() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const tab = await browser.newPage();
  const cvHtml = fs.readFileSync(path.join(nextOutDir, 'cv.html'), {
    encoding: 'utf-8',
  });

  await tab.setContent(cvHtml);
  await tab.pdf({
    path: path.join(nextOutDir, 'cv.pdf'),
    format: 'Letter',
    margin: { top: '0.5cm', bottom: '0.5cm' },
  });

  await browser.close();
}

main();
