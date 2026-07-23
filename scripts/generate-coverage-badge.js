import fs from 'fs';
import path from 'path';

const summaryPath = path.resolve('coverage/coverage-summary.json');

if (!fs.existsSync(summaryPath)) {
  console.error('coverage-summary.json not found! Run jest tests first.');
  process.exit(1);
}

const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
const totalLines = summary.total.lines;
const pct = Number(totalLines.pct.toFixed(1));

let color = 'brightgreen';
let hexColor = '%234c1';
if (pct < 60) {
  color = 'red';
  hexColor = '%23e05d44';
} else if (pct < 80) {
  color = 'yellow';
  hexColor = '%23dfb317';
} else if (pct < 90) {
  color = 'green';
  hexColor = '%2397ca00';
}

const endpointJson = {
  schemaVersion: 1,
  label: 'coverage',
  message: `${pct}%`,
  color: color,
};

const svgBadge = `<svg xmlns="http://www.w3.org/2000/svg" width="114" height="20">
  <linearGradient id="b" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <mask id="a">
    <rect width="114" height="20" rx="3" fill="#fff"/>
  </mask>
  <g mask="url(#a)">
    <path fill="#555" d="0 0h63v20H0z"/>
    <path fill="${hexColor}" d="M63 0h51v20H63z"/>
    <path fill="url(#b)" d="M0 0h114v20H0z"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="31.5" y="15" fill="#010101" fill-opacity=".3">coverage</text>
    <text x="31.5" y="14">coverage</text>
    <text x="87.5" y="15" fill="#010101" fill-opacity=".3">${pct}%</text>
    <text x="87.5" y="14">${pct}%</text>
  </g>
</svg>`;

const outputDir = path.resolve('coverage/lcov-report');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'badge.json'), JSON.stringify(endpointJson, null, 2));
fs.writeFileSync(path.join(outputDir, 'badge.svg'), svgBadge);

console.log(`Generated dynamic coverage badge (${pct}%) at ${path.join(outputDir, 'badge.json')}`);
