import React from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge
} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { IconBellRinging } from '@tabler/icons-react'
import { useTheme } from '@mui/material/styles'

import Profile from './Profile'
import ModeSelect from './ModeSelect'

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  justifyContent: 'center',
  backdropFilter: 'blur(4px)',
  backgroundColor: theme.palette.background.paper,
  transition: 'background-color 0.3s ease',
  minHeight: '64px'
}))

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: '100%'
}))

const Header = () => {
  const theme = useTheme()

  return (
    <AppBarStyled position='sticky' color='default'>
      <ToolbarStyled>
        <Box
          sx={{
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&.close': {
              transform: 'rotate(180deg)'
            },
            '&.open': {
              transform: 'rotate(0deg)'
            }
          }}>
          <ArrowForwardIosIcon />
        </Box>
        <Box flexGrow={1} />
        <ModeSelect />
        <IconButton
          aria-label='show notifications'
          color='inherit'
          sx={{
            ':hover': {
              backgroundColor: theme.palette.action.hover
            }
          }}
        >
          <Badge variant='dot' color='primary'>
            <IconBellRinging size='21' stroke='1.5' />
          </Badge>
        </IconButton>
        <Stack spacing={1} direction='row' alignItems='center'>
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  )
}

export default Header