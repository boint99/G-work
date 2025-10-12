import { Box } from '@mui/material'
import React from 'react'
import './loading.css'

function Loading() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.89)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        zIndex: 1300
      }}
    >
      <span className="loader"></span>
    </Box>
  )
}

export default Loading
