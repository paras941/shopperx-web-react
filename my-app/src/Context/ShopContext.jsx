import React, { createContext } from "react";
import all_product from "../assets/assets/Assets/all_product.jsx"

export const ShopContext = createContext(null);

const ShopContextProvider =(props) =>{
    const contextvalue ={all_product};
    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;