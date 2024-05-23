import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const rootDir = path.join(process.cwd());
const nextOutDir = path.join(rootDir, 'out');

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const tab = await browser.newPage();
  const cvHtml = fs.readFileSync(path.join(nextOutDir, 'cv.html'), {
    encoding: 'utf-8',
  });

  await tab.setContent(cvHtml);
  await tab.pdf({
    tagged: false,
    path: path.join(nextOutDir, 'Erwin_Gaitan_CV.pdf'),
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.5cm', bottom: '0.5cm' },
  });

  console.log('PDF Generated!');
  await browser.close();
}

main();
