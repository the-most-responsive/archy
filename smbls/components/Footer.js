
export const Footer = {
  props: {
    margin: 'auto - -',
    padding: 'D1 A A2 0',
    flexAlign: 'end space-between',
    textAlign: 'center',
    '@tabletS': {
      padding: 'D1 A A2'
    }
  },

  Img: {
    height: 'D',
    width: 'A',
    src: new URL('../assets/sprite-vertical.svg', import.meta.url).pathname
  },

  Nav: {
    props: {
      flexFlow: 'row',
      gap: 'B2',
      '@mobileS': {
        flexAlign: 'center center',
        flexFlow: 'column',
        gap: 'A'
      },
      childProps: {
        fontWeight: '600'
      }
    },

    childExtend: 'Link',

    $propsCollection: [{
      text: ({ state }) => state.lang === 'ge' ? 'მთავარი' : 'Main',
      href: '/'
    }, {
      text: ({ state }) => state.lang === 'ge' ? 'წესები და პირობები' : 'Terms and conditions',
      href: '/terms'
    }, {
      text: ({ state }) => state.lang === 'ge' ? 'კონტაქტი' : 'Contact',
      href: '/contact'
    }]
  },

  Text: {
    flexAlign: 'center end',
    '@tabletS': {
      display: 'none'
    },
    text: ({ state }) => state.lang === 'ge' ? 'შპს არჩი © 2016 წლიდან' : 'Archy LLC © Since 2016'
  }

  // Privacy: {
  //   flexAlign: 'center end',
  //   flex: 3,
  //   gap: 'B',
  //   fontWeight: '400',
  //   text: 'Since 2016'
  // }
}

export const LightFooter = {
  props: {
    padding: 'A',
    flexAlign: 'center center',
    text: ({ state }) => state.lang === 'ge' ? '2016 წწლიდან' : 'Since 2016'
  }
}
