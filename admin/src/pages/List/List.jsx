<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (foodId) => {
    // api call
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  

  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <dic className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="haha" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)} className="curser">
                X
              </p>
            </div>
          );
        })}
      </dic>
    </div>
  );
};

export default List;
=======
import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';

const List = () => {
  const url = "http://localhost:4000";
  const [foodItems, setFoodItems] = useState([]);

  // Fetch data from backend
  const fetchFoodItems = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setFoodItems(response.data.foodItems);
      } else {
        alert("Failed to fetch food items");
      }
    } catch (error) {
      const backendError = error.response?.data?.message || "An error occurred while fetching food items.";
      console.error(backendError);
      alert(backendError);
    }
  };

  // Use useEffect to call fetchFoodItems when the component mounts
  useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <div className='list'>
      <h1>Food Items</h1>
      <div className="food-items-grid">
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
            <div className='food-item-card' key={item._id}>
              <img src={item.image} alt={item.name} className='food-item-image' />
              <div className='food-item-details'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p className='food-item-category'>Category: {item.category}</p>
                <p className='food-item-price'>Price: ${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No food items found.</p>
        )}
      </div>
    </div>
  );
};

export default List;

>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
