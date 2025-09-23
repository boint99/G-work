import React from "react";
import PrivateRoute from "./PrivateRoute"

// Lazy import pages
const Dashboard = React.lazy(() => import("~/pages/Dashboard/Dashboard"))
const Home = React.lazy(() => import("~/pages/Home/Home"))
const About = React.lazy(() => import("~/pages/About/About"))
const Login = React.lazy(() => import("~/pages/Auth/Login"))
const NotFound = React.lazy(() => import("~/pages/NotFound"))

const routes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        children: [
            { path: "profile", element: <Profile /> },
            { path: "about", element: <About /> },
        ],
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default routes;
