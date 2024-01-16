import React from 'react'
import { NavLink } from 'react-router-dom'
import './CSS/sidebar.css'
// import { FaHome, FaUser, FaProjectDiagram, FaBlognpm , FaCog, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
// import { FontAwesomeIcon , fas-Home} from '@fortawesome/react-fontawesome'

function SidebarBy() {
  return (
    <>
    <div className="wrapper">
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li><NavLink to={"/admin"}><i className="fas fa-home"></i>Home</NavLink></li>
                <li><NavLink to={"/users"}><i className="fas fa-user"></i>Users</NavLink></li>
                <li><NavLink to={"/courses"}><i className="fas fa-project-diagram"></i>Course List</NavLink></li>
                <li><NavLink to={"/blogs"}><i className="fas fa-blog"></i>Blogs</NavLink></li>
                <li><NavLink to={"/manage"}><i className="fas fa-cog"></i>Manage Account</NavLink></li>
            </ul>
            <div className="social_media">
                <NavLink to={"/facebook"}><i className="fab fa-facebook-f"></i></NavLink>
                <NavLink to={"/twitter"}><i className="fab fa-twitter"></i></NavLink>
                <NavLink to={"/instagram"}><i className="fab fa-instagram"></i></NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default SidebarBy