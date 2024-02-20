
export const Footer = {
  props: {
    margin: 'auto - -',
    padding: 'D1 A A2',
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
    flexAlign: 'center end',
    flex: 2,
    text: 'Archy © since 2016'
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
    text: 'Since 2016'
  }
}
