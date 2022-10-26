import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const CategoryBar = () => {
	return (
		<Wrapper>
			<div>
				<ul>
					<li>
						<NavLink to='/'>HTML Templates</NavLink>
					</li>
				</ul>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.aside`
	width: 260px;
	background-color: #f9f9f9;
	height: calc(100% - 70px);
	position: fixed;
	left: -260px;
	bottom: 0;
	padding: 20px;
	@media (min-width: 1400px) {
		left: 0;
	}
	/* border-right: 1px solid #eee; */
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		li {
			a {
				display: block;
				text-decoration: none;
				color: #000;
			}
		}
	}
`;

export default CategoryBar;
