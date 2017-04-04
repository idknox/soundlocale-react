import React, { Component } from 'react';
import moment from 'moment';
import { FaTicket, FaMapMarker, FaYoutubePlay, FaSoundcloud } from 'react-icons/lib/fa'
import './../styles/Event.css';

class Event extends Component {

	attributes() {
		console.log(process.env);
		return this.props.eventData;
	}
	
	render() {
		return (
			<div className="Event">
				<div className="name">
					<div className="headliner">
						{this.attributes().headliner_name}
						{this.attributes().opener_name &&
						<div className="opener">
							with {this.attributes().opener_name}
						</div>
						}
					</div>
				</div>
				<div className="details">
					<div className="venue">
						{moment(this.attributes().starts_at).format('h:mma')} @ {this.attributes().venue_name}
					</div>
					<div className="date">
						{moment(this.attributes().starts_at).format('MMMM Do')}
					</div>
				</div>
				<div className="actions">
					<div>
						<FaTicket className="action ticket">
							<a href={this.attributes().tickets}></a>
						</FaTicket>
						<FaMapMarker className="action marker">
							<a></a>
						</FaMapMarker>
						<FaYoutubePlay className="action youtube">
							<a></a>
						</FaYoutubePlay>
						<FaSoundcloud className="action soundcloud">
							<a></a>
						</FaSoundcloud>
					</div>
				</div>
			</div>
		);
	}
}

export default Event;
