import React, { Component } from 'react';
import './../styles/Section.css';

class Section extends Component {
	render() {
		return (
			<section>
				<h1>{this.props.title}</h1>
			</section>
		);
	}
}

export default Section;
