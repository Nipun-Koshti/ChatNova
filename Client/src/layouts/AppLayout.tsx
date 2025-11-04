import React from 'react'
import { Outlet } from 'react-router-dom'
import AppWrapper from '@/components/App-Wrapper'


const AppLayout = () => {
  return (
    <AppWrapper>
        <div className='h-full, '>
            <Outlet/>
        </div>
    </AppWrapper>
    
  )
}

export default AppLayout