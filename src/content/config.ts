import { defineCollection, z } from "astro:content";
import { format } from "date-fns";

const productsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            sku: z.string(),
            images: z.array(image()),
            tags: z.array(z.string()),
            unit: z.string(),
            price: z.number(),
            stones: z.string().default(""),
            remarks: z.string().default("No additional remarks"),
            updatedOn: z
                .string()
                .transform((s) => format(new Date(s), "MMMM dd, yyyy")),
            stock: z.number(),
        }),
});

export const collections = {
    products: productsCollection,
};
