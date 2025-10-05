
import { extendTheme } from '@mui/material/styles'
import typography from '~/utilities/Typography'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#5D87FF' },
        background: { default: '#f9f9f9', paper: '#fff' }
      }
    },
    dark: {
      palette: {
        primary: { main: '#5D87FF' },
        background: { default: '#121212', paper: '#1e1e1e' }
      }
    }
  },
  palette: {
    primary: {
      main: '#5D87FF',
      light: '#ECF2FF',
      dark: '#4570EA',
      contrastText: '#ffffff',
      transparent: '#ffffff00'
    },
    secondary: {
      main: '#49BEFF',
      light: '#E8F7FF',
      dark: '#23afdb',
      contrastText: '#ffffff'
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
    },
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
  typography,
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '16px'
        }
      }
    }
  }
})

export default theme