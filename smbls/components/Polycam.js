
export const Polycam = {
  props: {
    background: '#f6f4f3',
    position: 'relative'
  },

  Iframe: {
    props: (el, state) => ({
      background: 'white .05',
      src: state.view === '360' ? 'https://poly.cam/capture/0AF39C3B-E953-426F-8AF5-82284C113346' : state.view === 'room' ? 'https://poly.cam/capture/9E19E3FA-DB29-4F79-BE22-EC8CAA4FFA09' : 'https://poly.cam/capture/1FAA00D4-032D-4030-AA17-28B87C27A8BC',
      allowfullscreen: '',
      loading: 'lazy',
      referrerpolicy: 'no-referrer-when-downgrade',
      flex: '1',
      minWidth: '0',
      minHeight: 'I',
      width: '100%',
      border: '0'
    })
  },

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
        onClick: (ev, el, s) => s.update({ view: el.key !== s.view ? el.key : null })
      })
    },

    360: { text: '360°' },
    '3d-mockup': { text: '3d mockup' },
    room: { text: 'room' }
  }
}
