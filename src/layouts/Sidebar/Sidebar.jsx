import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Gnoc from '~/assets/images/gnoc.jpg'
import { TfiDashboard } from "react-icons/tfi"
import { MdOutlineMail } from "react-icons/md"
import { MdOutlineFormatListBulleted } from "react-icons/md"
import { BsChatDots } from "react-icons/bs"
import { useLocation, useNavigate } from "react-router-dom"
import { alpha } from "@mui/material"


const menuItems = [
    { text: "Dashboard", icon: <TfiDashboard style={{fontSize: '23px'}}/>,  path: "/dashboard"},
    { text: "Email", icon: <MdOutlineMail style={{fontSize: '23px'}}/> , path: "/emails"},
    { text: "GroupMail", icon: <MdOutlineFormatListBulleted style={{fontSize: '23px'}} />, path: "/groupmails"},
    { text: "Messages", icon: <BsChatDots style={{fontSize: '23px'}} />, path: '/messages'}
]
  
const Sidebar = () => {
    const drawerWidth = 220
    const location = useLocation()
    const navigate = useNavigate()

  return (
    <Drawer
      variant="permanent" 
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <Box
          sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              height: 60,
          }}
          >
        <img src={Gnoc} alt="Logo_Gnoc" width={120} />
        </Box>
        <List sx={{ padding: '20px' }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  borderRadius: '7px',
                  mb: 0.5,
                  minHeight: 44,
                }}
              >
                <ListItemButton
                  selected={isActive}
                  onClick={() => navigate(item.path)}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#5D87FF !important",
                      color: "white",
                      borderRadius: '15px',
                      "& .MuiListItemIcon-root": {
                        color: "white"
                      }
                    },
                    "&:hover": {
                      backgroundColor: isActive
                      ? "#5D87FF !important" 
                      : `${alpha("#5D87FF", 0.08)} !important`,
                      borderRadius: '15px'
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '35px' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar
