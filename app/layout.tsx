import { GlobalStyles } from 'src/features/ui/theme/global.style'
import StyledComponentsRegistry from 'src/features/ui/theme/registry'
import { SpaceGroteskFont } from '~/features/ui/theme/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={SpaceGroteskFont.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
