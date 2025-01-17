<<<<<<< HEAD
import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FooodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  console.log("FoodDisplay food_list:", food_list);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
=======
import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FooodItem/FoodItem'

const FoodDisplay = ({category}) => {

const {food_list } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
          { food_list.map((item,index)=>{
            
               if(category==="All" || category===item.category){
               return  <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} /> 
              }  
      
         })}
      </div>
    </div>
  )
}

export default FoodDisplay
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
