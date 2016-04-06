import React from 'react';

export default class AddTimer extends React.Component {
	
	 addTimer(event){
        
		event.preventDefault();
		
		let currentTimer = Session.get('currentTimer');
		
		timer = this.refs.timerName.value.trim(); 
		
		if (timer == "") {
			return;
		} 
		
		Meteor.call('addTimer', timer, currentTimer, (error, result)=>{
			Session.set('currentTimer', result);
		});
		
		this.refs.timerName.value="";
      
   }
		
	render() {
		return (
			<form className="new-timer" onSubmit={this.addTimer.bind(this)}>
				<i className="fa fa-plus"></i>
				<input type="text" ref="timerName" placeholder="Add a time block" />
				<input type="submit" ref="np_button" />
			</form>
		)
	}
}