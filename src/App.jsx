// App.jsx
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CssBaseline, CssVarsProvider } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'

import routes from '~/routes/routes'
import theme from '~/theme'
import Loading from '~/components/Loading/Loading'
import { ToastContainerCustomize } from './utilities/ToastContainerCustomize'

// Tạo router
const router = createBrowserRouter(routes)

export default function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <ToastContainerCustomize />
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </CssVarsProvider>
  )
}
