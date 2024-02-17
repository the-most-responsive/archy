
export const Aside = {
  extend: 'Flex',

  props: {
    position: 'sticky',
    flow: 'column',
    top: '0',
    background: 'white',
    widthRange: 'E',
    padding: 'A2 B',
    height: '100%',
    align: 'start space-between'
  },

  Link: {
    props: {
      top: 'A2',
      left: '-B1',
      position: 'absolute',
      transform: 'rotateZ(-90deg)',
      transformOrigin: '50% 50%',
      href: '/',
      color: 'black'
    },

    Icon: { name: 'logo', fontSize: '8.5em' }
  },

  Menu: {
    extend: 'Flex',

    props: {
      margin: 'B1 - - F',
      gap: 'C',
      fontFamily: 'Code',
      textTransform: 'uppercase',
      transform: 'scale(-1, -1)',
      writingMode: 'tb'
    },

    childExtend: {
      extend: 'Link',
      props: ({ props }) => ({
        fontWeight: props.href === window.location.pathname ? 700 : 400
      })
    },

    Store: { text: 'Store', href: '/' },
    Studio: { text: 'Studio', href: '/studio', order: -1 }
  },

  Box: {
    props: {
      fontFamily: 'Code',
      flexFlow: 'column',
      gap: 'X',
      cursor: 'pointer'
    },

    Icon: {
      icon: 'cart'
    },

    Text: { text: 'Cart' }
  }
}
