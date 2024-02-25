import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle, View } from 'react-native';
import { Box } from '../Box/Box';

interface TextProps extends RNTextProps{
    preset?: variants
    black?: boolean 
    italic?: boolean
    bold?: boolean
    medium?: boolean
}

export function Text({children, preset = 'medium', style, black, italic, bold, medium, ...rest}: TextProps) {

    const textVariants = $fontSizes[preset]
    const fontFamily = getFontFamily(black, italic, bold, medium)

    return <RNText style={[textVariants, {fontFamily}, style]} {...rest}>{children}</RNText>;
}

function getFontFamily(black?: boolean, italic?: boolean, bold?: boolean, medium?: boolean) {
    switch(true) {
        case black && italic:
            return $fontFamily.blackItalic
        case black:
            return $fontFamily.black
        case bold && italic:
            return $fontFamily.boldItalic
        case bold:
            return $fontFamily.bold
        case medium && italic:
            return $fontFamily.mediumItalic
        case italic:
            return $fontFamily.italic
        case medium:
            return $fontFamily.medium
        default:
            return $fontFamily.regular
    }
}

type variants = 'large' | 'medium' | 'small'

const $fontSizes: Record<variants, TextStyle> = {
    large: {fontSize: 30, color: 'black'},
    medium: {fontSize: 20, color: 'black'},
    small: {fontSize: 10, color: 'black'}
}

const $fontFamily  = {
    black: 'Neco-Black',
    blackItalic: 'Neco-BlackItalic',
    bold: 'Neco-Bold',
    boldItalic: 'Neco-BoldItalic',
    italic: 'Neco-Italic',
    medium: 'Neco-Medium',
    mediumItalic: 'Neco-MediumItalic',
    regular: 'Neco-Regular'
}
