import { defineCollection, z } from "astro:content";
import { StringUtils } from "../utils/coreUtils";

const productsCollection = defineCollection({
    type: "content",
    schema: ({ image }: any) =>
        z.object({
            name: z.string(),
            sku: z.string(),
            images: z.array(image()),
            tags: z.array(z.string()),
            unit: z.string(),
            price: z.number(),
            stones: z.string().default(""),
            remarks: z.string().default("No additional remarks"),
            isAvailable: z.boolean(),
        }),
    slug: ({ data }: any) => StringUtils.slugify(data.name),
});

export const collections = {
    products: productsCollection,
};
