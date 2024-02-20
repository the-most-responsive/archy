import IMGS from '../assets/imgs'
import imagesLoaded from 'imagesloaded'

const RATIO_FULL = 1800

const preloadImages = (selector = 'img', el) => {
  return new Promise((resolve) => {
    // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
    console.log(el)
    console.log(selector, document.querySelectorAll(selector))
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve)
  })
}

export const Stripe = {
  props: {
    flexFlow: 'row',
    flex: 1,
    position: 'absolute',
    inset: '0',
    boxSize: '100%',
    userSelect: 'none',
    class: 'stripe',

    '!loaded': {
      '& picture': {
        widthRange: '0'
      }
    },

    onInit: (el, s) => {
      s.loaded = false
    },

    onRender: (el, s) => {
      preloadImages('.stripe img', el).then(() => {
        el.setProps({ loaded: true })
      })
    }
  },

  childExtend: {
    extend: 'Picture',

    props: ({ props, key }) => ({
      transition: 'G default min-width, G default max-width, E default filter 0s, E default opacity 0s',
      transitionDelay: parseInt(key) * 35 + 'ms',
      height: '100%',
      widthRange: `${props.ratio / RATIO_FULL * 100}%`,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: `${(props.offset || 0) / RATIO_FULL * 100}%`,
      ':not(:hover)': {
        opacity: '.5',
        mixBlendMode: 'luminosity'
      }
    }),

    Img: ({ key }) => ({
      class: 'sprite-img',
      transformOrigin: '50% 50%',
      position: 'absolute',
      height: '100%',
      pointerEvents: 'none',
      src: IMGS[key],
      transition: 'G transform default',
      transform: 'translate3d(-50%, 0, 1px)'

      // onRender: (el, s) => {
      //   preloadImages('.sprite-img', el).then(() => {
      //     console.log(2)
      //     // s.update({ loaded: true })
      //   })
      // }

      // '.loaded': {
      //   transform: 'scale(1) rotateZ(0deg)'
      // }
      // '!loaded': {
      // transform: 'scale(1.3) rotateZ(35deg)'
      // }
    })
  },

  $propsCollection: [{
    ratio: 194,
    Img: { left: '50%' }
  }, {
    ratio: 357,
    offset: 207,
    Img: { left: '50%' }
  }, {
    ratio: 194,
    offset: 594,
    Img: { left: '50%' }
  }, {
    ratio: 233,
    offset: 801,
    Img: { left: '50%' }
  }, {
    ratio: 135,
    offset: 1129,
    Img: { left: '50%' }
  }, {
    ratio: 195,
    offset: 1345,
    Img: { left: '50%' }
  }, {
    ratio: 236,
    offset: 1562,
    Img: { left: '50%' }
  }]
}
