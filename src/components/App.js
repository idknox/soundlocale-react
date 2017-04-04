import React, { Component } from 'react';
import Header from './Header';
import Events from './Events';
import './../styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="main">
				<Header />
				<Events />
				<div id="youtube-player"></div>
			</div>
		);
	}
}

export default App;
