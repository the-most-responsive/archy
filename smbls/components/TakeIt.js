
export const TakeIt = {
  extend: 'Button',

  props: {
    theme: null,
    background: 'transparent',
    icon: 'plus',
    text: 'take it',
    gap: 'X',
    padding: 'Z A',

    onClick: (ev, el, s) => {
      s.update({ active: true })
    }
  }
}
