import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function RequireAuth() {
  const location = useLocation()
  const user = localStorage.getItem('user')
  const token = localStorage.getItem('token')

  if (!user || !token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }
  return <Outlet />
}