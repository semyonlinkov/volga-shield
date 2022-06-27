import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';

function App() {
	const [burgerActive, setBurgerActive] = useState(false);

	return (
		<BrowserRouter>
			<BurgerMenu active={burgerActive} setActive={setBurgerActive} />
			<Header active={burgerActive} setActive={setBurgerActive} />
			<MainPage />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
