import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Services from './components/Services/Services';

function App() {
	return (
		<div className="global_wrapper">
			<Header />
			<Services />
		</div>
	);
}

export default App;
