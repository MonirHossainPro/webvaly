const ThemesReducers = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'GET_THEMES_BEGIN':
			return { ...state, themes_loading: true };

		case 'GET_THEMES_SUCCESS':
			return {
				...state,
				themes_loading: false,
				themes: payload,
			};

		case 'GET_THEMES_ERROR':
			return { ...state, themes_loading: false, themes_error: true };
		default:
			throw new Error(`No Matching "${type}" - action type`);
	}
};
export default ThemesReducers;
