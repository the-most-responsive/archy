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

    '@tabletS': {
      flexFlow: 'column'
    },

    Sidebar: {
      minHeight: '100vh',
      '@tabletS': {
        position: 'sticky',
        bottom: '0',
        minHeight: 'auto',
        order: 2
      }
    },

    content: {
      flex: 1,
      boxSize: '100vh auto',
      maxHeight: '100vh',
      overflow: 'hidden auto',
      position: 'relative',
      '@tabletS': {
        maxHeight: 'calc(100vh - var(--spacing-D_default))'
      }
    }
  },

  Loading: {},

  Sidebar: {},
  content: {},

  on: {
    initStateUpdate: (_, el, s) => {
      if (s.openCart) s.openCart = false
    }
  }
}, {}, data)

FastClick.attach(document.body)
