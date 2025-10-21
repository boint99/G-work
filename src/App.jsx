import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from '~/routes/routes'
import Loading from '~/components/Loading/Loading'
import { CssBaseline, CssVarsProvider } from '@mui/material'
import theme from '~/theme'
import { ToastContainer, Bounce } from 'react-toastify'
const router = createBrowserRouter(routes)

const ToastContainerCustomize = () => (
  <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
  />
)

export default function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <ToastContainerCustomize />
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </CssVarsProvider>
  )
}
