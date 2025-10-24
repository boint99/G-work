import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'

function Auth() {
  const location = useLocation()

  if (location.pathname === '/auth') {
    return <Navigate to="/auth/login" replace />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      <Outlet />
    </Box>
  )
}

export default Auth
