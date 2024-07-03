import rss from '@astrojs/rss';
import { g as getCollection, P as ProductUtils } from './coreUtils_B01bLQ1H.mjs';
import sanitizeHtml from 'sanitize-html';
import { O as OUR_BRAND } from './constants_B0_dQ2bS.mjs';

async function GET(context) {
  const products = (await getCollection("products")).filter((product) => product.data.isAvailable).sort((a, b) => a.data.price - b.data.price);
  const today = /* @__PURE__ */ new Date();
  return rss({
    title: `${OUR_BRAND.NAME} Product Catalog`,
    description: OUR_BRAND.DESCRIPTION,
    site: context.site?.toString() || "",
    items: products.map((product) => {
      const { sku, tags, unit, price, isAvailable, images, remarks } = product.data;
      const { productType, metalType, plating } = ProductUtils.deriveProductInfo(sku);
      const title = `Product ${sku}`;
      const imageGallery = images.map(
        (image, index) => `
                <div style="display: inline-block; margin: 10px;">
                    <img src="${image}" alt="${title} - Image ${index + 1}" style="max-width: 200px; height: auto;">
                    <p>Image ${index + 1}</p>
                </div>
            `
      ).join("");
      const description = `
                <h2>${title}</h2>
                <div style="overflow-x: auto;">
                    <div style="white-space: nowrap;">
                        ${imageGallery}
                    </div>
                </div>
                <p><strong>SKU:</strong> ${sku}</p>
                <p><strong>Categories:</strong> ${tags.join(", ")}</p>
                <p><strong>Unit:</strong> ${unit}</p>
                <p><strong>Price:</strong> $${price} HKD</p>
                <p><strong>Stock:</strong> ${isAvailable ? `In stock` : "Out of stock"}</p>
                <p><strong>Product Type:</strong> ${productType}</p>
                <p><strong>Metal Type:</strong> ${metalType}</p>
                <p><strong>Plating:</strong> ${plating}</p>
                <p><strong>Remarks:</strong> ${remarks}</p>
            `;
      return {
        title,
        description: sanitizeHtml(description),
        link: `/products/${product.slug}/`,
        image: images[0],
        // Keep the first image as the main image for the RSS item
        pubDate: today
        // Set pubDate to today's date for all items
      };
    })
  });
}

export { GET };
