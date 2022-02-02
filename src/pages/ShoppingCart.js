import React, {useContext, useState} from 'react';
import mainContext from "../context/mainContext";
import ProductInCart from "../components/ProductInCart";

const ShoppingCart = () => {
    const {getProductsInCart, getTotal, setTotal} = useContext(mainContext)

    return (
        <div>
            <div>
                {getProductsInCart.map((x,i)=>{return(<ProductInCart product={x} key={i} index={i} getTotal={getTotal} setTotal={setTotal}/>)})}
            </div>
            <div>
                <h1>Total Price: {getTotal}</h1>
            </div>

        </div>
    );
};


export default ShoppingCart;