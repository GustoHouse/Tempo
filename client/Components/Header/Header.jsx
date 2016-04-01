import React from 'react';

export default class Header extends React.Component {
    
	logout() {
	  Meteor.logout(function (err) {
	      FlowRouter.go('/login');
	  });
	}
	
	render(){
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
