'use strict'

import { Flex } from 'smbls'

export const App = {
  extend: Flex,

  props: {
    theme: 'document',
    flow: 'column',
    height: '100dvh',
    align: 'center space-between'
  },

  Header: {},

  content: {},

  Footer: { text: 'Footer' }
}
