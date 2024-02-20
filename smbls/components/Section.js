
export const Section = {
}

export const SectionTitle = {
  tag: 'h6',
  props: {
    margin: 'Z2 0',
    textTransform: 'uppercase',
    text: 'NEW ARRIVALS',
    fontWeight: '300',
    fontSize: 'Z1',
    opacity: '.5'
  }
}

export const SectionHgroup = {
  extend: 'Hgroup',

  props: {
    padding: 'B1 -',
    gap: 'X2'
  },

  H4: {
    fontFamily: 'Code',
    margin: '0',
    fontWeight: '300',
    text: 'New arrivals'
  },
  Span: {
    fontFamily: 'Code',
    opacity: '0.5',
    text: 'Sprint 23/'
  }
}
