import { css } from 'styled-components'

import { mq } from './mq.style'

export const font = {
  headings: 'Space Grotesk Bold, sans-serif',
  base: 'Space Grotesk, sans-serif  ',
}

const allHeadingsStyle = css`
  font-family: ${font.headings};
  line-height: 4.8rem;
`

const allParagraphsStyle = css`
  font-family: ${font.base};
  line-height: 2rem;
`

const allLabelsStyle = css`
  font-family: ${font.base};
  line-height: 2rem;
`

export const typography = {
  heading: {
    h1: css`
      ${allHeadingsStyle};
      font-size: 2.2rem;

      ${mq.medium} {
        font-size: 2.8rem;
      }
    `,
    h2: css`
      ${allHeadingsStyle}
      font-size: 2.4rem;

      ${mq.medium} {
        font-size: 2.8rem;
      }
    `,
    h3: css`
      ${allHeadingsStyle}
      font-size: 2rem;

      ${mq.medium} {
        font-size: 2.2rem;
      }
    `,
    h4: css`
      ${allHeadingsStyle}
      font-size: 1.8rem;

      ${mq.medium} {
        font-size: 1.8rem;
      }
    `,
  },

  label: {
    xxSmall: css`
      ${allLabelsStyle}
      font-size: 1.2rem; // 0.75
    `,
    xSmall: css`
      ${allLabelsStyle}
      font-size: 1.3rem; // 0.8125
    `,
    small: css`
      ${allLabelsStyle}
      font-size: 1.4rem; // 0.875
    `,
    mediumSmall: css`
      ${allLabelsStyle}
      font-size: 1.5rem; // 0.9375
    `,
    medium: css`
      ${allLabelsStyle}
      font-size: 1.6rem; // 1
    `,
    mediumLarge: css`
      ${allLabelsStyle}
      font-size: 1.7rem; // 1.0625
    `,
    large: css`
      ${allLabelsStyle}
      font-size: 1.8rem; // 1.125
    `,
    xLarge: css`
      ${allLabelsStyle}
      font-size: 1.9rem; // 1.1875
    `,
    xxLarge: css`
      ${allLabelsStyle}
      font-size: 2rem; // 1.25
    `,
  },

  paragraph: {
    xxSmall: css`
      ${allParagraphsStyle}
      font-size: 1.2rem; // 0.75
    `,
    xSmall: css`
      ${allParagraphsStyle}
      font-size: 1.3rem; // 0.8125
    `,
    small: css`
      ${allParagraphsStyle}
      font-size: 1.4rem; // 0.875
    `,
    mediumSmall: css`
      ${allParagraphsStyle}
      font-size: 1.5rem; // 0.9375
    `,
    medium: css`
      ${allParagraphsStyle}
      font-size: 1.6rem; // 1
    `,
    mediumLarge: css`
      ${allParagraphsStyle}
      font-size: 1.7rem; // 1.0625
    `,
    large: css`
      ${allParagraphsStyle}
      font-size: 1.8rem; // 1.125
    `,
    xLarge: css`
      ${allParagraphsStyle}
      font-size: 1.9rem; // 1.1875
    `,
    xxLarge: css`
      ${allParagraphsStyle}
      font-size: 2rem; // 1.25
    `,
  },
}
