import { defineCollection, z } from "astro:content";

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
});

export const collections = {
    products: productsCollection,
};
