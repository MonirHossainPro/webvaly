import React from 'react';
import { Link } from 'react-router-dom';

import { useThemesContext } from '../context/ThemesContext';
import { useCartContext } from '../context/CartContext';
const HomePage = () => {
	const { themes_loading: loading, themes_error: error, themes: data } = useThemesContext();

	const { addToCart } = useCartContext();

	if (loading) {
		return 'Loading';
	}
	if (error) {
		return 'Error';
	}
	return (
		<div>
			{data.map((theme, index) => {
				const { _id, name, sales, extra, price } = theme;
				return (
					<div key={_id}>
						<p>{name}</p>
						<p>Sales: {sales}</p>
						<ul>
							{extra.map((p, index) => {
								return (
									<li key={index}>
										{p.service} at
										{p.price}
									</li>
								);
							})}
						</ul>
						<Link to='/cart' onClick={() => addToCart(_id, name, price, extra)}>
							Buy Now
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default HomePage;
