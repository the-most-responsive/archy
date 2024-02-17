'use strict'

import { create } from 'smbls'
import * as data from '.'

import { FastClick } from 'fastclick'

create({
  props: {
    theme: 'document',
    position: 'relative',
    flexFlow: 'row',
    flexAlign: 'stretch center',
    width: '100%',
    minHeight: '100%',

    Aside: {
      minHeight: '100vh'
    },

    content: {
      flex: 1,
      width: '100%',
      minHeight: '100%',
      position: 'relative',
      childProps: { height: '100%' }
    }
  },

  Aside: {},
  content: {}
}, {}, data)

FastClick.attach(document.body)
