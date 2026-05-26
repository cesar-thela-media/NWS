import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

function cropToSize(png, width, height) {
  if (png.width === width && png.height === height) {
    return png;
  }

  const out = new PNG({ width, height });

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const srcIdx = (png.width * y + x) << 2;
      const dstIdx = (width * y + x) << 2;
      out.data[dstIdx] = png.data[srcIdx];
      out.data[dstIdx + 1] = png.data[srcIdx + 1];
      out.data[dstIdx + 2] = png.data[srcIdx + 2];
      out.data[dstIdx + 3] = png.data[srcIdx + 3];
    }
  }

  return out;
}

const [refPathArg, actualPathArg, diffPathArg] = process.argv.slice(2);

if (!refPathArg || !actualPathArg) {
  console.error("Usage: bun scripts/visual-parity.mjs <reference.png> <actual.png> [diff.png]");
  process.exit(1);
}

const referencePath = path.resolve(refPathArg);
const actualPath = path.resolve(actualPathArg);
const diffPath = path.resolve(diffPathArg ?? "artifacts/parity-diff.png");

if (!fs.existsSync(referencePath)) {
  console.error(`Reference file not found: ${referencePath}`);
  process.exit(1);
}

if (!fs.existsSync(actualPath)) {
  console.error(`Actual screenshot not found: ${actualPath}`);
  process.exit(1);
}

const ref = PNG.sync.read(fs.readFileSync(referencePath));
const actual = PNG.sync.read(fs.readFileSync(actualPath));

const width = Math.min(ref.width, actual.width);
const height = Math.min(ref.height, actual.height);

const refCropped = cropToSize(ref, width, height);
const actualCropped = cropToSize(actual, width, height);

const diff = new PNG({ width, height });

const diffPixels = pixelmatch(
  refCropped.data,
  actualCropped.data,
  diff.data,
  width,
  height,
  {
    threshold: 0.08,
    includeAA: true,
  },
);

fs.writeFileSync(diffPath, PNG.sync.write(diff));

const totalPixels = width * height;
const mismatchPct = (diffPixels / totalPixels) * 100;
const parityPct = 100 - mismatchPct;

console.log(JSON.stringify({
  referencePath,
  actualPath,
  diffPath,
  comparedWidth: width,
  comparedHeight: height,
  diffPixels,
  totalPixels,
  mismatchPct: Number(mismatchPct.toFixed(4)),
  parityPct: Number(parityPct.toFixed(4)),
}, null, 2));
