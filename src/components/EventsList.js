import React, { Component } from 'react';
import EventsService from '../services/eventsService';
import Event from './Event'
import './../styles/EventsList.css';

export default class EventsList extends Component {
	constructor(props) {
		super(props);
		this.state = {denverEvents: []}
	}

	componentDidMount() {
		let _this = this;
		new EventsService().fetch().then((response) => {
				_this.setState({
					denverEvents: response.data
				})
			}
		);
	}

	render() {
		return (
			<ul className="EventsList">
				{
					this.state.denverEvents.map((event) =>
						<li key={event.id}>
							<Event
								eventData={event}
							/>
						</li>
					)
				}
			</ul>
		);
	}
}