import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const thresholdArg = args.find((arg) => arg.startsWith("--threshold="));
const threshold = thresholdArg ? Number(thresholdArg.split("=")[1]) : 95;

if (Number.isNaN(threshold) || threshold < 0 || threshold > 100) {
  console.error("Invalid threshold. Use --threshold=<0-100>");
  process.exit(1);
}

const projectRoot = path.resolve(__dirname, "..");
const refRoot = path.resolve(projectRoot, "..", "section-by-section");
const appRefRoot = path.resolve(projectRoot, "public", "reference");
const artifactsRoot = path.resolve(projectRoot, "artifacts");

if (!fs.existsSync(artifactsRoot)) {
  fs.mkdirSync(artifactsRoot, { recursive: true });
}

const pairs = [
  {
    name: "hero",
    reference: path.join(refRoot, "hero section.png"),
    actual: path.join(appRefRoot, "hero-section.png"),
  },
  {
    name: "section-2",
    reference: path.join(refRoot, "2nd section.png"),
    actual: path.join(appRefRoot, "section-2.png"),
  },
  {
    name: "section-3",
    reference: path.join(refRoot, "3rd section.png"),
    actual: path.join(appRefRoot, "section-3.png"),
  },
  {
    name: "section-4",
    reference: path.join(refRoot, "4th section.png"),
    actual: path.join(appRefRoot, "section-4.png"),
  },
  {
    name: "section-5",
    reference: path.join(refRoot, "last section.png"),
    actual: path.join(appRefRoot, "section-5.png"),
  },
];

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

const results = [];

for (const pair of pairs) {
  if (!fs.existsSync(pair.reference)) {
    console.error(`Missing reference file: ${pair.reference}`);
    process.exit(1);
  }

  if (!fs.existsSync(pair.actual)) {
    console.error(`Missing actual file: ${pair.actual}`);
    process.exit(1);
  }

  const ref = PNG.sync.read(fs.readFileSync(pair.reference));
  const actual = PNG.sync.read(fs.readFileSync(pair.actual));

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

  const diffPath = path.join(artifactsRoot, `parity-${pair.name}-diff.png`);
  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  const totalPixels = width * height;
  const mismatchPct = (diffPixels / totalPixels) * 100;
  const parityPct = 100 - mismatchPct;

  results.push({
    section: pair.name,
    comparedWidth: width,
    comparedHeight: height,
    mismatchPct: Number(mismatchPct.toFixed(4)),
    parityPct: Number(parityPct.toFixed(4)),
    pass: parityPct >= threshold,
    diffPath,
  });
}

const summary = {
  threshold,
  generatedAt: new Date().toISOString(),
  allPass: results.every((item) => item.pass),
  minParityPct: Number(Math.min(...results.map((item) => item.parityPct)).toFixed(4)),
  results,
};

const reportPath = path.join(artifactsRoot, "parity-report.json");
fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));

console.log(JSON.stringify(summary, null, 2));

if (!summary.allPass) {
  console.error(`Parity check failed: at least one section is below ${threshold}%`);
  process.exit(1);
}
