import React, { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Box, LinearProgress } from '@mui/material'
import AppHeader from '../Header/Header'
import AppFooter from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import theme from '~/theme'
import Loading from '~/components/Loading/Loading' // vẫn giữ để fallback cho lazy import

const FullLayout = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  // Khi route thay đổi → bật hiệu ứng loading
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <Box
      sx={{
        display: 'flex',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <Sidebar />

      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <AppHeader />
        {isLoading && (
          <LinearProgress
            color="primary"
            sx={{
              height: 3,
              borderRadius: 2,
              position: 'sticky',
              top: 0,
              zIndex: 1200,
              transition: 'opacity 0.3s ease'
            }}
          />
        )}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            background: theme.palette.background.secondary,
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
        >
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Box>

        <AppFooter />
      </Box>
    </Box>
  )
}

export default FullLayout
