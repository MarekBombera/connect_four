import { GlobalStyles } from 'src/features/ui/theme/global.style'
import StyledComponentsRegistry from 'src/features/ui/theme/registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
