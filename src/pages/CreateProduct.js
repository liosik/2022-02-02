import React, {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";
import {v4 as uuid} from "uuid"

const CreateProduct = () => {
    const {getProducts, setProducts} = useContext(mainContext)
    const titleRef = useRef()
    const descriptionRef = useRef()
    const photoRef = useRef()
    const priceRef = useRef()

    const createProduct = () =>{
        const product = {
            uuid: uuid(),
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            photo: photoRef.current.value,
            price: Number(priceRef.current.value),
            quantity: 0
        }
        if (product.title.length>0 && product.description.length>0 && product.photo.length>0 && product.price>0){
            setProducts([...getProducts, product])
        }else {
            alert("FILL INPUTS")
        }
    }



    return (
        <div className='d-flex column inputBox'>
            <input ref={titleRef} placeholder='title' type="text"/>
            <input ref={descriptionRef} placeholder='description' type="text"/>
            <input ref={photoRef} placeholder='photo' type="text"/>
            <input ref={priceRef} placeholder='price' type="number"/>
            <button onClick={()=>createProduct()}>Create Product</button>

        </div>
    );
};

export default CreateProduct;