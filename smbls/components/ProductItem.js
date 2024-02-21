
export const ProductItem = {
  extend: ['Flex'],

  state: {},

  props: {
    href: '/item',
    flow: 'column',
    position: 'relative',
    align: 'center center',
    gap: 'Y',

    ':hover img': {
      transform: 'scale(.95)'
    }
  },

  Img: {
    aspectRatio: '3 / 5',
    width: '100%',
    src: 'https://p194.p3.n0.cdn.zight.com/items/E0uJon0N/11d817f1-ed88-411b-a5e7-5da4da83160f.png?v=66acc890569c52def3b99c5bc7b8d310',
    opacity: 0,
    transition: 'C default',
    transitionProperty: 'opacity, transform',
    onLoad: (ev, el, s) => { el.node.style.opacity = 1 }
  },

  Link: {
    position: 'absolute',
    inset: '0',
    href: '/item'
  },

  TakeIt: {
    zIndex: 2
  }
}

export const ProductItemSmall = {
  extend: ['ProductItem'],

  state: {},

  props: {
  },

  Img: {
    maxWidth: 'E1'
  },

  Link: {
    position: 'absolute',
    inset: '0',
    href: '/item'
  },

  IncDecButton: {
    minWidth: 'D3',
    zIndex: 2
  },
  TakeIt: null
}

export const ProductItemLarge = {
  extend: 'ProductItem',

  props: {
  },

  Img: {
    aspectRatio: '5 / 3'
  },

  Link: {},

  Flex: {
    props: {
      width: '100%',
      align: 'start space-between',
      padding: 'B'
    },
    Hgroup: {
      props: {
      },
      H3: {
        margin: '0',
        text: 'Pendant Lights simple'
      },
      P: {
        margin: '0',
        opacity: '0.5',
        fontWeight: '400',
        text: 'price: 420,35 GEL'
      }
    },

    TakeIt: {
      zIndex: 2,
      margin: '-Z -A - -'
    }
  },

  TakeIt: null
}
