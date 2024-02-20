
export const Footer = {
  props: {
    margin: 'auto - -',
    padding: 'D1 A A2 0',
    flexAlign: 'end space-between',
    textAlign: 'center'
  },

  Img: {
    width: 'A',
    src: new URL('../assets/sprite-vertical.svg', import.meta.url).pathname
  },

  Nav: {
    props: {
      flexFlow: 'row',
      gap: 'B2',
      childProps: {
        fontWeight: '600'
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
    text: 'Archy Inc, © Since 2016'
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
