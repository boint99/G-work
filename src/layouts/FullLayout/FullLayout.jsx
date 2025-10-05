import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

const FullLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <Sidebar />
      </Box>
      <Box width='100%'>
        <Header/>
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </Box>
  )
}

export default FullLayout
