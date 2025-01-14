import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import useCredentialsStore from '../store/credentialsStore';
import logo from "../assets/newLogoWhite.png";
import login from "../assets/right-to-bracket-solid.svg";
import default_pfp from "../assets/default_pfp.svg";

const linkbtn = "mt-4 inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"

function Navbar() {
  //STATE DECLARATION (dbSpy3.0)
  const [theme, setTheme] = useState('Dark');
  const { user } = useCredentialsStore((state): any => state);
  //END: STATE DECLARATION

  //this is a function to toggle class between light and dark using vanilla DOM manipulation and local state.
  //FOR FUTURE DEVS: there's probably a more elegant way to do this with settings store and sharing that state globally but tailwind cascades dark mode from the top element so this works
  const toggleClass = (): void => {
    const page = document.getElementById("body");
    page!.classList.toggle('dark');
    theme === 'Dark' ? setTheme('Light') : setTheme('Dark');
  }

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-sky-800 p-6 fixed top-0 w-full">
        <div className='text-base navItems'>
          <img className="fill-current mr-5 h-[45] inline-block" src={logo} />
          <NavLink to='/' className={linkbtn}>Home</NavLink>
          <NavLink to='/display' className={linkbtn}>Display</NavLink>
          <button className='text-blue-200 hover:text-[#f8f4eb]' onClick={toggleClass}>{theme} Mode</button>
        </div>
        <div>
          {user
            ? (<>
              <span className='mt-4 inline-block lg:mt-0 text-blue-200'>{user.full_name}</span>
              <img className="ml-2 mr-2 h-[25] rounded-full invert inline-block" src={default_pfp} />
            </>)
            : (<div>
              <NavLink to='/login' className='mt-1 inline-block lg:mt-0 text-blue-200 shadow-2xl hover:text-white'>Login</NavLink>
              <img className="mr-3 ml-3 h-[20] invert inline-block" src={login} />
            </div>)
          }
        </div>
      </nav>
      <div className='h-[64px]'>
      </div>
    </>
  )
}

export default Navbar;