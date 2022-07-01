import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import CabinetPage from './components/CabinetPage/CabinetPage';
import Footer from './components/Footer/Footer';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';

function App() {
	const [burgerActive, setBurgerActive] = useState(false);

	return (
		<BrowserRouter>

			<Routes>
				<Route path='/' element={<>
					<BurgerMenu active={burgerActive} setActive={setBurgerActive} />
					<Header setActive={setBurgerActive} />
					< MainPage />
					<Footer />
				</>} />
				<Route path='/about-us' element={<>
					<BurgerMenu active={burgerActive} setActive={setBurgerActive} />
					<Header setActive={setBurgerActive} />
					< AboutUsPage />
					<Footer />
				</>} />
				<Route path='/login' element={< LoginPage />} />
				<Route path='/cabinet' element={<CabinetPage />} />
			</Routes>

		</BrowserRouter >
	);
}

export default App;
