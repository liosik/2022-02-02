import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import mainContext from "../context/mainContext";
import Product from "../components/Product";

const SingleProduct = () => {
    const params = useParams()
    const{getProducts} = useContext(mainContext)
    const showItem = getProducts.filter(x=> x.uuid === params.uuid)


    console.log(showItem)
    return (
        <div>
            {showItem.map((x,i)=>{return(<Product product={x} key={i}/>)})}
        </div>
    );
};

export default SingleProduct;