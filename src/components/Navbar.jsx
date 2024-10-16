import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import Login from './Login'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between p-10'>
        <div><img src="src\assets\Logo - 2.png" className='h-12 w-12' alt="Logo"  /></div>
        <div className='grid gap-5 grid-cols-2'>
          <Link to={'/login'}>
           <Button>Login</Button>
          </Link>
          <Link to={'/register'}>
            <Button>Signup</Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
