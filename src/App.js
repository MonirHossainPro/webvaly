import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Navbar, CategoryBar } from './components';
import { CartPage, CheckoutPage, HomePage, DashboardPage, LoginPage, SignupPage } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<CategoryBar />
			<Wrapper>
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/cart' element={<CartPage />}></Route>
					<Route path='/checkout' element={<CheckoutPage />}></Route>
					<Route path='/dashboard' element={<DashboardPage />}></Route>
					<Route path='/signup' element={<SignupPage />}></Route>
					<Route path='/login' element={<LoginPage />}></Route>
				</Routes>
			</Wrapper>
			<Footer />
		</BrowserRouter>
	);
}

const Wrapper = styled.main`
	margin-left: 0;
	margin-top: 70px;
	@media (min-width: 1400px) {
		margin-left: 260px;
	}
	& > div {
		max-width: 100%;
		margin: auto;
		padding: 0 20px;
		@media (min-width: 1400px) {
			width: 1200px;
			margin: auto;
			padding-top: 50px;
			padding-bottom: 50px;
		}
	}
`;

export default App;
