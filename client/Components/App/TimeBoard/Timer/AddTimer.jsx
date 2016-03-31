import React from 'react';

export default class AddTimer extends React.Component {
		
	render() {
		return (
			<form className="new-timer">
				<input type="text" ref="timer-name" placeholder="Timer name" />
			</form>
		)
	}
}