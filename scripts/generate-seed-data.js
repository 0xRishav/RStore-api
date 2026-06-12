const fs = require("fs");
const path = require("path");

const raw = require("../data/productData");

const transformed = raw.map((product) => {
  const prompt = encodeURIComponent(product.name);
  const images = [1, 2, 3].map(
    (seed) => `https://placeholdr.dev/640x480/${prompt}?style=photographic&seed=${seed}`,
  );
  return { ...product, images };
});

const output = `const productData = ${JSON.stringify(transformed, null, 2)};\n\nmodule.exports = productData;\n`;

fs.writeFileSync(path.join(__dirname, "..", "data", "productData.js"), output, "utf-8");

console.log(`Transformed ${transformed.length} products with placeholdr.dev image URLs`);
