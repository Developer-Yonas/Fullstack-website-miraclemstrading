import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800)
    { 
      return{right: !menuOpened && "100%"}
    }
  }
  return (
   <section className="h-wrapper">
    <div className="flexCenter padding innerWidth h-container">
       <a href="/" >
        <img  src=' ./mlogo.jpg ' alt="logo" width={100} />
       </a>

        <OutsideClickHandler
        onOutsideClick={()=>
        {setMenuOpened(false)
        }}
        >
        
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}>
          <nav>
        <ul className='navBar'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Service">Service</Link>
          </li>
          <li>
            <Link to="/Experience">Experience</Link>
          </li>
          <button className='button'>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          </button>
        </ul>
      </nav>

      <Outlet />
      
        </div>
       
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
      <BiMenuAltRight size={40}/>
    </div>
    </OutsideClickHandler>

    </div>
   </section>
  );
};

export default Header