import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import { OUR_BRAND } from "../utils/constants";
import { ProductUtils } from "../utils/coreUtils";

export async function GET(context: APIContext) {
    const products = await getCollection("products");

    return rss({
        title: `${OUR_BRAND.NAME} Product Catalog`,
        description: OUR_BRAND.DESCRIPTION,
        site: context.site?.toString() || "",
        items: products.map((product) => {
            const {
                sku,
                tags,
                unit,
                price,
                stock,
                images,
                remarks,
                updatedOn,
            } = product.data;
            const { productType, metalType, plating } =
                ProductUtils.deriveProductInfo(sku);
            const title = `Product ${sku}`;

            // Create an image gallery
            const imageGallery = images
                .map(
                    (image, index) => `
                <div style="display: inline-block; margin: 10px;">
                    <img src="${image}" alt="${title} - Image ${
                        index + 1
                    }" style="max-width: 200px; height: auto;">
                    <p>Image ${index + 1}</p>
                </div>
            `
                )
                .join("");

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
                <p><strong>Stock:</strong> ${
                    stock > 0 ? `${stock} in stock` : "Out of stock"
                }</p>
                <p><strong>Product Type:</strong> ${productType}</p>
                <p><strong>Metal Type:</strong> ${metalType}</p>
                <p><strong>Plating:</strong> ${plating}</p>
                <p><strong>Remarks:</strong> ${remarks}</p>
            `;

            return {
                title: title,
                pubDate: new Date(updatedOn),
                description: sanitizeHtml(description),
                link: `/products/${product.slug}/`,
                image: images[0], // Keep the first image as the main image for the RSS item
            };
        }),
    });
}
