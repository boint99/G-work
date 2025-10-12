import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

const Dashboard = () => {
  const theme = useTheme()
  const { mode } = useColorScheme()

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow:
          theme.palette.mode === 'light'
            ? '0 1px 3px rgba(0,0,0,0.1)'
            : '0 1px 3px rgba(255,255,255,0.05)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <Typography variant="h5">Welcome to Dashboard</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Current theme mode: <strong>{mode}</strong>
      </Typography>
    </Box>
  )
}

export default Dashboard
