import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
      <Link className="navbar-brand mx-3" to="/home">Home</Link>  
      <Link className="navbar-brand" to="/tasksList">Tasks</Link>
      </nav>

    </div>
  )
}

export default Navbar
