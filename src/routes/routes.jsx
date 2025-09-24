import React from "react"
import { Navigate } from "react-router-dom"
import MainLayout from "~/layouts/LayoutMain/LayoutMain"
// import PrivateRoute from "./PrivateRoute"

// Lazy import pages
const Dashboard = React.lazy(() => import("~/pages/Dashboard/Dashboard"))
const About = React.lazy(() => import("~/pages/About/About"))
const Login = React.lazy(() => import("~/pages/Auth/Login/Login"))
const NotFound = React.lazy(() => import("~/pages/NotFound/NotFound"))

const routes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <MainLayout />,
        children: [
            { index: true, element: <Dashboard /> },
        ],
    },
    {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]

export default routes


// const routes = [
//     {
//         path: "/login",
//         element: <Login />,
//     },
//     {
//         path: "/dashboard",
//         element: (
//             <PrivateRoute>
//                 <Dashboard />
//             </PrivateRoute>
//         ),
//         children: [
//             { path: "profile", element: <Profile /> },
//             { path: "about", element: <About /> },
//         ],
//     },
//     {
//         path: "/",
//         element: <Home />,
//     },
//     {
//         path: "*",
//         element: <NotFound />,
//     },
// ];

// export default routes;
