import React from 'react';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import News from '../News/News';
import Partners from '../Partners/Partners';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';
import OrderService from '../OrderService/OrderService';

const MainPage = () => {
	return (
		<>
			<Hero />
			<Services />
			<OrderService />
			<News />
			<Clients />
			{/* <Partners /> */}
			<Map />
		</>
	);
};

export default MainPage;
