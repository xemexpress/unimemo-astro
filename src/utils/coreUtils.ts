import {
    PRODUCT,
    METAL,
    PLATING,
    PRODUCT_TYPE_MAP,
    METAL_PLATING_MAP,
} from "./constants";

export const StringUtils = {
    capitalizeFirstLetter: (s: string): string => {
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    },
};

export const LinkUtils = {
    generateSpecificProductTypeLink: (productType: string): string =>
        `/overview/product-types/${productType}`,
    generateSpecificMetalTypeLink: (metalType: string): string =>
        `/overview/metal-types/${metalType}`,
    generateSpecificPlatingTypeLink: (platingType: string): string =>
        `/overview/plating-types/${platingType}`,
};

export const ProductUtils = {
    getProductTypeFromSku: (sku: string): string => {
        const productTypePrefix = sku.substring(0, 2);
        return PRODUCT_TYPE_MAP[productTypePrefix] || PRODUCT.UNKNOWN;
    },

    getMetalTypeFromSku: (sku: string): string => {
        const metalPlatingCode = sku.substring(2, 4);
        const { metalType = METAL.UNKNOWN } =
            METAL_PLATING_MAP[metalPlatingCode] || {};
        return metalType;
    },

    getPlatingTypeFromSku: (sku: string): string => {
        const metalPlatingCode = sku.substring(2, 4);
        const { plating = PLATING.UNKNOWN } =
            METAL_PLATING_MAP[metalPlatingCode] || {};
        return plating;
    },

    deriveProductInfo: (sku: string) => {
        return {
            productType: ProductUtils.getProductTypeFromSku(sku),
            metalType: ProductUtils.getMetalTypeFromSku(sku),
            plating: ProductUtils.getPlatingTypeFromSku(sku),
        };
    },
};

export const SEOUtils = {
    generateProductDetailSiteDescription: (
        productType: string,
        metalType: string,
        plating: string,
        stones: string | undefined
    ): string => {
        return `Discover our ${productType} made of ${metalType} with ${plating}${
            stones?.trim() ? ` and ${stones.toLowerCase()}` : ""
        }. High-quality craftsmanship at competitive prices. Free delivery in Mong Kok.`;
    },
    generateProductListCategoryDescription: (category: string): string => {
        return `Explore our ${category} jewelry. Find the perfect piece to complement your style. Shop now for competitive prices and free delivery in Mong Kok.`;
    },
};
