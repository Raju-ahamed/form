import React from 'react';

const ProductTable = ({ products }) => {
    console.log(products)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No:</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        products.map((product, index) =>

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <h2>total product : {products.length}</h2>
        </div>
    );
};

export default ProductTable;