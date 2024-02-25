import { createTheme } from "@shopify/restyle";

const palette = {
    carrotPrimary: '#F86F2D',
    redError: '#EA3838',
    black: '#000000',
    gray: '#B3B3B3',
    white: '#FFFFFF'
}

export const theme = createTheme({
    colors: {
        ...palette,
        background: palette.black,
        backgroundContrast: palette.white,

        primary: palette.carrotPrimary,
        primaryContrast: palette.white,

        error: palette.redError,
        inputText: palette.gray
    },
    spacing: {
        s4: 4,
        s8: 8,
        s12: 12,
        s16: 16,
        s20: 20,
        s24: 24
    },
    borderRadii:{}
})

export type Theme = typeof theme;