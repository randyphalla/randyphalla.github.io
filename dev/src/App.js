import React, { Component } from 'react';

import './assets/css/bootstrap.min.css';
import './assets/css/font.css';
import './App.css';

import ComingSoonPage from './pages/coming-soon/coming-soon-page';

class App extends Component {
	render() {
		return (
			<div className="main-content">
				<ComingSoonPage />
			</div>
		);
	}
}

export default App;
