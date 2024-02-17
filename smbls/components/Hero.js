
export const Hero = {
  extend: 'Flex',

  props: {
    flexAlign: 'center start',
    background: 'black',
    position: 'relative',
    boxSize: '100%'
  },

  Stripe: {},

  Leading: {
    props: {
      color: 'white',
      margin: '5% 10%',
      position: 'relative'
    },

    H6: {
      margin: '- - Z Z',
      fontWeight: '200',
      opacity: '.65',
      fontFamily: 'Code',
      text: 'Spring 23/'
    },

    H1: {
      margin: 0,
      fontWeight: '700',
      fontSize: '16vh',
      lineHeight: '1',
      maxWidth: '50%',
      text: 'Ninja Collection'
    },

    Button: {
      margin: '10% - - A1',
      padding: 'A B2',
      round: '0',
      text: 'Check it out'
    }
  }
}
