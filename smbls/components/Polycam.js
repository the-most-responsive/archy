
export const Polycam = {
  props: {
    background: '#f6f4f3',
    position: 'relative'
  },

  Iframe: (el, state) => ({
    background: 'white .05',
    src: 'https://poly.cam/capture/195D64EF-24DB-4F68-A3ED-489CBB18D278',
    allowfullscreen: '',
    loading: 'lazy',
    title: 'polycam capture viewer',
    referrerpolicy: 'no-referrer-when-downgrade',
    flex: '1',
    minWidth: '0',
    minHeight: 'I',
    width: '100%',
    border: '0'
  }),

  Switcher: {
    props: {
      pointerEvents: 'none',
      flexAlign: 'center center',
      position: 'absolute',
      width: '100%',
      padding: 'B1',
      zIndex: 2,
      background: '#f6f4f3',
      bottom: '0'
    },

    childExtend: {
      extend: 'Button',
      props: ({ state, key }) => ({
        active: state.view === key,
        pointerEvents: 'auto',
        theme: 'none',
        '.active': {
          theme: 'secondary'
        },
        onClick: (ev, el, s) => s.update({ view: el.key })
      })
    },

    360: { text: '360°' },
    '3d-mockup': { text: '3d mockup' }
  }
}
