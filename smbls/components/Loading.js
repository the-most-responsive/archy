
let logoLoad
export const LoadingLogo = {
  props: { flexAlign: 'center center' },

  Flex: {
    props: {
      align: 'center start',
      textAlign: 'center',
      width: '100%',
      maxWidth: 'G',
      height: 'C1',
      transition: 'G default, G default, E default',
      transitionProperty: 'max-width, transform, opacity',
      overflow: 'hidden',
      transform: 'scale(1)',

      '!init': {
        opacity: '0',
        transform: 'scale(.9)',
        maxWidth: '0'
      },

      '.render': {
        transform: 'translate3d(-5%, 0, 0)',
        opacity: '0'
      }
    },

    Img: {
      height: '100%',
      src: new URL('../assets/imgloading.svg', import.meta.url).pathname,

      onLoad: (ev, el, s) => {
        el.parent.setProps({ init: true })
        if (logoLoad) return
        logoLoad = true
        setTimeout(() => {
          s.update({ init: true })
        }, 750)
      }
    }
  }
}

let loaded
export const Loading = {
  extend: 'Flex',

  props: {
    flow: 'y',
    theme: 'document',
    zIndex: 999,
    position: 'fixed',
    inset: '0',

    transition: 'D default',
    transitionProperty: 'opacity, visibility',
    pointerEvents: 'auto',
    opacity: 1,
    visibility: 'visible',

    '.render': {
      pointerEvents: 'none',
      opacity: 0,
      visibility: 'hidden'
    },

    onUpdate: (el, s) => {
      if (!s.init || !s.stripeLoaded || loaded) return
      loaded = true
      s.update({ render: true })
    }
  },

  LoadingLogo: {
    flex: 1
  },

  LightFooter: {}
}
