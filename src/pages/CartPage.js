import React, { useEffect, useState } from 'react';
import { BsCheckCircleFill, BsTrash } from 'react-icons/bs';
import { useCartContext } from '../context/CartContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { cart } = useCartContext();
	const { extra } = cart;
	const [extraService, setExtraService] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		localStorage.setItem('extraService', JSON.stringify(extraService));
	}, [extraService]);

	return (
		<Wrapper>
			<div className='cart'>
				<div className='cart-item'>
					<div className='remove'>
						<BsTrash />
					</div>
					<div className='img'></div>
					<div className='name'>
						<div className='mb-0'>{cart.name}</div>
					</div>
					<div className='price'>${cart.price}</div>
				</div>
				<div className='cart-extra'>
					{extra.map((item, index) => {
						const { service, price, delivery } = item;

						return (
							<div
								key={index}
								className={`${extraService === item ? 'cart-extra-item active' : 'cart-extra-item'}`}
								onClick={() => {
									setExtraService(item);
									setTotalPrice(item.price);
								}}
							>
								<div className='check'>
									<BsCheckCircleFill />
								</div>
								<div>
									{service} {delivery ? <div className='text-small'>Delivery: {delivery} days</div> : ' '}
								</div>
								<div>${price}</div>
							</div>
						);
					})}
				</div>
				<div className='cart-footer'>
					<div className='total'>Cart Total</div>
					<div className='total'>${totalPrice}</div>
				</div>
			</div>
			<div className='checkout-btn'>
				<Link to='/checkout'>Checkout</Link>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 800px !important;
	margin: auto;
	.cart {
		border: 1px solid #ddd;
	}
	.cart-item {
		display: grid;
		grid-template-columns: auto auto 1fr auto;
		gap: 1rem;
		padding: 1rem;
		align-items: center;
		color: #000;
		font-weight: 700;

		.img {
			width: 60px;
			height: 60px;
			background-color: #ddd;
		}
	}
	.cart-extra {
		.cart-extra-item {
			padding: 1rem;
			border-top: 1px solid #ddd;
			display: grid;
			grid-template-columns: auto 1fr auto;
			gap: 1rem;
			align-items: center;
			cursor: pointer;
			/* text-decoration: line-through; */
			color: #777;
			svg {
				display: flex;
			}
			.check {
				cursor: pointer;
				color: #999;
			}
			&.active {
				color: #000;
				text-decoration: none;
				font-weight: 700;
				svg {
					color: #000;
				}
			}
		}
	}
	.cart-footer {
		padding: 1rem;
		display: grid;
		align-items: center;
		grid-template-columns: auto auto;
		gap: 4rem;
		border-top: 1px solid #ddd;
		background-color: #f9f9f9;
		justify-content: space-between;
		.total {
			font-size: 1.5rem;
			font-weight: 700;
			color: #000;
		}
	}
	.checkout-btn {
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
`;

export default Cart;
