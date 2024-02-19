export const item = {
  props: {},

  Flex: {
    props: {
      padding: 'A2 A2 A2 -',
      gap: 'C1'
    },

    Pics: {
      extend: 'Flex',
      props: { flex: 1, flow: 'y', gap: 'B2' },

      Figure: {
        props: {
          background: '#e8e8e8',
          aspectRatio: '5 / 3',
          position: 'relative',
          margin: '0'
        },
        Img: {
          maxWidth: '100%',
          maxHeight: '100%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate3d(-50%, -50%, 1px)',
          src: 'https://p194.p3.n0.cdn.zight.com/items/5zuvnwmO/68cd430c-4e30-413a-b7cd-898ce85959c1.png?v=95fef7ff646f0127f509ab686acd36fe',
          opacity: 0,
          transition: 'C default',
          transitionProperty: 'opacity, transform',
          onLoad: (ev, el, s) => { el.node.style.opacity = 1 }
        }
      },

      Flex: {
        props: { gap: 'B' },

        childExtend: {
          props: {
            background: '#e8e8e8',
            position: 'relative',
            aspectRatio: '3 / 5',
            flex: 1
          },
          Img: {
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate3d(-50%, -50%, 1px)',
            opacity: 0,
            transition: 'C default',
            transitionProperty: 'opacity, transform',
            onLoad: (ev, el, s) => { el.node.style.opacity = 1 }
          }
        },

        $collection: [{
          Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/12ub0r5x/1f4a0481-0597-451d-ad23-20f874bc11f6.png?v=02e9ff2ba5f1032fb926454729c8223e' }
        }, {
          Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/Bluqd1Jp/d8ff6e50-00fe-4048-8213-690dcf6fb7b4.png?v=e36fc8173087ad9a2feab42c3e5f60e6' }
        }, {
          Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/6quXEPkx/f7f8c73d-b9ad-4933-a7b3-f0b1b68cee4a.png?v=9785e010de19ff52661dcbc524c169ef' }
        }]
      }
    },

    Info: {
      extend: 'Flex',
      props: {
        flow: 'y',
        gap: 'C3',
        padding: 'Z A2',
        flex: 1
      },
      Hgroup: {
        props: {},
        H1: {
          margin: '0',
          text: 'Pendant Lights simple'
        },
        P: {
          margin: '0',
          fontWeight: '400',
          text: 'price: 420,35 GEL'
        }
      },
      Hgroup_color: {
        props: {},
        P: {
          textTransform: 'uppercase',
          opacity: '.5',
          margin: '0',
          fontWeight: '400',
          text: 'COLOR'
        },
        H6: {
          fontWeight: '400',
          margin: '0',
          text: 'pendant Lights simple'
        }
      },
      Hgroup_material: {
        props: {},
        P: {
          textTransform: 'uppercase',
          opacity: '.5',
          margin: '0',
          fontWeight: '400',
          text: 'MATERIAL'
        },
        H6: {
          fontWeight: '400',
          margin: '0',
          text: 'venge, wood'
        }
      },
      Hgroup_size: {
        props: {},
        P: {
          textTransform: 'uppercase',
          opacity: '.5',
          margin: '0',
          fontWeight: '400',
          text: 'SIZE'
        },
        H6: {
          fontWeight: '400',
          margin: '0',
          text: '10cm x 30cm'
        }
      },

      Clicks: {
        props: {},
        Button: {
          theme: 'secondary',
          padding: 'Z2 B2',
          fontWeight: '300',
          gap: 'X',
          icon: 'plus',
          text: 'Order'
        },

        Available: {
          extend: 'Flex',
          props: {
            margin: 'C1 0'
          },
          Icon: {
            margin: 'W X2 - -',
            fontSize: 'C',
            color: 'green',
            name: 'check'
          },
          Hgroup: {
            props: { gap: 'W' },
            H6: { margin: '0', fontWeight: '400', text: 'In Stock at Archy showroom' },
            Span: { text: 'Pickup is available upon notice' }
          }
        }
      }
    }

  },

  on: {
    init: el => console.warn(el)
  }
}
