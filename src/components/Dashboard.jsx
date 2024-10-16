import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <>
    <div className='flex flex-row'>
      <Sidebar/>
      <div className='md:w-10/12 w-full max-md:mt-14 bg-gray-200'>
      <Outlet/>
      </div>
    </div>
    </>
  )
}

export default Dashboard