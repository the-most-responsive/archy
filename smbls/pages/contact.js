export const contact = {
  props: {
    flexFlow: 'column'
  },
  Box: {
    props: {
      flexFlow: 'column',
      width: '100%',
      margin: '0 auto',
      maxWidth: 'J',
      gap: 'B',
      padding: 'B B -'
    },

    Box: {
      tag: 'article',
      props: {},

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

    Address: {
      extend: 'Flex',
      props: {
        margin: '- - B2',
        gap: 'C1',
        childProps: { width: 'F3' },
        '@mobileM': {
          flow: 'y'
        }
      },

      Flex: {
        props: {
          flow: 'y',
          childProps: { margin: '0' }
        },

        H6: { text: ({ state }) => state.lang === 'en' ? 'Phone' : 'ტელეფონი' },

        P: { text: '+995 593 745 453' },
        P_2: { text: '+995 571 811 000' }
      },

      Flex_phone: {
        props: {
          flow: 'y',
          childProps: { margin: '0' }
        },

        H6: { text: ({ state }) => state.lang === 'en' ? 'Address' : 'მისამართი' },

        P: { text: ({ state }) => state.lang === 'en' ? 'David Guramishvili av. 78, Block D' : 'დავით გურამიშვილი გამზ. 78, ბლოკი D.' },
        P_2: { text: ({ state }) => state.lang === 'en' ? 'Tbilisi, Georgia' : 'თბილისი, საქართველო' }
      }
    },

    Box_2: {
      tag: 'article',

      props: {
      },

      H6: { margin: '0 0 X', text: ({ state }) => state.lang === 'en' ? 'Contact' : 'კონტაქტი' },
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
    }
  },

  Footer: { margin: 'auto - -' }
}
