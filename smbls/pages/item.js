export const item = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'C1',
    padding: 'A2 A2 - -'
  },

  Flex: {
    props: {
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
          text: ({ state }) => (state.__root.lang === 'en' ? 'price: ' : 'ფასი: ') + '420,35' + (state.__root.lang === 'en' ? ' GEL' : ' ლარი')
        }
      },
      Hgroup_color: {
        props: {},
        P: {
          textTransform: 'uppercase',
          opacity: '.5',
          margin: '0',
          fontWeight: '400',
          text: ({ state }) => state.lang === 'en' ? 'COLOR' : 'ფერი'
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
          text: ({ state }) => state.lang === 'en' ? 'MATERIAL' : 'მატერია'
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
          text: ({ state }) => state.lang === 'en' ? 'SIZE' : 'ზომა'
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
          text: ({ state }) => state.__root.lang === 'en' ? 'Take' : 'აიღე',

          onClick: (ev, el, s) => s.toggle('openCart')
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
            H6: {
              margin: '0',
              fontWeight: '400',
              text: ({ state }) => state.__root.lang === 'en' ? 'In Stock at Archy showroom' : 'ადგილზეა არჩის შოურუმში'
            },
            Span: {
              opacity: '.5',
              text: ({ state }) => state.__root.lang === 'en' ? 'Pickup is available upon notice' : 'აღება შესაძლებელია შეთანხმებისამებრ'
            }
          }
        }
      }
    }
  },

  Polycam: {},

  ProductRowMid: {
    props: { margin: 'C1 - -' },

    SectionTitle: {
      text: 'Related'
    },
    Grid: {
      props: {
        columns: 'repeat(9, 1fr)'
      },
      $propsCollection: [{
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/12ub0rxv/17c3d116-caf5-49dd-a197-19da8b719711.png?v=7b927c17cd6c05a85e665b1c2ef1f96b' }
      }, {
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/Bluqd1jR/c996b919-3ee7-4382-b48e-0d1538818c9f.png?v=dbf6588e14144623488cafc49708bedf' }
      }, {
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/7Kunq8Br/73ecee1a-1433-4892-9d29-811a6e215f5e.png?v=e79203942e6fec2fa6d07de18a48727a' }
      }]
    }
  },

  Footer: {}
}
