import React from 'react';

export default class AddTimer extends React.Component {
		
	render() {
		return (
			<form className="new-timer">
				<i className="fa fa-plus"></i>
				<input type="text" ref="timer-name" placeholder="Add a time block" />
			</form>
		)
	}
}