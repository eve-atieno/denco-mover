import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'


const Navbar = ({quotes}) => {

  const { logout } = useContext(AuthContext);

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

  const triggerLogout = () => {
    logout();
  };

  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-white-500 p-6">
  <div class="flex items-center flex-shrink-0 text-black mr-6">
    <span class="font-semibold text-xl tracking-tight"><span className='text-yellow-400'>DENCO</span> MOVERS</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-lg text-center  lg:flex-grow">
      <Link to='/' class="block mt-4 mx-5 lg:inline-block lg:mt-0 text-black mr-4" 
      style={{
        hover: {
          color: 'yellow',
        }
      }}
      >
        Home
      </Link>
     
      <Link to='/services' class="block mt-4 mx-5 lg:inline-block lg:mt-0 text-black hover:text-yellow-400 mr-4">
        Services
      </Link>
      {isLoggedIn ? (
        <>
        <Link to='/ViewQuotes' class="block mt-4 mx-5 lg:inline-block lg:mt-0 text-black hover:text-yellow-400 mr-4">
      ViewQuotes
      </Link>
      <Link onClick ={triggerLogout} to='/login' class="block mt-4 mx-5 lg:inline-block lg:mt-0 text-black hover:text-yellow-400 mr-4">
        Logout
      </Link>
        </>
      ) : (
        <>
      <Link to='/login' class="block mt-4 mx-5 lg:inline-block lg:mt-0 text-black hover:text-yellow-400 mr-4">
        Login
      </Link>
      </>
      )}
    
      </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar