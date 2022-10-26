import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemesProvider } from './context/ThemesContext';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemesProvider>
		<CartProvider>
			<App />
		</CartProvider>
	</ThemesProvider>
);
