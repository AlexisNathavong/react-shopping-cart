import React, { useContext } from 'react';
import { ProductContext } from './contexts/ProductContext';

const Product = props => {
	return (

		<ProductContext.Provider value={products}>
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
		</ProductContext.Provider>
	);
};

export default Product;
