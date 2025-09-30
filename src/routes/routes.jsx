import React from "react"
import { Navigate } from "react-router-dom"
// import PrivateRoute from "./PrivateRoute"
const delayImport = (importFn, ms = 2000) =>
    new Promise(resolve => {
      setTimeout(() => resolve(importFn()), ms)
    })
// Lazy import pages
const FullLayout = React.lazy(() => import('~/layouts/FullLayout/FullLayout'))
const Dashboard = React.lazy(() => import('~/pages/Dashboard/Dashboard'))
const Emails = React.lazy(() => import('~/pages/Emails/Email'))
const Groupmail = React.lazy(() => import('~/pages/GroupMail/GroupMail'))
const Messages = React.lazy(() => import('~/pages/Messages/Messages'))
const Login = React.lazy(() => import('~/pages/Auth/Login/Login'))
const NotFound = React.lazy(() => import('~/pages/NotFound/NotFound'))

const routes = [
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { index: true, element: <Navigate to="dashboard" replace /> },
        { path: "dashboard", element: <Dashboard /> },  
        { path: "emails", element: <Emails /> },
        { path: "groupmails", element: <Groupmail /> },
        { path: "messages", element: <Messages /> }

      ],
    },
    {
      path: "*",
      element: <NotFound />
    },
  ]
  
  export default routes