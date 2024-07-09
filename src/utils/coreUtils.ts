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
    normalizeString: (str: string): string => {
        return str
            .replace(/\+/g, " ")
            .replace(/[^\w\s]/gi, "")
            .toLowerCase(); // Remove plus signs
    },
};
export const LinkUtils = {
    generateLink: (params: Record<string, string>): string => {
        const searchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
            searchParams.append(key, value);
        }
        return `?${searchParams.toString()}`;
    },

    generateSpecificProductTypeLink: (
        productType: string,
        existingParams?: URLSearchParams
    ): string => {
        const params = new URLSearchParams(existingParams);
        params.set("product-type", productType);
        return `?${params.toString()}`;
    },

    generateSpecificMetalTypeLink: (
        metalType: string,
        existingParams?: URLSearchParams
    ): string => {
        const params = new URLSearchParams(existingParams);
        params.set("metal-type", metalType);
        return `?${params.toString()}`;
    },

    generateSpecificPlatingTypeLink: (
        platingType: string,
        existingParams?: URLSearchParams
    ): string => {
        const params = new URLSearchParams(existingParams);
        params.set("plating-type", platingType);
        return `?${params.toString()}`;
    },
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

    matchesProductType: (sku: string, productType: string | null): boolean => {
        if (!productType) return true; // If no filter is applied, return true

        const skuProductType = ProductUtils.getProductTypeFromSku(sku);
        const normalizedSkuProductType =
            StringUtils.normalizeString(skuProductType);
        const normalizedFilterProductType =
            StringUtils.normalizeString(productType);

        return normalizedSkuProductType === normalizedFilterProductType;
    },

    matchesMetalType: (sku: string, metalType: string | null): boolean => {
        if (!metalType) return true; // If no filter is applied, return true

        const skuMetalType = ProductUtils.getMetalTypeFromSku(sku);
        const normalizedSkuMetalType =
            StringUtils.normalizeString(skuMetalType);
        const normalizedFilterMetalType =
            StringUtils.normalizeString(metalType);

        return normalizedSkuMetalType === normalizedFilterMetalType;
    },

    matchesPlatingType: (sku: string, platingType: string | null): boolean => {
        if (!platingType) return true; // If no filter is applied, return true

        const skuPlatingType = ProductUtils.getPlatingTypeFromSku(sku);
        const normalizedSkuPlatingType =
            StringUtils.normalizeString(skuPlatingType);
        const normalizedFilterPlatingType =
            StringUtils.normalizeString(platingType);

        return normalizedSkuPlatingType === normalizedFilterPlatingType;
    },

    // Combined filter function
    matchesAllFilters: (
        sku: string,
        productType: string | null,
        metalType: string | null,
        platingType: string | null
    ): boolean => {
        return (
            ProductUtils.matchesProductType(sku, productType) &&
            ProductUtils.matchesMetalType(sku, metalType) &&
            ProductUtils.matchesPlatingType(sku, platingType)
        );
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
