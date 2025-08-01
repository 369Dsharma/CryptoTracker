import React from 'react'
import './styles.css'
import AnchorTemporaryDrawer from './drawer.jsx'
import Button from '../../Common/Button/index.jsx'  
import {Link} from "react-router-dom"

function Header() {

  return (
    <div className='navbar'>
       <Link to='/'>
            
      <h1 className='logo'>CryptoTracker <span style={{color : "var(--blue)"}}>.</span></h1>
      </Link>

      <div className='links'>
        <Link to='/'>
          <p className='link'>Home</p>
        </Link>

        {/* <Link to='/compare'>
          <p className='link'>Compare</p>
        </Link> */}


        {/* <Link to='/watchlist'>
          <p className='link'>Watchlist</p>
        </Link> */}

        <Link to='/dashboard'>
          <Button text = {"Dashboard"} outlined={false} onClick={()=> console.log("btn clicked")}  />
        </Link>

      </div>


      <div className='mobile-drawer'>
         <AnchorTemporaryDrawer />
      </div>
    </div>
  )
}

export default Header
