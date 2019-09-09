import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Imported Components
import ShoppingCart from './components/ShoppingCart';
import Products from './components/Products';
import Navigation from './components/Navigation';

//Imported Contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={cart}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route 
						exact path='/'
						component={Products}
					/>

					<Route
						path='/cart'
						component={ShoppingCart}
					/>

					
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
