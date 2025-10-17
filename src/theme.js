import { extendTheme } from '@mui/material/styles'
const FamilyFont = '"Roboto", "Helvetica", "Arial", sans-serif'

const theme = extendTheme({
  colorSchemeSelector: 'class',
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: {
          default: '#ffffff',
          paper: '#ffffff',
          pageHeader: '#EBF3FE'
        },
        text: {
          primary: '#000000',
          secondary: '#f6f6f6'
        },
        divider: '#DFE5EF',
        primary: {
          main: '#539BFF',
          light: '#ffffff',
          dark: '#1682d4'
        },
        secondary: {
          main: '#49BEFF',
          light: '#E8F7FF',
          dark: '#23afdb',
          contrastText: '#ffffff'
        },
        action: {
          hover: 'rgba(83, 155, 255, 0.08)',
          active: 'rgba(83, 155, 255, 0.12)'
        },
        success: {
          main: '#13DEB9',
          light: '#E6FFFA',
          dark: '#02b3a9',
          contrastText: '#ffffff'
        },
        info: {
          main: '#539BFF',
          light: '#EBF3FE',
          dark: '#1682d4',
          contrastText: '#ffffff'
        },
        error: {
          main: '#FA896B',
          light: '#FDEDE8',
          dark: '#f3704d',
          contrastText: '#ffffff'
        },
        warning: {
          main: '#FFAE1F',
          light: '#FEF5E5',
          dark: '#ae8e59',
          contrastText: '#ffffff'
        }
      }
    },
    dark: {
      palette: {
        mode: 'dark',
        background: {
          default: '#212121',
          paper: '#181818',
          pageHeader: '#181818'
        },
        text: {
          primary: '#ffffff',
          secondary: '#B2BAC2'
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        primary: {
          main: '#539BFF',
          light: '#E8F7FF',
          dark: '#1682d4'
        },
        secondary: {
          main: '#49BEFF',
          light: '#E8F7FF',
          dark: '#23afdb',
          contrastText: '#ffffff'
        },
        action: {
          hover: 'rgba(83, 155, 255, 0.12)',
          active: 'rgba(83, 155, 255, 0.16)'
        },
        success: {
          main: '#13DEB9',
          light: '#E6FFFA',
          dark: '#02b3a9',
          contrastText: '#ffffff'
        },
        info: {
          main: '#539BFF',
          light: '#EBF3FE',
          dark: '#1682d4',
          contrastText: '#ffffff'
        },
        error: {
          main: '#FA896B',
          light: '#FDEDE8',
          dark: '#f3704d',
          contrastText: '#ffffff'
        },
        warning: {
          main: '#FFAE1F',
          light: '#FEF5E5',
          dark: '#ae8e59',
          contrastText: '#ffffff'
        }
      }
    }
  },
  palette: {
    purple: {
      A50: '#EBF3FE',
      A100: '#6610f2',
      A200: '#557fb9'
    },
    grey: {
      100: '#F2F6FA',
      200: '#EAEFF4',
      300: '#DFE5EF',
      400: '#7C8FAC',
      500: '#5A6A85',
      600: '#2A3547',
      700: '#dfe5ef'
    }
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'background-color 0.3s ease, color 0.3s ease'
        },
        a: {
          // color: '#000000',
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: 400,
          '&:hover': {
            textDecoration: 'none'
          }
        }
      }
    },
    Typography: {
      fontFamily: FamilyFont,
      h1: {
        fontWeight: 600,
        fontSize: '2.25rem',
        lineHeight: '2.75rem'
      },
      h2: {
        fontWeight: 600,
        fontSize: '1.875rem',
        lineHeight: '2.25rem'
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: '1.75rem'
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.3125rem',
        lineHeight: '1.6rem'
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: '1.6rem'
      },
      h6: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: '1.2rem'
      },
      button: {
        textTransform: 'capitalize',
        fontWeight: 400
      },
      body1: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.334rem'
      },
      body2: {
        fontSize: '0.75rem',
        letterSpacing: '0rem',
        fontWeight: 400,
        lineHeight: '1rem'
      },
      subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 400
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 400
      }
    }
  },
  SIDEBARLAYOUT: {
    DRAWERWIDTH: 250,
    COLLAPSEDWIDTH: 60
  }
})

export default theme
