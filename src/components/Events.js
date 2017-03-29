import React, { Component } from 'react';
import EventsList from './EventsList';
import './../styles/Events.css';

class Events extends Component {

	render() {
		return (
			<section className="Events">
				<h1>Denver Shows</h1>
				<EventsList />
			</section>
		);
	}
}

export default Events;
