import React from 'react';
import { BsCheckCircleFill, BsCircle, BsTrash } from 'react-icons/bs';
import { useCartContext } from '../context/CartContext';
import styled from 'styled-components';

const Cart = () => {
	const { cart, total } = useCartContext();
	return (
		<Wrapper>
			<div className='cart'>
				<div className='cart-item'>
					<div className='remove'>
						<BsTrash />
					</div>
					<div className='img'></div>
					<div>
						<h6 className='mb-0'>{cart.name}</h6>
					</div>
					<div>${cart.price}</div>
				</div>
				<div className='cart-extra'>
					<div className='cart-extra-item'>
						<div className='check'>
							<BsCheckCircleFill />
						</div>
						<div>Template Customization</div>
						<div>$30</div>
					</div>
					<div className='cart-extra-item'>
						<div className='check'>
							<BsCircle />
						</div>
						<div>Template Customization</div>
						<div>$30</div>
					</div>
				</div>
				<div className='cart-footer'>
					<div className='total'>Cart Total</div>
					<div className='total'>$60</div>
				</div>
			</div>
			<div className='checkout-btn'>
				<button>Checkout</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	max-width: 600px;
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
			svg {
				display: flex;
			}
			.check {
				cursor: pointer;
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
		button {
			background-color: #000;
			color: #fff;
			font-size: 1.25rem;
			font-family: inherit;
			font-weight: 600;
			padding: 15px 20px;
			cursor: pointer;
		}
	}
`;

export default Cart;
