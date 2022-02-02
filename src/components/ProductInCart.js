import React, {useContext, useEffect} from 'react';
import mainContext from "../context/mainContext";

const ProductInCart = ({product, index, getTotal, setTotal}) => {
    const {getProductsInCart, setProductsInCart} = useContext(mainContext)
    const totalProductPrice = product.price * product.quantity

    const removeProduct = (item) =>{
        if(item.quantity===1){
            getProductsInCart[index].quantity--
            setProductsInCart([...getProductsInCart])
            const newCart = getProductsInCart.filter(x=> x.uuid !== item.uuid)
            setProductsInCart([...newCart])
            setTotal(getTotal-item.price)

        }else{
            getProductsInCart[index].quantity--
            setProductsInCart([...getProductsInCart])
            setTotal(getTotal-item.price)
        }
    }

    const addProduct = () =>{
        getProductsInCart[index].quantity++
        setProductsInCart([...getProductsInCart])
        setTotal(getTotal+getProductsInCart[index].price)

    }

    return (
        <div>
            <div className='box d-flex space-btw'>
                <h3>{product.title}</h3>
                <h5>{product.description}</h5>
                <img src={product.photo} alt="product photo"/>
                <h3>Total Price: {totalProductPrice}</h3>
                <button onClick={addProduct}>Add</button>
                <h3>{product.quantity}</h3>
                <button onClick={()=>{removeProduct(product)}}>Remove</button>
            </div>

        </div>


    );
};

export default ProductInCart;