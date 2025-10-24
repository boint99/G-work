import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Login from '~/pages/Auth/Login/Login'
import Register from '~/pages/Auth/register/Register'
import Users from '~/pages/Management/Users/Users'
import RequireAuth from '~/components/RequireAuth'

const FullLayout = lazy(() => import('~/layouts/FullLayout/FullLayout'))
const Dashboard = lazy(() => import('~/pages/Dashboard/Dashboard'))
const Emails = lazy(() => import('~/pages/Emails/Emails'))
const GroupMail = lazy(() => import('~/pages/GroupMail/GroupMail'))
const Messages = lazy(() => import('~/pages/Messages/Messages'))
const NotFound = lazy(() => import('~/pages/NotFound/NotFound'))
const Auth = lazy(() => import('~/pages/auth'))
const IPAddress = lazy(() => import('~/pages/work/IPAddress/IpAddress'))
const Management = lazy(() => import('~/pages/Management'))

const routes = [
  {
    path: '/auth',
    element: <Auth />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  },
  {
    path: '/',
    element: <RequireAuth />,
    children: [
      {
        element: <FullLayout />,
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> },
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'emails', element: <Emails /> },
          { path: 'groupmails', element: <GroupMail /> },
          { path: 'ip-address', element: <IPAddress /> },
          { path: 'messages', element: <Messages /> },
          {
            path: '/management',
            element: <Management />,
            children: [{ path: 'users', element: <Users /> }]
          }
        ]
      }
    ]
  },
  { path: '*', element: <NotFound /> }
]

export default routes
