import React, {Component} from 'react';

export default class SingleTimer extends Component {	
	
	stopTimer(event) {
		event.preventDefault();
		let timerID = this.props.timer._id;
		let runningTime = $("#" + this.props.timer._id).attr('data-runningtime');
		Meteor.call('stopTimer', timerID, runningTime, ()=>{
			Session.set('currentTimer', undefined);
			console.log(Session.get('currentTimer'));
		});
	}
	
	playTimer(event) {
		event.preventDefault();
		let timerID = this.props.timer._id;
		let currentTimer = Session.get('currentTimer', timerID);
		Meteor.call('playTimer', timerID, currentTimer, ()=>{
			Session.set('currentTimer', timerID);
			console.log(Session.get('currentTimer'));
		});
	}
	
	render(){	
						
	  return ( 
	  	<div className="single-timer" id={this.props.timer._id} data-running={this.props.timer.isRunning} data-laststarted={this.props.timer.lastStarted} data-elapsed={this.props.timer.elapsedTime} data-runningtime="">
	  		{this.props.timer.timerName}
	  		<div className="stopwatch"></div>
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