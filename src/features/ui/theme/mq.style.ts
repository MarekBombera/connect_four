export const screenSize = {
  medium: 768,
  large: 1366,
  xLarge: 1920,
  xxLarge: 2560,
}

export const mq = {
  smallOnly: `@media (max-width: ${screenSize.medium / 16}em )`,
  medium: `@media (min-width: ${screenSize.medium / 16}em)`,
  large: `@media (min-width: ${screenSize.large / 16}em)`,
  xLarge: `@media (min-width: ${screenSize.xLarge / 16}em)`,
  xxLarge: `@media (min-width: ${screenSize.xxLarge / 16}em)`,
}
