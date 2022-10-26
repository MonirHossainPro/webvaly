import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

import reducer from '../reducers/ThemesReducers';

import { themes_url as url } from '../utils/constants';

import { GET_THEMES_BEGIN, GET_THEMES_SUCCESS, GET_THEMES_ERROR } from '../actions';

const initialState = {
	themes_loading: false,
	themes_error: false,
	themes: [],
};

const ThemesContext = createContext();

export const ThemesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchThemes = async (url) => {
		dispatch({ type: GET_THEMES_BEGIN });
		try {
			const response = await axios.get(url);
			const products = response.data.templates;
			dispatch({ type: GET_THEMES_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: GET_THEMES_ERROR });
		}
	};

	useEffect(() => {
		fetchThemes(url);
	}, []);

	return <ThemesContext.Provider value={{ ...state }}>{children}</ThemesContext.Provider>;
};

export const useThemesContext = () => {
	return useContext(ThemesContext);
};
