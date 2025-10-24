import { Outlet, Navigate, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'

function Management() {
  const location = useLocation()

  if (location.pathname === '/management') {
    return <Navigate to="/management/users" replace />
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Outlet /> {/* Render component con tùy theo route */}
    </Box>
  )
}

export default Management