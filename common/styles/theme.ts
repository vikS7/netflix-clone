export const theme = {
    black: "#080808",
    white: "#EFEFEF",
    primary: "#E50914",
    alert: "#E6B209",

    gray50: "#080808",
    gray75: "#1A1A1A",
    gray100: "#1E1E1E",
    gray200: "#2C2C2C",
    gray300: "#393939",
    gray400: "#494949",
    gray500: "#5C5C5C",
    gray600: "#7C7C7C",
    gray700: "#A2A2A2",
    gray800: "#C8C8C8",
    gray900: "#EFEFEF",

    navigationHeight: "2.5rem",

    overlay_75: "rgba(0, 0, 0, 0.75)",

    backgroundGradient_180_50: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, transparent 100%)",
    backgroundGradient_90_75: "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.75) 100%)",
    backgroundGradient_270_75: "linear-gradient(270deg, transparent 0%, rgba(0, 0, 0, 0.75) 100%)",

};

type Theme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
