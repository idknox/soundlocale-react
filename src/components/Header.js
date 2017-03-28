import React, { Component } from 'react';
import './../styles/Header.css';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="title">
					<h1>Sound Locale</h1>
				</div>
			</header>
		);
	}
}

export default Header;
