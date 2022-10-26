import React, { createContext, useContext, useEffect, useReducer } from 'react';

import reducer from '../reducers/CartReducers';

import { ADD_TO_CART } from '../actions';

const getLocalStorage = () => {
	let cart = localStorage.getItem('cart');
	if (cart) {
		return JSON.parse(localStorage.getItem('cart'));
	} else {
		return [];
	}
};

const initialState = {
	total: 0,
	cart: getLocalStorage(),
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	//add to cart

	const addToCart = (_id, name, price, extra) => {
		dispatch({ type: ADD_TO_CART, payload: { _id, name, price, extra } });
	};

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(state.cart));
	}, [state.cart]);

	return <CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
	return useContext(CartContext);
};
