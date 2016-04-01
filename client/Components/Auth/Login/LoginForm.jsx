import React from 'react';

export default class LoginForm extends React.Component {
	
	login(e) {
	  e.preventDefault();
	  
	  email = this.refs.login_email.value.trim();
	  password = this.refs.login_password.value.trim();
	  
	  Meteor.loginWithPassword( email, password, function(){
	   
	      redirect = Session.get("redirectAfterLogin");
	
	      if( redirect != "" && redirect != "/login" && redirect != undefined){
	          FlowRouter.go(redirect);
	      }else{
	          FlowRouter.go("/");
	      }
	      
	      Session.set("redirectAfterLogin", "");
	      
	  });
   }
	
	render() {
		return (
			<div className="container">
				<div className="form-container">
					<img src="tempo-logo-symbol.svg"/>
					<form onSubmit={this.login.bind(this)}>
						<div className="form-group">
							<label>Email</label>
							<input type="email" ref="login_email" placeholder="Email Address"/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="password" ref="login_password" placeholder="Password"/>
						</div>
						<a href="/" className="forgot-password">Forgot password?</a>
						<input type="submit" ref="login_button" value="Login"/>
					</form>
				</div>
				<div className="new-reg-link">
					<p>New here? Creating an account is just a <a href="/register">click away</a>.</p>
				</div>
			</div>
		)
	}
	
}