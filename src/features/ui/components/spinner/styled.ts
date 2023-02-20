import styled, { keyframes } from 'styled-components'
import { colors } from '../../theme/colors.style'

export const loading = keyframes`
to {
    transform: rotate(360deg);
}
`

type SpinnerProps = {
  margin?: string
  borderColor?: string
  borderTopColor?: string
}

export const Spinner = styled.div<SpinnerProps>`
  display: grid;
  margin: ${({ margin }) => margin || '5rem 0'};

  &::after {
    content: '';
    width: 5rem;
    height: 5rem;
    border: ${({ borderColor }) =>
      borderColor ?? ` 0.7rem solid ${colors.basic.white}`};
    border-top-color: ${({ color }) => color ?? colors.accent.primary};
    border-radius: 50%;
    animation: ${loading} 0.75s linear infinite;
  }
`

type ButtonSpinnerProps = {
  borderColor?: string
  borderTopColor?: string
}

export const ButtonSpinner = styled(Spinner)<ButtonSpinnerProps>`
  margin: 0;

  &::after {
    width: 2.7rem;
    height: 2.7rem;
    border: ${({ borderColor }) =>
      borderColor ?? ` 0.2rem solid ${colors.basic.white}`};
    border-top-color: ${({ color }) => color ?? colors.accent.primary};
  }
`
