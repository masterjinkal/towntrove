import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import all_product from "../Components/Assets/all_product";
//now we are using state variable and creating an API 

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([]);
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    //now we will fetch our all_product data and we will store it in ll_product state varible 
    //we will use useEffect for that 
    useEffect(() => {
        fetch('https://towntrove-api.onrender.com/allproducts')
        .then((response) => response.json())
        .then((data) => setAll_Product(data))

        //if auth-token is available, will fetch cart data
        if(localStorage.getItem('auth-token')){
            fetch('https://towntrove-api.onrender.com/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`, //inside getItem we have provided key of auth token that is auth-token
                    'Content-Type': 'application/json',
                },
                body: "",
            })
            .then((response) => response.json())
            .then((data) => setCartItems(data));
        }
    },[])

   const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
    if(localStorage.getItem('auth-token')){
        //means we are logged in; in that case we will upadte item id in mongodb database in users cart data
        fetch('https://towntrove-api.onrender.com/addtocart', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`, //inside getItem we have provided key of auth token that is auth-token
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"itemId": itemId}),
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
   }

   const removeFromCart  = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}));
    
    if(localStorage.getItem('auth-token')){
        fetch('https://towntrove-api.onrender.com/removefromcart', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`, //inside getItem we have provided key of auth token that is auth-token
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"itemId": itemId}),
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
   }

   //for cart total 
   const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
        if(cartItems[item] > 0)
        {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            totalAmount += itemInfo.new_price * cartItems[item];
        }

        //return totalAmount;
    }
    return totalAmount;
   }

   //for displaying total items in the cart in navbar
   const getTotalCartItems = () => {
    let totalItems = 0;
    for(const item in cartItems)
    {
        if(cartItems[item] > 0)
        {
            totalItems += cartItems[item]
        }
    }
    return totalItems;
   }

   //passing functions using context API
   const contextValue = {getTotalCartItems, getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart};

    return (
        <ShopContext.Provider value = {contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 