
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = path.resolve("src/assets");
const outputDir = path.resolve("public/images");

await fs.mkdir(outputDir, { recursive: true });

const imageSettings = {
  "hero-source.jpg": {
    width: 600,
    height: 400,
  },
  "training-source.jpg": {
    width: 464,
    height: 309,
  },
};

for (const [file, settings] of Object.entries(imageSettings)) {
  const inputPath = path.join(inputDir, file);
  const outputName = `${path.parse(file).name}.webp`;
  const outputPath = path.join(outputDir, outputName);

  await sharp(inputPath)
    .rotate()
    .resize(settings.width, settings.height, {
      fit: "cover",
    })
    .webp({ quality: 80, effort: 5 })
    .toFile(outputPath);

  const inputStats = await fs.stat(inputPath);
  const outputStats = await fs.stat(outputPath);

  console.log(
    `${file}: ${inputStats.size} bytes -> ${outputName}: ${outputStats.size} bytes`
  );
}

console.log("Image optimization completed.");
