import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Meteor.startup(function () {
 	Meteor.call('setCurrentTimer', (error, result)=>{
        
        let userObj = Meteor.user();
        
        if( userObj != undefined ){

            UserSession.set('currentTimer' + userObj._id , result);
        
        }
        
 	});
});

export default class Header extends TrackerReact(React.Component) {
	
    constructor(){
        super();

        this.state = {
            subscription: {
                loggedInUser: Meteor.subscribe("loggedInUser")
            }
        }
    }
  
    componentWillUnmount() {
      this.state.subscription.loggedInUser.stop();
    }
	
	
	render(){
        
        let userObj = Meteor.user();
        
        if( userObj == undefined ){
            return (<div></div>)
        }else{
	        
          return(                
		        <div id="header-container">
		            <img id="logo" src="tempo-logo-symbol.svg" />
		            <div id="user-badge">
		            	{Meteor.user().profile.firstName} <i className="fa fa-caret-down"></i>
		            </div>
		            <div id="user-drop-down">
		
		            </div>
		        </div>
          )
          
        }
          
    }
}
