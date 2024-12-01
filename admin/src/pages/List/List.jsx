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

