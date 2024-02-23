export const about = {}

export const contact = {
  props: { flexFlow: 'column' },

  Box: {
    tag: 'article',

    props: {
      width: '100%',
      margin: '0 auto',
      maxWidth: 'J',
      padding: 'D1 B -'
    },

    H1: {
      fontWeight: '400',
      text: 'Contact'
    },

    P: {
      maxWidth: '48%',
      margin: 'X - B1',
      text: 'We celebrate the culinary heart of Georgia and the world beyond.'
    }
  },

  Box_2: {
    tag: 'article',

    props: {
      width: '100%',
      margin: '0 auto',
      maxWidth: 'J',
      padding: 'B B D1'
    },

    Flex: {
      props: { gap: 'C1' },

      childExtend: 'P',

      Form: {
        props: {
          flexFlow: 'column',
          flexAlign: 'start start',
          flex: 1,
          gap: 'A'
        },

        'Input.name': {
          round: 'X',
          theme: 'dialog',
          placeholder: 'Name'
        },

        'Input.email': {
          round: 'X',
          theme: 'dialog',
          placeholder: 'Email'
        },

        'Input.phone': {
          round: 'X',
          theme: 'dialog',
          placeholder: 'Phone'
        },

        'Textarea.contact': {
          round: 'X',
          theme: 'dialog',
          placeholder: 'Phone'
        },

        Button: {
          round: '0',
          theme: 'secondary',
          type: 'submit',
          text: 'Submit'
        }
      }
    }
  },

  Footer: { margin: 'auto - -' }
}
