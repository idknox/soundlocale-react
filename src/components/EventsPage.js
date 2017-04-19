import React, { Component } from 'react';
import moment from 'moment';
import EventsList from './EventsList';
import './../styles/EventsPage.css';

export default class EventsPage extends Component {

	render() {
		return (
			<section className="EventsPage">
				<h1>Denver Shows</h1>
				<div className="today">Today</div>
				<EventsList />
			</section>
		);
	}
}

