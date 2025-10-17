import React, { useState, useEffect } from 'react'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Tooltip,
  useTheme
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdOutlineMail, MdExpandMore } from 'react-icons/md'
import { TfiDashboard } from 'react-icons/tfi'
import { BsChatDots } from 'react-icons/bs'
import { IconLayoutSidebarRightExpand, IconUserCog, IconCloudCode, IconUsersGroup, IconWifi } from '@tabler/icons-react'
import Gwork from '~/assets/images/GWork-Logo.png'


const menuSections = [
  {
    title: 'HOME',
    items: [
      { text: 'Dashboard', icon: <TfiDashboard />, path: '/dashboard' }
    ]
  },
  {
    title: 'WORKS',
    items: [
      { text: 'Internet Protocol', icon: <IconWifi />, path: '/ip-address' },
      {
        text: 'Hosting',
        icon: <IconCloudCode />,
        path: '/hosting',
        isCollapsible: true,
        subItems: [
          { text: 'Email', icon: <MdOutlineMail />, path: '/emails' },
          { text: 'GroupMail', icon: <IconUsersGroup />, path: '/groupmails' }
        ]
      },
      { text: 'Messages', icon: <BsChatDots />, path: '/messages' }
    ]
  },
  {
    title: 'Management',
    items: [
      {
        text: 'Users',
        icon: <IconUserCog />,
        path: '/users'
      }
    ]
  }
]

const Sidebar = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const [expandedItems, setExpandedItems] = useState({})
  const [open, setOpen] = useState(true)

  useEffect(() => {
    menuSections.forEach(section => {
      section.items.forEach(item => {
        if (item.isCollapsible && item.subItems) {
          const isChildActive = item.subItems.some(sub => location.pathname.startsWith(sub.path))
          if (isChildActive) {
            setExpandedItems(prev => ({ ...prev, [item.text]: true }))
          }
        }
      })
    })
  }, [location])

  const toggleCollapse = (itemText) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemText]: !prev[itemText]
    }))
  }

  const isActive = (path) => location.pathname.startsWith(path)

  const MenuItem = ({ item, depth = 0 }) => {
    const active = isActive(item.path)
    const isExpanded = expandedItems[item.text]

    const handleClick = () => {
      if (item.isCollapsible) {
        toggleCollapse(item.text)
      } else {
        navigate(item.path)
      }
    }

    const content = (
      <ListItemButton
        selected={active}
        onClick={handleClick}
        sx={{
          borderRadius: '8px',
          minHeight: 44,
          pl: open ? (depth > 0 ? 4 : 2) : 2,
          justifyContent: open ? 'initial' : 'center',
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main
          },
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          },
          transition: 'all 0.25s ease'
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 2 : 'auto',
            color: theme.vars.palette.text.primary,
            fontSize: '18px',
            justifyContent: 'center'
          }}
        >
          {item.icon}
        </ListItemIcon>

        {open && (
          <ListItemText
            primary={item.text}
            sx={{
              '& .MuiTypography-root': {
                fontSize: '14px',
                fontWeight: 500
              }
            }}
          />
        )}

        {item.isCollapsible && open && (
          <Box sx={{ ml: 'auto' }}>
            <MdExpandMore
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease'
              }}
            />
          </Box>
        )}
      </ListItemButton>
    )

    return (
      <Box key={item.text}>
        <ListItem disablePadding>{open ? content : <Tooltip title={item.text}>{content}</Tooltip>}</ListItem>

        {item.isCollapsible && item.subItems && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.subItems.map((sub) => (
                <MenuItem key={sub.text} item={sub} depth={depth + 1} />
              ))}
            </List>
          </Collapse>
        )}
      </Box>
    )
  }

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: open ? theme.SIDEBARLAYOUT.DRAWERWIDTH : theme.SIDEBARLAYOUT.COLLAPSEDWIDTH,
        flexShrink: 0,
        padding: '10px',
        whiteSpace: 'nowrap',
        border: 'none',
        '& .MuiDrawer-paper': {
          width: open ? theme.SIDEBARLAYOUT.DRAWERWIDTH : theme.SIDEBARLAYOUT.COLLAPSEDWIDTH,
          overflowX: 'hidden',
          transition: 'width 0.3s ease',
          bgcolor: theme.vars.palette.background.paper
        }
      }}
    >
      {/* Logo + toggle button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: open ? 'space-between' : 'center',
          p: 2,
          height: 64
        }}
      >
        {open && <img src={Gwork} alt="Logo" width={100} />}
        <IconButton
          onClick={() => setOpen(!open)}
          size="small"
          sx={{
            color: theme.vars.palette.text.primary
          }}
        >
          <Box
            component="span"
            sx={{
              display: 'flex',
              transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
              transition: 'transform 0.3s ease'
            }}
          >
            <IconLayoutSidebarRightExpand size={22} />
          </Box>
        </IconButton>
      </Box>

      <Box sx={{ px: 1 }}>
        {menuSections.map((section) => (
          <Box key={section.title} sx={{ mb: 2 }}>
            {open && (
              <ListItemText
                primary={section.title}
                sx={{
                  pl: 2,
                  '& .MuiTypography-root': {
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    mb: 1
                  }
                }}
              />
            )}
            <List sx={{ p: 0 }}>
              {section.items.map((item) => (
                <MenuItem key={item.text} item={item} />
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Drawer>
  )
}

export default Sidebar
