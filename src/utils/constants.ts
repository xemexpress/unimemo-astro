export const OUR_BRAND = {
    NAME: "UniMemo",
    MISSION: "Inspire the next jewelry",
    CONTACT_NUMBER: "+852 69 080 040",
    HELP_DESK: "unimemo.helpdesk@gmail.com",
    COPYRIGHT: "2021",
    LOGO: "../content/logo.png",
    get DESCRIPTION() {
        return `Welcome to ${this.NAME}, your trusted jewelry wholesaler and manufacturer. We are committed to giving most jewelry to most customers. We encourage you to send a photo of any pieces of jewelry that you love. In exchange, we promise to offer you the best price to serve you and our mission.`;
    },
};

export const UI = {
    PRODUCTS_PER_PAGE: 12,
};

export const PRODUCT = {
    TYPES: {
        PACKAGING: "packaging",
        PENDANT: "pendant",
        NECKLACE: "necklace",
        EAR_STUDS: "ear studs",
    },
    get CODES() {
        return {
            [this.TYPES.PACKAGING]: "01",
            [this.TYPES.PENDANT]: "11",
            [this.TYPES.NECKLACE]: "22",
            [this.TYPES.EAR_STUDS]: "33",
        };
    },
    UNKNOWN: "unknown",
    get ALL_TYPES() {
        return Object.values(this.TYPES);
    },
};
export const METAL = {
    TYPES: {
        SILVER: "silver",
    },
    UNKNOWN: "unknown",
    get ALL_TYPES() {
        return Object.values(this.TYPES);
    },
};

export const PLATING = {
    TYPES: {
        YELLOW_GOLD_WITH_E_COATING: "14K yellow gold plated + E-coating",
        WHITE_GOLD: "White gold (Rhodium) plated",
    },
    get CODES() {
        return {
            SILVER_WITH_YELLOW_GOLD_E_COATING: "41",
            SILVER_WITH_WHITE_GOLD: "26",
        };
    },
    UNKNOWN: "unknown",
    get ALL_TYPES() {
        return Object.values(this.TYPES);
    },
};

export const PRODUCT_TYPE_MAP = Object.fromEntries(
    Object.entries(PRODUCT.CODES).map(([type, code]) => [code, type])
);

export const METAL_PLATING_MAP = {
    [PLATING.CODES.SILVER_WITH_YELLOW_GOLD_E_COATING]: {
        metalType: METAL.TYPES.SILVER,
        plating: PLATING.TYPES.YELLOW_GOLD_WITH_E_COATING,
    },
    [PLATING.CODES.SILVER_WITH_WHITE_GOLD]: {
        metalType: METAL.TYPES.SILVER,
        plating: PLATING.TYPES.WHITE_GOLD,
    },
};
