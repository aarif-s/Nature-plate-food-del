import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

   const [cartItems, setCartItems] = useState({})

   const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
          setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
   }

   const removeFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
  
    const getTotalCartAmount = ()=>{
      let totalAmount  = 0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo = food_list.find((product)=>product._id === item)
          totalAmount += itemInfo.price*cartItems[item];
        }
      }
      return totalAmount;
    }
  
  const contextValue = {
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount

  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;

// Purpose of Context: React's context is used to manage global state or share data that needs to be accessed by many components across the application. It helps avoid prop drilling, where you have to pass props through several layers of components even if only the deep children need them.
