import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignupPage = () => {
	return (
		<Wrapper>
			<div className='auth-form'>
				<h3>Signup</h3>
				<form action=''>
					<div>
						<label htmlFor=''>Name</label>
						<input type='text' placeholder='Your Name' />
					</div>
					<div>
						<label htmlFor=''>Email</label>
						<input type='email' placeholder='Your Email' />
					</div>
					<div>
						<label htmlFor=''>Password</label>
						<input type='password' placeholder='Password' />
					</div>
					<div className='submit'>
						<button type='submit'>Login</button>
					</div>
				</form>
			</div>
			<div className='need-action'>
				You have an account? <Link to='/login'>Login</Link>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.auth-form {
		max-width: 500px;
		margin: auto;
		border: 1px solid #ddd;
		padding: 20px;
		border-radius: 6px;
		h3 {
			text-align: center;
		}
		div {
			margin-bottom: 20px;
		}
		label {
			display: block;
			margin-bottom: 10px;
		}
		input {
			display: block;
			padding: 10px;
			border: 1px solid #ddd;
			font-family: inherit;
			font-size: inherit;
			width: 100%;
			border-radius: 4px;
			&:focus {
				outline: none;
				border: 1px solid #000;
			}
		}
		.submit {
			display: grid;
			button {
				border: none;
				background-color: #000;
				color: #fff;
				font-size: 1rem;
				padding: 12px;
				border-radius: 4px;
				font-family: inherit;
				cursor: pointer;
			}
		}
		.forget-password {
			text-align: center;
			display: block;
			color: #e74c3c;
		}
	}
	.need-action {
		text-align: center;
		padding: 20px 0;
		a {
			color: #e74c3c;
		}
	}
`;

export default SignupPage;
