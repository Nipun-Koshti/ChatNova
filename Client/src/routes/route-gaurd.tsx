import React from 'react'
import { useAuth } from '@/hooks/use-auth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

interface Props{
    requireAuth?:boolean
}

const RouteGuard = ({ requireAuth }: Props) => {

  const { user } = useAuth();

  if (requireAuth && !user) return <Navigate to="/" replace />;

  if (!requireAuth && user) return <Navigate to="/chat" replace />;

  return <Outlet />;
};


export default RouteGuard