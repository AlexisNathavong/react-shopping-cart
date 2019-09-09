import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Imported Components
import ProductContext from './contexts/ProductContext';
import ShoppingCart from './components/ShoppingCart';
import Products from './components/Products';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
				<div className="App">
					

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
		</ProductContext.Provider>
	);
}

export default App;
