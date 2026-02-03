import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products,setProducts] = useState([])
    const handleProdunt = (newProdut)=>{
        const allproduct =[...products,newProdut];
        setProducts(allproduct)
        
    }
    return (
        <div>
            <h1>My Product</h1>
            <ProductForm handleProdunt={handleProdunt}></ProductForm>
            <ProductTable products ={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;