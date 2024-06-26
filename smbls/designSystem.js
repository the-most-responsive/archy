import DEFAULT_CONFIG from '@symbo.ls/default-config'

export default {
  version: '0.0.1',
  globalTheme: 'light',
  useDefaultConfig: true,
  COLOR: {
    transparent: 'rgba(0, 0, 0, 0)',
    black: 'black',
    blue: '#0e80fd',
    indigo: '#50E1FF',
    green: '#59AC56',
    red: '#FE5B47',
    yellow: '#EDCB38',
    orange: '#E2862F',
    brown: '#7D6755',
    pink: '#FD8ABF',
    purple: '#7345AF',
    white: 'white',
    gray: '#141416'
  },
  GRADIENT: {
    'gradient-dark': `linear-gradient(0deg,
    rgba(0,0,0,0.06) 0%,
    rgba(0,0,0,0.07) 100%
  )`,
    'gradient-dark-active': `linear-gradient(0deg,
    rgba(0,0,0,0.09) 0%,
    rgba(0,0,0,0.1) 100%
  )`,
    'gradient-light': `linear-gradient(
    0deg,
    rgba(255,255,255,0.05) 0%,
    rgba(255,255,255,0.06) 100%
  )`,
    'gradient-light-active': `linear-gradient(
    0deg,
    rgba(255,255,255,0.09) 0%,
    rgba(255,255,255,0.10) 100%
  )`,
    'gradient-colorful': `linear-gradient(60deg,
    #00A2E7 0%,
    #185DF3 31%,
    #1E54F0 36%,
    #8B4CCA 69%,
    #C66894 100%
  )`
  },
  THEME: {
    document: {
      '@light': {
        color: 'black',
        background: 'white'
      },
      '@dark': {
        color: 'white',
        background: 'black'
      }
    },
    primary: {
      '@light': {
        color: 'black',
        background: 'white'
      },
      '@dark': {
        color: 'white',
        background: 'black'
      }
    },
    secondary: {
      '@light': {
        color: 'white',
        background: 'black'
      },
      '@dark': {
        color: 'black',
        background: 'white'
      }
    },
    dialog: {
      '@light': {
        color: 'black',
        background: '#e8e8e8'
      }
    },
    alert: {
      '@dark': {
        color: 'white',
        background: 'red'
      }
    },
    warning: {
      '@dark': {
        color: 'black',
        background: 'yellow'
      }
    },
    none: {
      color: 'none',
      background: 'none'
    },
    transparent: {
      color: 'transparent',
      background: 'transparent'
    }
  },
  TYPOGRAPHY: {
    base: 16,
    ratio: 1.125,
    subSequence: true,
    templates: {
      h1: {
        fontSize: 'var(--font-size-G)'
      },
      h2: {
        fontSize: 'var(--font-size-F)'
      },
      h3: {
        fontSize: 'var(--font-size-E)'
      },
      h4: {
        fontSize: 'var(--font-size-D)'
      },
      h5: {
        fontSize: 'var(--font-size-C)'
      },
      h6: {
        fontSize: 'var(--font-size-B)'
      },
      body: {
      }
    },
    '@tabletS': {
      base: 16,
      ratio: 1.1
    }
  },
  SPACING: {
    base: 16,
    ratio: 1.618,
    subSequence: true,
    '@tabletS': {
      base: 16,
      ratio: 1.2
    }
  },
  FONT: {
  },
  FONT_FAMILY: {
    UI: {
      isDefault: true,
      value: [
        '"Avenir Next"'
      ],
      type: 'sans-serif'
    },
    GE: {
      value: [
        '"AR Archy"'
      ],
      type: 'sans-serif'
    },
    Code: {
      value: [
        '"Basier Square Mono"'
      ],
      type: 'sans-serif'
    },
    system: {
      value: [
        '"Helvetica Neue"',
        'Helvetica',
        'Arial'
      ],
      type: 'sans-serif'
    }
  },
  TIMING: {
    default: 'cubic-bezier(.29, .67, .51, .97)'
  },
  ICONS: {
    ...DEFAULT_CONFIG.ICONS,
    logo: '<svg xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 132 132"><path fill-rule="evenodd" d="M93.2617733,63.7086828 L93.2617733,53 L89.3378787,53 L89.3378787,64.0078621 L89.3378787,67.9919586 L89.3378787,79 L93.2617733,79 L93.2617733,67.9919586 L104.545892,67.9919586 L104.545892,79 L108.469875,79 L108.469875,67.9919586 L108.469875,64.0078621 L93.2617733,64.0078621 L93.2617733,63.7086828 Z M12.3366336,53 L1,79 L4.89936974,79 L4.93589051,79 L4.98334085,79 L9.85108858,68.0014621 L16.2360922,68.0014621 L16.2360922,64.0149448 L11.585603,64.0149448 L16.352852,53 L12.3366336,53 Z M43.2040862,67.7018857 L43.0225308,67.2898653 C45.5169498,66.0844469 47.2402831,63.5097837 47.2402831,60.5277429 C47.2402831,56.3906918 43.9237487,53.0369571 39.8324555,53.0369571 L32.9313827,53.0369571 L32.9313827,57.0146918 L39.8324555,57.0146918 C41.7512495,57.0146918 43.306539,58.5875592 43.306539,60.5277429 C43.306539,62.4680592 41.7512495,64.0407938 39.8324555,64.0407938 L37.9137928,64.0407938 L31.0688657,64.0407938 L31.0688657,64.0425184 L29,64.0425184 L29,78.9848245 L32.9313827,78.9848245 L32.9313827,68.0186612 L39.2956603,68.0186612 L44.1542348,78.9686408 L44.0610959,78.9686408 L44.0610959,78.9848245 L47.9069482,78.9848245 L47.9069482,78.9686408 L48.1681308,78.9686408 L44.3222785,70.239804 L43.2040862,67.7018857 Z M72.9386698,74.8866602 C67.9582187,74.8866602 63.9207631,70.7348882 63.9207631,65.6134212 C63.9207631,61.4757366 66.5568934,57.9721148 70.1958705,56.7785283 L68.5709661,53 C63.5298656,54.8459766 59.9206813,59.7959348 59.9206813,65.6134212 C59.9206813,73.006628 65.7490298,79 72.9386698,79 C75.1571689,79 77.2458567,78.4287142 79.0738574,77.422365 L77.4482881,73.642469 C76.1214446,74.4323123 74.5820616,74.8866602 72.9386698,74.8866602 Z M130.185783,65.9837724 L124.529417,53 L124.180382,53 L120.515865,53 L126.14655,66 L120.515865,79 L124.180382,79 L124.529417,79 L130.2,66.0163172 L130.185783,65.9837724 Z"/></svg>',
    cart: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15" viewBox="0 0 15 15"><defs><rect id="a" width="15" height="15" x="0" y="0"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path fill="#000" fill-rule="nonzero" d="M-8,-2 L-8,-0.779499404 L-5.55899881,-0.779499404 C-5.29678158,-0.779499404 -5.07270499,-0.607866508 -4.98688915,-0.359952324 L-3.84743712,9.80929648 C-3.74255096,10.7294392 -2.951132,11.4350411 -2.026222,11.4350411 L5.42550656,11.4350411 L5.42550656,10.2145405 L-2.026222,10.2145405 C-2.3408817,10.2145405 -2.59833165,9.98569665 -2.6317038,9.67580422 L-2.70798509,8.99403991 L5.03456557,8.99403991 C5.9022646,8.99403991 6.6603102,8.37425507 6.83194309,7.52562513 L8,1.67103634 L-3.53277742,1.67103634 L-3.79499343,-0.655542923 L-3.81406375,-0.712753888 C-4.04767611,-1.47556676 -4.75804529,-1.99523272 -5.55899881,-2 L-8,-2 Z M4.20500596,11.4350411 C3.53277742,11.4350411 2.98450536,11.9833132 2.98450536,12.6555417 C2.98450536,13.3277702 3.53277742,13.8760423 4.20500596,13.8760423 C4.8772345,13.8760423 5.42550656,13.3277702 5.42550656,12.6555417 C5.42550656,11.9833132 4.8772345,11.4350411 4.20500596,11.4350411 Z M-1.89749702,11.4350411 C-2.56972556,11.4350411 -3.11799762,11.9833132 -3.11799762,12.6555417 C-3.11799762,13.3277702 -2.56972556,13.8760423 -1.89749702,13.8760423 C-1.22526848,13.8760423 -0.676996424,13.3277702 -0.676996424,12.6555417 C-0.676996424,11.9833132 -1.22526848,11.4350411 -1.89749702,11.4350411 Z M-3.39451667,2.89153693 L6.5125149,2.89153693 L5.6352801,7.28247823 C5.57330185,7.57330155 5.33015495,7.77353932 5.03456557,7.77353932 L-2.84624584,7.77353932 L-3.39451667,2.89153693 Z" mask="url(#b)"/></g></svg>'
  },
  MEDIA: {
    tv: '(min-width: 2780px)',
    screenL: '(max-width: 1920px)',
    screenM: '(max-width: 1680px)',
    screenS: '(max-width: 1440px)',
    tabletL: '(max-width: 1366px)',
    tabletM: '(max-width: 1280px)',
    tabletS: '(max-width: 1024px)',
    mobileL: '(max-width: 768px)',
    mobileM: '(max-width: 560px)',
    mobileS: '(max-width: 480px)',
    mobileXS: '(max-width: 375px)',
    light: '(prefers-color-scheme: light)',
    dark: '(prefers-color-scheme: dark)',
    print: 'print'
  },
  DEVICES: {
  },
  CASES: {
  },
  SVG: {
  },
  RESET: {
    'body, html': {
      overflow: 'hidden'
    }
  }
}
