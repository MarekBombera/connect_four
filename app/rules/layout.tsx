import { StyledRulesLayout } from './styled'

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <StyledRulesLayout>{children}</StyledRulesLayout>
}
