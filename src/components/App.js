import React, { Component } from 'react';
import Header from './Header';
import EventsPage from './EventsPage';
import './../styles/App.css';

export default class App extends Component {
	render() {
		return (
			<div className="main">
				<Header />
				<EventsPage />
				<div id="youtube-player"></div>
			</div>
		);
	}
}

