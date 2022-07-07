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
import VacanciesPage from './components/VacanciesPage/VacanciesPage';
import PersonalDataAgreementPage from './components/PersonalDataAgreementPage/PersonalDataAgreementPage';
import ClientsAndPartners from './components/ClientsAndPartners/ClientsAndPartners';
import NewsPage from './components/NewsPage/NewsPage';

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
				<Route path='/personal-data-agreement' element={<>
					<BurgerMenu active={burgerActive} setActive={setBurgerActive} />
					<Header setActive={setBurgerActive} style={{ backgroundColor: '#191919' }} />
					< PersonalDataAgreementPage />
					<Footer />
				</>} />
				<Route path='/about-us' element={<>
					<BurgerMenu active={burgerActive} setActive={setBurgerActive} />
					<Header setActive={setBurgerActive} style={{ backgroundColor: '#191919' }} />
					< AboutUsPage />
					<Footer />
				</>} />
				<Route path='/vacancies' element={<>
					<BurgerMenu active={burgerActive} setActive={setBurgerActive} />
					<Header setActive={setBurgerActive} style={{ backgroundColor: '#191919' }} />
					< VacanciesPage />
					<Footer />
				</>} />
				<Route path='/clients-and-partners' element={<>
					<BurgerMenu active={burgerActive} setActive={setBurgerActive} />
					<Header setActive={setBurgerActive} style={{ backgroundColor: '#191919' }} />
					< ClientsAndPartners />
					<Footer />
				</>} />
				<Route path='/news' element={<>
					<BurgerMenu active={burgerActive} setActive={setBurgerActive} />
					<Header setActive={setBurgerActive} style={{ backgroundColor: '#191919' }} />
					< NewsPage />
					<Footer />
				</>} />
				<Route path='/login' element={< LoginPage />} />
				<Route path='/cabinet' element={<CabinetPage />} />
			</Routes>

		</BrowserRouter >
	);
}

export default App;
