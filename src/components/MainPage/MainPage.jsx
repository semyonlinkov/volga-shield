import React from 'react';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import News from '../News/News';
import Partners from '../Partners/Partners';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';

const MainPage = () => {
	return (
		<>
			<Hero />
			<Services />
			<News />
			<Clients />
			<Partners />
			<Map />
		</>
	);
};

export default MainPage;
