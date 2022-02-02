import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import Product from "../components/Product";

const AllProducts = () => {
    const {getProducts} = useContext(mainContext)
    return (
        <div className='d-flex wrap'>
            {getProducts.map((x,i)=>{return(<Product product={x} key={i} index={i}/>)})}
        </div>
    );
};

export default AllProducts;