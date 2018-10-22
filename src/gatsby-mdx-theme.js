import theme from 'mdx-deck/themes'

import { code, header } from './fonts'
import colors from './colors'
import codeTheme from './gatsby-code-theme'

export * from './layouts'

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  colors: {
    background: 'white',
    heading: colors.gatsby
  },
  prism: {
    style: codeTheme
  }
}
