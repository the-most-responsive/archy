
export const Sidebar = {
  extend: 'Flex',

  props: {
    position: 'sticky',
    flow: 'column',
    top: '0',
    background: 'white',
    widthRange: 'E',
    padding: 'A2 B',
    height: '100%',
    align: 'start space-between',
    zIndex: 10
  },

  Link: {
    props: {
      top: 'A2',
      left: '-A2',
      position: 'absolute',
      transform: 'rotateZ(-90deg)',
      transformOrigin: '50% 50%',
      href: '/',
      color: 'black'
    },

    Icon: { name: 'logo', fontSize: '7.5em' }
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

    Store: {
      // text: 'Store',
      text: ({ state }) => state.lang === 'en' ? 'Store' : 'მაღაზია',
      href: '/'
    },
    Studio: {
      text: ({ state }) => state.lang === 'en' ? 'Studio' : 'სტუდია',
      href: '/studio',
      order: -1
    }
  },

  Box: {
    props: {
      margin: 'auto 0 0',
      fontFamily: 'Code',
      flexFlow: 'column',
      gap: 'X',
      cursor: 'pointer',
      onClick: (ev, el, s) => s.toggle('openCart')
    },

    Icon: {
      icon: 'cart'
    }
  },

  Lang: {
    props: ({ state }) => ({
      margin: 'B 0 0',
      text: state.lang === 'ge' ? 'Eng' : 'Geo',
      fontFamily: 'Code',
      onClick: (ev, el, s) => {
        s.update({ lang: state.lang === 'ge' ? 'en' : 'ge' })
      }
    })
  },

  Aside: {
    extend: 'Flex',

    props: {
      flow: 'y',
      align: 'center space-between',
      gap: 'C',
      position: 'absolute',
      width: 'G',
      verticalInset: '0',
      left: '100%',
      background: 'white',
      padding: 'A2 C2 A2 -',
      overflow: 'hidden',
      transition: 'C default, D default',
      transitionProperty: 'max-width, box-shadow, padding, opacity',
      zIndex: 2,

      '.openCart': {
        padding: 'A2 C2 A2 -',
        maxWidth: 'G',
        boxShadow: 'D1, 0, D1, -A, black .35'
      },

      '!openCart': {
        padding: 'A2 0 A2 -',
        maxWidth: '0'
      }
    },

    Cart: {
      extend: 'Flex',
      props: {
        minWidth: 'G-C2',
        overflow: 'hidden auto',
        flow: 'y',
        gap: 'A2'
      },

      childExtend: 'ProductItemSmall',

      $propsCollection: [{
        // Img: { src: 'https://share.zight.com/E0uJon0N' }
      }, {
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/9Zu4DBeX/5bf7e9dd-f978-412a-bb8d-79eac379d167.png?v=39749525be280da55259d24a856f0e99' }
      }]
    },

    'Link+Button': {
      margin: 'auto 0 0',
      theme: 'secondary',
      padding: 'Z2 B2',
      fontWeight: '300',
      gap: 'X',
      reverse: true,
      icon: 'arrow right',
      href: '/checkout',
      text: ({ state }) => state.__root.lang === 'en' ? 'Order' : 'შეუკვეთე'
    }
  },

  Fade: {
    zIndex: 1,
    flow: 'y',
    align: 'center space-between',
    gap: 'C',
    position: 'absolute',
    verticalInset: '0',
    left: '100%',
    background: 'white .35',
    width: '100vw',
    transition: 'D default',
    transitionProperty: 'visibility, opacity',

    onClick: (ev, el, s) => s.toggle('openCart'),

    '.openCart': {
      opacity: 1,
      visibility: 'visible',
      pointerEvents: 'auto'
    },

    '!openCart': {
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none'
    }
  }
}
