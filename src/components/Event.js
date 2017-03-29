import React, { Component } from 'react';
import moment from 'moment';

import './../styles/Event.css';

class Event extends Component {
	render() {
		return (
			<div className="Event">
				<div className="name">
					<div className="headliner">
						{this.props.eventData.headliner_name}
						{this.props.eventData.opener_name &&
						<div className="opener">
							with {this.props.eventData.opener_name}
						</div>
						}
					</div>
				</div>
				<div className="details">
					<div className="venue">
						{moment(this.props.eventData.starts_at).format('h:mma')} @ {this.props.eventData.venue_name}
					</div>
					<div className="date">
						{moment(this.props.eventData.starts_at).format('MMMM Do')}
					</div>
				</div>
			</div>
		);
	}
}

export default Event;
