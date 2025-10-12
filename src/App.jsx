import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from '~/routes/routes'
import Loading from '~/components/Loading/Loading'
import { CssBaseline, CssVarsProvider } from '@mui/material'
import theme from '~/theme'

const router = createBrowserRouter(routes)

export default function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </CssVarsProvider>
  )
}
