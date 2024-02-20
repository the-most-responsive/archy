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
      boxSize: '100vh 100vw',
      overflow: 'hidden auto',
      position: 'relative'
    }
  },

  Loading: {},

  Aside: {},
  content: {}
}, {}, data)

FastClick.attach(document.body)
