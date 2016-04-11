import React from 'react';

export default class AddTimer extends React.Component {
	
	 addTimer(event){
        
		event.preventDefault();
		
		let currentTimer;
		
		let userObj = Meteor.user();
 	 if( userObj != undefined ){
      currentTimer = UserSession.get('currentTimer' + userObj._id);
      }		
	
		
		timerName = this.refs.timerName.value.trim(); 
		
		if (timerName == "") {
			return;
		} 
		
		if( userObj != undefined ){
			Meteor.call('addTimer', currentTimer, timerName, userObj._id, (error, result)=>{
				let userObj = Meteor.user();
	 	 if( userObj == undefined ){
	          return (<div></div>)
	      }else{
		 	UserSession.set('currentTimer' + userObj._id , result);
		 	}
				
			});
		}
		
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