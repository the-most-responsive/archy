
export const TakeIt = {
  extend: 'Button',

  props: {
    theme: null,
    position: 'relative',
    background: 'transparent',
    icon: 'plus',
    gap: 'X',
    padding: 'Z2 A',
    text: ({ state }) => state.__root.lang === 'en' ? 'take it' : 'აიღე',

    onClick: (ev, el, s) => s.__root.toggle('openCart')
  }
}
