const CartReducers = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_TO_CART':
			//const { _id, name, theme, extra } = payload;
			return { ...state, cart: payload };

		default:
			throw new Error(`No Matching "${type}" - action type`);
	}
};
export default CartReducers;
