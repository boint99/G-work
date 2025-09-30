import { createTheme } from "@mui/material/styles"
import typography from '~/utilities/Typography'

const theme = createTheme({
  typography,
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "16px",
        },
      },
    },
  },
})

export default theme