import { useLocation, Navigate, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import Register from './Register/register'
import Login from './Login/Login'

function Auth() {
  const location = useLocation()
  const isLogin = location.pathname === 'auth/login'
  const isRegister = location.pathname === 'auth/register'

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: 'url("src/assets/auth/login-register-bg.jpg") no-repeat center/cover',
      boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.2)'
    }}>
      {isLogin && <Login />}
      {isRegister && <Register />}
      <Outlet />
    </Box>
  )
}

export default Auth
