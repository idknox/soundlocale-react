import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import './../styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="main">
				<Header />
				<Home />
			</div>
		);
	}
}

export default App;
