import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { food_list as importedFoodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const url = "http://localhost:4000";
  const [food_list, setFoodList] = useState([]);
  

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else if(cartItems[itemId] <5) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
        await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        loadCartData(); // Refresh cart data
    }
};


const removeFromCart = async (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
      loadCartData(); // Refresh cart data
  }
};


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  //get food item user cart
  const loadCartData = async () => {
    if (token) {
      try {
        const response = await axios.get(`${url}/api/cart/get`, { headers: { token },});
        setCartItems(response.data.cartData);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
  };
   

  //get food item mongodb 
  const fetchFoodList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  }

  useEffect(() => {
    fetchFoodList();
  }, []);

  // for maintaining login even after refreshing page
  useEffect(() => {
    async function loadData() {
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
         await loadCartData(localStorage.getItem("token")); // Fetch cart data on login
       }
    }
      loadData();
  }, [token])
  

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

// Purpose of Context: React's context is used to manage global state or share data that needs to be accessed by many components across the application. It helps avoid prop drilling, where you have to pass props through several layers of components even if only the deep children need them.
