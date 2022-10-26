import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutPage = () => {
	const [extraService, setExtraService] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const extraService = JSON.parse(localStorage.getItem('extraService'));
		if (extraService) {
			setExtraService(extraService);
		} else {
			return [];
		}
		console.log(extraService);
	}, []);

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			setCart(cart);
		} else {
			return [];
		}
		console.log(cart);
	}, []);

	return (
		<Wrapper>
			<div className='checkout-page'>
				<div className='billing-details'>
					<h3>Billing Details</h3>
					<form action=''>
						<div className='mb-20'>
							<label htmlFor=''>Your Name</label>
							<input className='form-control' type='text' placeholder='First Name' />
						</div>
						<div className='mb-20'>
							<label htmlFor=''>Whatsapp</label>
							<input className='form-control' type='text' placeholder='Whatsapp' />
						</div>
						<div className='mb-20'>
							<label htmlFor=''>Email</label>
							<input className='form-control' type='text' placeholder='Email' />
						</div>
						<div className='mb-20'>
							<label htmlFor=''>Country</label>
							<input className='form-control' type='text' placeholder='Country' />
						</div>
						<div className='mb-20'>
							<label htmlFor=''>Address</label>
							<textarea className='form-control' name='' id='' cols='30' rows='5' placeholder='Your Address'></textarea>
						</div>
						<div className='palce-order'>
							<Link href=''>Place Order</Link>
						</div>
					</form>
				</div>
				<div className='order-summary'>
					<h3>Order Summary</h3>
					<div className='order-item'>
						<div>{cart.name}</div>
						<div>${cart.price}</div>
					</div>

					{extraService.length === 0 ? (
						''
					) : (
						<div className='order-item'>
							<div>
								{extraService.service}
								{extraService.delivery ? <div className='text-small'>Delivery: {extraService.delivery} days</div> : ' '}
							</div>
							<div>${extraService.price}</div>
						</div>
					)}

					{extraService.length === 0 ? (
						<div className='order-item total'>
							<div>Total</div>
							<div>${cart.price}</div>
						</div>
					) : (
						<div className='order-item total'>
							<div>Total</div>
							<div>${extraService.price}</div>
						</div>
					)}
					{extraService.length === 0 ? (
						''
					) : (
						<div className='notice'>
							Webvaly accept payment after delivered work. If you like it then make payment. Now Just place order, we will contact you
							soon.{' '}
						</div>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.checkout-page {
		/* max-width: 800px; */
		margin: auto;
		display: flex;
		justify-content: space-between;
		.billing-details {
			border: 1px solid #ddd;
			padding: 30px;
			flex: 8;
			margin-right: 40px;
			.palce-order {
				display: grid;
				margin-top: 30px;
				a {
					background-color: #000;
					color: #fff;
					font-size: 1rem;
					font-family: inherit;
					font-weight: 600;
					padding: 15px 20px;
					cursor: pointer;
					text-align: center;
					text-decoration: none;
				}
			}
		}
		.order-summary {
			padding: 30px;
			border: 1px solid #ddd;
			background-color: #f9f9f9;
			height: 100%;
			flex: 4;
			.order-item {
				display: grid;
				grid-template-columns: 1fr auto;
				gap: 1rem;
				align-items: center;
				border-bottom: 1px solid #ddd;
				padding: 10px 0;
				&.total {
					color: #000;
					font-weight: 700;
					border-top: 3px solid #ddd;
					border-bottom: 0;
				}
			}
			.notice {
				background-color: #000;
				color: #fff;
				padding: 15px;
				margin-top: 30px;
				text-align: center;
			}
		}
		label {
			display: block;
		}

		.form-control {
			border: 1px solid #ddd;
			width: 100%;
			font-size: 1rem;
			font-family: inherit;
			border-radius: 0px;
			padding: 10px;
			&:focus {
				border: 1px solid #000;
				outline: none;
			}
		}

		.mb-20 {
			margin-bottom: 20px;
		}
	}
`;

export default CheckoutPage;
