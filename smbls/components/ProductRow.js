
export const ProductRowLarge = {
  extend: 'Grid',

  props: {
    columns: 'repeat(2, 1fr)',
    padding: 'B1 B1 B1 -',
    gap: 'A',
    '@tabletS': {
      padding: 'B1 B1 B1 B1',
      columns: 'repeat(1, 1fr)'
    }
  },

  childExtend: 'ProductItemLarge',

  $propsCollection: [{
    // Img: { src: 'https://share.zight.com/E0uJon0N' }
  }, {
    Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/9Zu4DBeX/5bf7e9dd-f978-412a-bb8d-79eac379d167.png?v=39749525be280da55259d24a856f0e99' }
  }]
}

export const ProductRowMid = {
  props: {
    padding: 'B1 B1 B1 -',
    '@tabletS': {
      padding: 'B1 B1 B1 B1'
    }
  },

  SectionTitle: {
    text: 'NEW ARRIVALS',
    fontWeight: '300'
  },

  Grid: {
    props: {
      gap: 'A',
      columns: 'repeat(6, 1fr)',
      '@tabletM': {
        columns: 'repeat(4, 1fr)'
      },
      '@tabletS': {
        columns: 'repeat(3, 1fr)'
      },
      '@mobileL': {
        columns: 'repeat(2, 1fr)'
      }
    },

    childExtend: 'ProductItem'
  }
}

export const ProductRow = {
  extend: 'Flex',

  props: {
    flow: 'column',
    gap: 'B1'
  },

  ProductRowLarge: {},

  ProductRowMid: {
    props: {},
    SectionTitle: {},
    Grid: {
      $propsCollection: [{
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/12ub0rxv/17c3d116-caf5-49dd-a197-19da8b719711.png?v=7b927c17cd6c05a85e665b1c2ef1f96b' }
      }, {
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/Bluqd1jR/c996b919-3ee7-4382-b48e-0d1538818c9f.png?v=dbf6588e14144623488cafc49708bedf' }
      }, {
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/7Kunq8Br/73ecee1a-1433-4892-9d29-811a6e215f5e.png?v=e79203942e6fec2fa6d07de18a48727a' }
      }, {
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/KouKYwOv/f328f184-2351-4472-bf9a-d4aeaa15f226.png?v=3db1c2cc365cdbb361a4684d92dca005' }
      }, {
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/DOuJm9ee/1a994391-0dd1-4e7b-bba6-1da4b54d666f.png?v=bd80fb8261de67040ea62d43931e703a' }
      }, {
        Img: { src: 'https://p194.p3.n0.cdn.zight.com/items/P8uw6yvp/11e3918b-d828-4709-8174-10953ed9e140.png?v=daa125996b73e76dec7172e6a47810cb' }
      }]
    }
  }
}
