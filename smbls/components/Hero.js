
export const Hero = {
  extend: 'Flex',

  props: {
    flexAlign: 'center start',
    background: 'black',
    position: 'relative',
    maxHeight: '100dvh',
    boxSize: '100%'
  },

  Stripe: {},

  Leading: {
    props: {
      color: 'white',
      margin: '5% 10%',
      pointerEvents: 'none',
      position: 'relative',
      '@tabletS': {
        margin: 'C1 B'
      }
    },

    H6: {
      margin: '- - Z Z',
      fontWeight: '200',
      opacity: '.65',
      fontFamily: 'Code',
      text: ({ state }) => state.lang === 'en' ? 'Spring 23/' : 'გაზაფხული 23/'
    },

    H1: {
      props: ({ state }) => ({
        margin: 0,
        fontWeight: '700',
        fontSize: '16vh',
        lineHeight: '1.2',
        maxWidth: '50%',
        fontFamily: 'UI',
        GE: state.lang === 'ge',
        text: state.lang === 'en' ? 'Ninja Collection' : 'კოლექცია ნინძა',
        '.GE': {
          fontWeight: '400',
          letterSpacing: '.15ch',
          fontFamily: 'GE'
        },
        '@tabletS': {
          fontSize: '16vmin'
        }
      })
    },

    Button: {
      margin: '10% - - A1',
      padding: 'A B2',
      round: '0',
      text: ({ state }) => state.lang === 'en' ? 'Check it out' : 'კოლექციის ნახვა',
      pointerEvents: 'auto',
      transition: 'C default',
      transitionProperty: 'color, background, padding, margin, font-weight',

      ':hover': {
        // fontWeight: 700,
        theme: 'secondary'
      },

      onClick: (ev, el) => {
        el.__ref.__root.content.node.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        })
      }
    }
  }
}
