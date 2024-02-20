
export const LoadingLogo = {
  props: { flexAlign: 'center center' },

  Flex: {
    props: {
      align: 'center start',
      textAlign: 'center',
      width: '100%',
      maxWidth: 'G',
      height: 'C1',
      transition: 'G default',
      transitionProperty: 'max-width, transform, opacity',
      overflow: 'hidden',
      transform: 'scale(1)',
      '!render': {
        transform: 'scale(.9)',
        maxWidth: '0'
      },

      '.loaded': {
        opacity: '0'
      }
    },

    Img: {
      height: '100%',
      src: new URL('../assets/imgloading.svg', import.meta.url).pathname,

      onLoad: (ev, el, s) => {
        s.update({ render: true })
      }
    }
  }
}

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

    '.loaded': {
      pointerEvents: 'none',
      opacity: 0,
      visibility: 'hidden'
    }
  },

  LoadingLogo: {
    flex: 1
  },

  LightFooter: {}
}
