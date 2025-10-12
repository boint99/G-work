import React from 'react'
import {
  Box,
  Toolbar,
  Stack,
  IconButton,
  Badge
} from '@mui/material'
import { IconBellRinging } from '@tabler/icons-react'
import { useTheme, useColorScheme } from '@mui/material/styles'

import Profile from './Profile'
import ModeSelect from './ModeSelect'

const Header = () => {
  const theme = useTheme()
  const { mode } = useColorScheme()

  return (
    <Box
      position='sticky'
      component='header'
      sx={{
        boxShadow: 'none',
        justifyContent: 'center',
        backdropFilter: 'blur(6px)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        minHeight: 0,
        bgcolor: theme.vars.palette.background.default,
        color: theme.palette.text.primary,
        borderBottom: theme.palette.mode === 'dark'
          ? `1px solid ${theme.vars.palette.background.paper}`
          : 'none',
        width: '100%',
        zIndex: theme.zIndex.appBar
      }}
    >
      <Toolbar
        sx={{
          color: theme.palette.text.primary,
          width: '100%',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          px: 2
        }}
      >
        <Box flexGrow={1} />
        <ModeSelect />
        <IconButton
          aria-label='show notifications'
          sx={{
            color: theme.vars.palette.text.primary,
            ':hover': { backgroundColor: theme.vars.palette.action.hover }
          }}
        >
          <Badge variant='dot' color='primary'>
            <IconBellRinging size='21' stroke='1.5' />
          </Badge>
        </IconButton>

        <Stack spacing={1} direction='row' alignItems='center'>
          <Profile />
        </Stack>
      </Toolbar>
    </Box>
  )
}

export default Header
