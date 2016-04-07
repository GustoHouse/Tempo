import React, {Component} from 'react';
import {format} from 'moment-duration-format';

export default class SingleTimer extends Component {	
	
	stopTimer(event) {
		
		event.preventDefault();
		
		let timerID = this.props.timer._id;
		
		let timeDiff = new Date().getTime() + this.props.timer.elapsedTime  - this.props.timer.lastStarted;
						
		Meteor.call('stopTimer', timerID, timeDiff, ()=>{
			Session.set('currentTimer', undefined);
		});
		
	}
	
	playTimer(event) {
		
		event.preventDefault();
		
		let timerID = this.props.timer._id;
		
		let currentTimer = Session.get('currentTimer', timerID);
		
		Meteor.call('playTimer', timerID, currentTimer, ()=>{
			Session.set('currentTimer', timerID);
		});
		
	}
	
	render(){	
		
	  return ( 
	  	<div className="single-timer" id={this.props.timer._id} data-running={this.props.timer.isRunning} data-laststarted={this.props.timer.lastStarted} data-elapsed={this.props.timer.elapsedTime} data-runningtime="">
	  		{this.props.timer.timerName}
	  		<div className="stopwatch">{ moment.duration(this.props.timer.elapsedTime, "milliseconds").format("hh:mm:ss", { trim: false })}</div>

	  		<form className={this.props.timer.isRunning === true ? 'display-show' : 'display-none'} onSubmit={this.stopTimer.bind(this)}>
	  			<button className="fa fa-pause"></button>
	  		</form>
	  		<form className={this.props.timer.isRunning === true ? 'display-none' : 'display-show'} onSubmit={this.playTimer.bind(this)}>
	  			<button className="fa fa-play"></button>
	  		</form>
	  	</div> 
	  )
	  
	}
}