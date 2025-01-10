<<<<<<< HEAD
import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted eith the finest ingradients and culinary expertise. Our mission
        is to stisfy your carvings and elevate your dining experience one meal
        at a time{" "}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          
          return (
            // prev is the current state of setmenu function its changing on every click from "All" to item.menu_name
            //  prev represents the previous state value of the category state that is being passed to the setCategory function.
            // prev is the current value of the category state.
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>   
              </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
=======
import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted eith the finest ingradients and culinary expertise. Our mission
        is to stisfy your carvings and elevate your dining experience one meal
        at a time{" "}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          
          return (
            // prev is the current state of setmenu function its changing on every click from "All" to item.menu_name
            //  prev represents the previous state value of the category state that is being passed to the setCategory function.
            // prev is the current value of the category state.
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>   
              </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
