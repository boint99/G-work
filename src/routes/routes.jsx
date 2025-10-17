import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const FullLayout = lazy(() => import('~/layouts/FullLayout/FullLayout'))
const Dashboard = lazy(() => import('~/pages/Dashboard/Dashboard'))
const Emails = lazy(() => import('~/pages/Emails/Emails'))
const GroupMail = lazy(() => import('~/pages/GroupMail/GroupMail'))
const Messages = lazy(() => import('~/pages/Messages/Messages'))
const NotFound = lazy(() => import('~/pages/NotFound/NotFound'))
const Auth = lazy(() => import('~/pages/auth'))
const IPAddress = lazy(() => import('~/pages/work/IPAddress/IpAddress'))

const routes = [
  {
    path: '/auth',
    element: <Auth />,
    children: [
      { path: 'login', element: <Auth /> },
      { path: 'register', element: <Auth /> }
    ]
  },
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'emails', element: <Emails /> },
      { path: 'groupmails', element: <GroupMail /> },
      { path: 'ip-address', element: <IPAddress /> },
      { path: 'messages', element: <Messages /> }
    ]
  },
  { path: '*', element: <NotFound /> }
]

export default routes
