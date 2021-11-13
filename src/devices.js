const size = {
    mobileSmall: "320px",
    mobileMedium: "375px",
    mobileLarge: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopLarge: "1440px",
    desktop: "2560px"
}

export const device = { 
    mobileSmall: `(max-width: ${size.mobileSmall})`,
    mobileMedium: `(max-width: ${size.mobileMedium})`,
    mobileLarge: `(max-width: ${size.mobileLarge})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopLarge: `(max-width: ${size.laptopLarge})`,
    desktop: `(max-width: ${size.desktop})`
};