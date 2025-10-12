import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'

const AppFooter = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.vars.palette.background.default,
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Author - NguyenTieuBoiCoder - nguyentieuboi1999@gmail.com
      </Typography>
    </Box>
  )
}

export default AppFooter
