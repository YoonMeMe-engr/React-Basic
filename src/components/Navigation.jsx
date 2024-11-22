import React from 'react'
import { Link, NavLink } from "react-router-dom";
import '../App.css'

function Navigation() {
  return (
    <>
     <ul>
        <li> <NavLink className={({isActive}) => 
        isActive ? "active" : ""} to="/home">Home</NavLink> </li>
        <li> <NavLink className={({isActive}) => 
        isActive ? "active" : ""} to="/user">User</NavLink> </li>
        <li> <Link to="/user/profile">Profile</Link> </li>
        <li> <Link to="/user/skill">Skill</Link> </li>
      </ul>
    </>
  )
}

export default Navigation

// rafc