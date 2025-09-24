import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "~/layouts/Sidebar/Sidebar";
import Header from "~/layouts/Header/Header";
import Footer from "~/layouts/Footer/Footer";

export default function MainLayout() {
    return (
        <Box>
            {/* Sidebar */}
            <Box
                component="aside"
                sx={{
                }}
            >
                <Sidebar />
            </Box>
            <Box>
                <Box
                    component="header"
                    sx={{
                    }}
                >
                    <Header />
                </Box>
                <Box
                    component="main"
                    sx={{
                    }}
                >
                    <Outlet />
                </Box>
                <Box
                    component="footer"
                    sx={{}}
                >
                    <Footer />
                </Box>
            </Box>
        </Box>
    )
}
