import React, { useState } from 'react';

const ProductForm = ({ handleProdunt }) => {
    const [error,setError] = useState('');
    const hadleSubmit =e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const color = e.target.color.value;

        const newProduct ={
            name,
            quantity,
            price,
            color
        }
        if(name.length===0){
            setError("Add a valid name");
            return;
        }
        else if(quantity.length===0){
            setError("add a valid quantity");
            return;
        }
        else if(price.length===0){
            setError("add valid quantity");
            return;
        }
        else{
            setError('')
        }
        handleProdunt(newProduct);

    }
    return (
        <div>
            <form onSubmit={hadleSubmit}>
                <input type="text" name='name' /><br />
                <input type="text" name='quantity' /><br />
                <input type="text" name='price' /><br />
                <input type="text" name='color' /><br />
                <input type="submit" value="Submit" />
            </form>
            <p 
            style={{color:'red'}}
            >{error}</p>
        </div>
        
    );
};

export default ProductForm;