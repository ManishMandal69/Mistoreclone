import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
        <Link className= "HotAccessoriesLink" to="/music">Music Store</Link>
        <Link className= "HotAccessoriesLink" to="/SmartDevice">Smart Device</Link>
        <Link className= "HotAccessoriesLink" to="/home">Home</Link>
        <Link className= "HotAccessoriesLink" to="/lifestyle">lifestyle</Link>
        <Link className= "HotAccessoriesLink" to="/mobileAccessories">Music Accessories</Link>

      
    </div>
  )
}

export default HotAccessoriesMenu
