import React, { Component } from 'react';
import moment from 'moment';
import { FaTicket, FaMapMarker, FaYoutubePlay, FaSoundcloud } from 'react-icons/lib/fa'
import YTPlayer from '../players/YTPlayer';
import './../styles/Event.css';

class Event extends Component {

	attributes() {
		return this.props.eventData;
	}

	openYoutubePlayer() {
		let player = new YTPlayer(this.attributes().youtube_video_id);
		player.playVideo();
	}

	render() {
		return (
			<div className="Event">
				<div className="name">
					<div className="headliner">
						<a href={ this.attributes().vendor_url }>
							{ this.attributes().headliner_name }
							{
								this.attributes().opener_name &&
								<div className="opener">
									with { this.attributes().opener_name }
								</div>
							}
						</a>
					</div>
				</div>
				<div className="details">
					<div className="venue">
						{ moment(this.attributes().starts_at).format('h:mma') } @ { this.attributes().venue_name }
					</div>
					<div className="date">
						{ moment(this.attributes().starts_at).format('MMMM Do') }
					</div>
				</div>
				<div className="actions">
					<div>
						<a href={ this.attributes().tickets } target="_blank">
							<FaTicket className="action ticket">
							</FaTicket>
						</a>
						<FaMapMarker className="action marker">
						</FaMapMarker>
						{
							this.attributes().youtube_video_id &&
							<FaYoutubePlay className="action youtube" onClick={this.openYoutubePlayer.bind(this)}/>
						}
						<FaSoundcloud className="action soundcloud">
							<a></a>
						</FaSoundcloud>
					</div>
				</div>
			</div>
		)
			;
	}
}

export default Event;
