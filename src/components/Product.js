import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const Product = ({product, index}) => {
    const {getProducts, getProductsInCart, setProductsInCart, getTotal, setTotal} = useContext(mainContext)
    const nav = useNavigate()

    const addToCart = (item) =>{
        if(item.quantity <= 0){
            const prod = getProducts[index]
            prod.quantity++
            setTotal(getTotal+ item.price)
            setProductsInCart([...getProductsInCart, prod])
        }else{
            console.log(getProductsInCart)
            console.log(getProducts)
            setProductsInCart([...getProductsInCart])
        }

    }

    const goToSingle = () =>{
        nav('/product/' + product.uuid)
    }

    return (
        <div className='box d-flex column center'>
            <h3>{product.title}</h3>
            <h5>{product.description}</h5>
            <img onClick={()=>goToSingle()} src={product.photo} alt="product photo"/>
            <h3>{product.price}</h3>
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;