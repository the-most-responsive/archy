
export const TakeIt = {
  extend: 'Button',

  props: {
    theme: null,
    position: 'relative',
    background: 'transparent',
    icon: 'plus',
    text: 'take it',
    gap: 'X',
    padding: 'Z2 A',

    onClick: (ev, el, s) => {
      s.update({ active: true })
    }
  }
}
