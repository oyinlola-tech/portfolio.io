import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const pairs = [
  ['src/llms.txt', 'public/llms.txt'],
  ['src/llms-full.txt', 'public/llms-full.txt'],
];

await mkdir(path.join(root, 'public'), { recursive: true });

for (const [srcRel, outRel] of pairs) {
  const src = path.join(root, srcRel);
  const out = path.join(root, outRel);
  await copyFile(src, out);
}

console.log('Synced llms files to public root.');
