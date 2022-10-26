import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const DashboardPage = () => {
	return (
		<Wrapper>
			<div className='profileBar'>
				<div className='img'></div>
				<div className='name'>
					<div>Morni Kodo</div>
					<span>Bangaldesh, Member since 2019</span>
				</div>
			</div>
			<div className='dashboardNav'>
				<ul>
					<li>
						<NavLink href=''>Orders</NavLink>
					</li>
					<li>
						<NavLink href=''>Reviews</NavLink>
					</li>
					<li>
						<NavLink href=''>Profile</NavLink>
					</li>
				</ul>
			</div>
			<div>Order List</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-top: 50px !important;
	.profileBar {
		display: grid;
		align-items: center;
		gap: 1rem;
		grid-template-columns: auto 1fr;
		margin-bottom: 20px;
		.img {
			width: 100px;
			height: 100px;
			border-radius: 0%;
			background-color: aliceblue;
		}
	}
	.dashboardNav {
		border-bottom: 1px solid #eee;
		text-align: center;
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			li {
				display: inline-block;
				a {
					display: block;
					text-decoration: none;
					padding: 10px 0;
					color: #555;
					margin-right: 20px;
				}
			}
		}
	}
`;

export default DashboardPage;
