import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<Wrapper>
			<div className='logo'>
				<Link to='/'>webvaly.</Link>
			</div>
			<div className='search'>
				<input type='text' placeholder='Search' />
			</div>
			<div className='accounts'>accounts</div>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	height: 70px;
	border-bottom: 1px solid #eee;
	display: flex;
	align-items: center;
	padding: 0 20px;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	background-color: #fff;
	z-index: 99;

	.logo {
		flex: 4;
		width: 260px;
		a {
			text-decoration: none;
			font-size: 2rem;
			color: #000;
			font-weight: 700;
		}
	}
	.search {
		flex: 8;
		text-align: center;
		input {
			border: 1px solid #eee;
			font-family: inherit;
			font-size: 1rem;
			width: 500px;
			/* background-color: #f1f1f1; */
			margin: auto;
			height: 45px;
			border-radius: 30px;
			padding: 5px 20px;
		}
		@media (max-width: 600px) {
			display: none;
		}
	}
	.accounts {
		flex: 4;
		text-align: right;
	}
`;

export default Navbar;
