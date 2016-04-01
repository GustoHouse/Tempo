import React from 'react';

export default class RegisterForm extends React.Component {
    
     createOrganizer(event){
        
        event.preventDefault();
        
        email = this.refs.register_email.value.trim(); 
        password = this.refs.register_password.value.trim(); 
        first = this.refs.register_firstName.value.trim(); 
        last = this.refs.register_lastName.value.trim();

        Accounts.createUser({
            email: email,
            password: password,
            profile:{
                firstName: first,
                lastName: last
            }
        });

        FlowRouter.go('/');
        
    }
    
    render(){
        return(
          <form onSubmit={this.createOrganizer.bind(this)}>
              <input type="text" ref="register_firstName" placeholder="First Name" />
              <input type="text" ref="register_lastName" placeholder="Last Name" />
              <input type="email" ref="register_email" placeholder="Email Address" />
              <input type="password" ref="register_password" placeholder="Password" />
              <input type="submit" ref="register_button" value="Register" />
          </form>
        )
    }
}