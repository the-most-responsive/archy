
export const Footer = {
  props: {
    margin: 'auto - -',
    padding: 'D1 Z Z',
    fontSize: 'Z',
    flexAlign: 'center space-between',
    textAlign: 'center'
  },

  Nav: {
    props: {
      flexFlow: 'row',
      flex: 3,
      gap: 'B',
      childProps: {
        fontWeight: '400'
      }
    },

    childExtend: 'Link',

    $propsCollection: [{
      text: 'Main',
      href: '/'
    }, {
      text: 'About',
      href: '/about'
    }, {
      text: 'Contact',
      href: '/contact'
    }]
  },

  Text: {
    flex: 2,
    text: 'VDCapital © 2023'
  },

  Privacy: {
    flexAlign: 'center end',
    flex: 3,
    gap: 'B',
    fontWeight: '400',
    text: 'Since 2016'
  }
}
