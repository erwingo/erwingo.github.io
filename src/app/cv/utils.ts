import { readFile } from 'fs/promises';
import path from 'path';

const rootDir = path.join(process.cwd());
const publicDir = path.join(rootDir, 'public');
const srcDir = path.join(rootDir, 'src');

export async function getResetStyles() {
  return readFile(path.join(srcDir, 'app/cv/reset.css'), 'utf-8');
}

export async function getStyles() {
  return readFile(path.join(srcDir, 'app/cv/styles.css'), 'utf-8');
}

export async function toBase64(publicPath: string, type: string) {
  const file = await readFile(path.join(publicDir, publicPath));
  return `${type};base64, ${Buffer.from(file).toString('base64')}`;
}
