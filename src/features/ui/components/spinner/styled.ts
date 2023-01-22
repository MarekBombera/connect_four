import styled, { keyframes } from 'styled-components'

export const loading = keyframes`
to {
    transform: rotate(360deg);
}

`

export const Spinner = styled.div`
  display: grid;
  margin: 5rem 0;

  &::after {
    content: '';
    width: 5rem;
    height: 5rem;
    border: 0.7rem solid #dddd;
    border-top-color: #000;
    border-radius: 50%;
    animation: ${loading} 0.75s linear infinite;
  }
`
