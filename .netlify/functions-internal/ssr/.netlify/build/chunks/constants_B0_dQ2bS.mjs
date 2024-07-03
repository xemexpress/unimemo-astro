const ENV_PRODUCT_PER_PAGE = Number("12");
const OUR_BRAND = {
  NAME: "UniMemo",
  MISSION: "Inspire the next jewelry",
  CONTACT_NUMBER: "+852 69 080 040",
  HELP_DESK: "unimemo.helpdesk@gmail.com",
  COPYRIGHT: "2024",
  LOGO: "../content/logo.png",
  get DESCRIPTION() {
    return `Welcome to ${this.NAME}, your trusted jewelry wholesaler and manufacturer. We are committed to giving most jewelry to most customers. We encourage you to send a photo of any pieces of jewelry that you love. In exchange, we promise to offer you the best price to serve you and our mission.`;
  }
};
const UI = {
  PRODUCTS_PER_PAGE: ENV_PRODUCT_PER_PAGE || 12
};
const PRODUCT = {
  TYPES: {
    PACKAGING: "packaging",
    PENDANT: "pendant",
    NECKLACE: "necklace",
    EAR_STUDS: "ear studs"
  },
  get CODES() {
    return {
      [this.TYPES.PACKAGING]: "01",
      [this.TYPES.PENDANT]: "11",
      [this.TYPES.NECKLACE]: "22",
      [this.TYPES.EAR_STUDS]: "33"
    };
  },
  UNKNOWN: "unknown",
  get ALL_TYPES() {
    return Object.values(this.TYPES);
  }
};
const METAL = {
  TYPES: {
    SILVER: "silver"
  },
  UNKNOWN: "unknown",
  get ALL_TYPES() {
    return Object.values(this.TYPES);
  }
};
const PLATING = {
  TYPES: {
    YELLOW_GOLD_WITH_E_COATING: "14K yellow gold plated + E-coating",
    WHITE_GOLD: "White gold (Rhodium) plated"
  },
  get CODES() {
    return {
      SILVER_WITH_YELLOW_GOLD_E_COATING: "41",
      SILVER_WITH_WHITE_GOLD: "26"
    };
  },
  UNKNOWN: "unknown",
  get ALL_TYPES() {
    return Object.values(this.TYPES);
  }
};
const PRODUCT_TYPE_MAP = Object.fromEntries(
  Object.entries(PRODUCT.CODES).map(([type, code]) => [code, type])
);
const METAL_PLATING_MAP = {
  [PLATING.CODES.SILVER_WITH_YELLOW_GOLD_E_COATING]: {
    metalType: METAL.TYPES.SILVER,
    plating: PLATING.TYPES.YELLOW_GOLD_WITH_E_COATING
  },
  [PLATING.CODES.SILVER_WITH_WHITE_GOLD]: {
    metalType: METAL.TYPES.SILVER,
    plating: PLATING.TYPES.WHITE_GOLD
  }
};

export { METAL as M, OUR_BRAND as O, PLATING as P, UI as U, PRODUCT as a, PRODUCT_TYPE_MAP as b, METAL_PLATING_MAP as c };
