import { useLocation, Navigate, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import Register from './register/Register'
import Login from './Login/Login'

function Auth() {
  const location = useLocation()
  const isLogin = location.pathname === '/auth/login'
  const isRegister = location.pathname === '/auth/register'

  if (location.pathname === '/auth') {
    return <Navigate to="/auth/login" replace />
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }}>
      {isLogin && <Login />}
      {isRegister && <Register />}
    </Box>
  )
}

export default Auth
