import rss from '@astrojs/rss';
import { g as getCollection, P as ProductUtils, S as StringUtils, b as SEOUtils } from './coreUtils_DL8u35uA.mjs';
import sanitizeHtml from 'sanitize-html';
import { O as OUR_BRAND } from './constants_zJHtZRx4.mjs';
import { R as ROUTES } from './routes_Be0JyTu8.mjs';

async function GET(context) {
  const products = await getCollection("products");
  const availableProducts = products.filter((product) => product.data.isAvailable).sort((a, b) => a.data.price - b.data.price);
  const items = availableProducts.map((product) => {
    const { sku, tags, unit, price, images, stones, remarks, isAvailable } = product.data;
    const { productType, metalType, plating } = ProductUtils.deriveProductInfo(sku);
    const title = `${productType} - ${sku}`;
    const processedImages = images.map((image) => {
      return new URL(image.src, context.site).toString();
    });
    const imageGallery = processedImages.map(
      (imageSrc, index) => `
                <div style="display: inline-block; margin: 10px;">
                    <img src="${imageSrc}" alt="${title} - Image ${index + 1}" style="max-width: 200px; height: auto;">
                    <p>Image ${index + 1}</p>
                </div>
            `
    ).join("");
    const description = `
        <h2>${StringUtils.capitalizeFirstLetter(title)}</h2>
        <div style="overflow-x: auto;">
            <div style="white-space: nowrap;">
                ${imageGallery}
            </div>
        </div>
        <p><strong>SKU:</strong> ${sku}</p>
        <p><strong>Categories:</strong> ${tags.join(", ")}</p>
        <p><strong>Unit:</strong> ${unit}</p>
        <p><strong>Price:</strong> $${price.toFixed(2)} HKD</p>
        <p><strong>Stock:</strong> ${isAvailable ? "In stock" : "Out of stock"}</p>
        <p><strong>Product Type:</strong> ${productType}</p>
        <p><strong>Metal Type:</strong> ${metalType}</p>
        <p><strong>Plating:</strong> ${plating}</p>
        ${stones ? `<p><strong>Stones:</strong> ${stones}</p>` : ""}
        ${remarks !== "No additional remarks" ? `<p><strong>Remarks:</strong> ${remarks}</p>` : ""}
        <p>${SEOUtils.generateProductDetailSiteDescription(
      productType,
      metalType,
      plating,
      stones
    )}</p>
    `;
    return {
      title,
      description: sanitizeHtml(description),
      link: new URL(
        ROUTES.PRODUCTS(product.slug),
        context.site
      ).toString(),
      image: processedImages[0],
      pubDate: /* @__PURE__ */ new Date(),
      categories: tags
    };
  });
  return rss({
    title: `${OUR_BRAND.NAME} Product Catalog`,
    description: OUR_BRAND.DESCRIPTION,
    site: context.site?.toString() || "",
    items,
    customData: `<language>en-us</language>`
  });
}

export { GET };
