import { useState } from 'react'
import { Link } from 'react-router'
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText, Typography
} from '@mui/material'

import { IconDashboard, IconMail, IconUser, IconMoon } from '@tabler/icons-react'

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null)
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main'
          })
        }}
        onClick={handleClick2}
      >
        <Avatar
        //   src={ProfileImg}
        //   alt={ProfileImg}
          sx={{
            width: 35,
            height: 35
          }}
        />
      </IconButton>
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '200px'
          }
        }}
      >
        <MenuItem>
          <Link to='/'>
            <Box display='flex' alignItems='center'>
              <ListItemIcon>
                <IconUser width={20} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant='subtitle1' color='textPrimary'>
                  My Profile
                </Typography>
              </ListItemText>
            </Box>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/'>
            <Box display='flex' alignItems='center'>
              <ListItemIcon>
                <IconMail width={20} />
              </ListItemIcon>
              <ListItemText><Typography variant='subtitle1' color='textPrimary'>Performance</Typography></ListItemText>
            </Box>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/'>
            <Box display='flex' alignItems='center'>
              <ListItemIcon>
                <IconDashboard width={20} />
              </ListItemIcon>
              <ListItemText><Typography variant='subtitle1' color='textPrimary'>My Dashboard</Typography></ListItemText>
            </Box>
          </Link>
        </MenuItem>
        <Box mt={1} py={1} px={2}>
          <Button to="/" variant="outlined" color="primary" component={Link} fullWidth>
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  )
}

export default Profile
