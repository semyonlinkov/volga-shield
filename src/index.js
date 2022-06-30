import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import "react-quill/dist/quill.core.css";
// import 'antd/dist/antd.css';
import "./antd-customized.css";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
);


