<<<<<<< HEAD
import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/Add" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/List" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/Orders" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
=======
import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebar-options">
         <NavLink to='/Add' className="sidebar-option">
             <img src={assets.add_icon} alt="" />
             <p>Add Items</p>
         </NavLink>
         <NavLink to='/List' className="sidebar-option">
             <img src={assets.order_icon} alt="" />
             <p>List Items</p>
         </NavLink>
         <NavLink to='/Orders' className="sidebar-option">
             <img src={assets.order_icon} alt="" />
             <p>Orders</p>
         </NavLink>
       </div>
    </div>
  )
}

export default Sidebar
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
