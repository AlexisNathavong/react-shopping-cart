import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				
			</NavLink>
		</div>
	);
};

export default Navigation;
