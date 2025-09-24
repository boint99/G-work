import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <Box
            sx={{
                width: 240,
                bgcolor: "grey.100",
                p: 2,
            }}
        >
            <List>
                <ListItem button component={Link} to="/dashboard">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/dashboard/profile">
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button component={Link} to="/dashboard/about">
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </Box>
    );
}

export default Sidebar