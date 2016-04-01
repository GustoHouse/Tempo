import React from 'react';
import AddTimer from './Timer/AddTimer.jsx';

export default class TimeBoard extends React.Component {
	render() {
		return (
			<div className="time-board-container">
				<AddTimer/>
			</div>
		)
	}
}