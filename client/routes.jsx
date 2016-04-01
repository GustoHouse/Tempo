import React from 'react';
import {mount} from 'react-mounter';
import {Meteor} from 'meteor/meteor'

// Layouts
import {RegisterLayout} from './Layouts/RegisterLayout.jsx';
import {LoginLayout} from './Layouts/LoginLayout.jsx';
import {MainLayout} from './Layouts/MainLayout.jsx';
import TimeBoard from './Components/TimeBoard/TimeBoard.jsx';

// Auth Components
import RegisterForm from './Components/Auth/Register/RegisterForm.jsx';
import LoginForm from './Components/Auth/Login/LoginForm.jsx';

// Interface Components
import Header from './Components/Header/Header.jsx'

// Content Components


// Route Groups
var PublicRoute = FlowRouter.group();
var AuthenticatedRoute = FlowRouter.group({
                    
    triggersEnter: [function(context, redirect) {

        if( Meteor.userId() == null ){
            
            route = FlowRouter.current();
            
            Session.set("redirectAfterLogin", route.path);
            
            FlowRouter.go('/login');
            
        }
                    
    }]
    
});


PublicRoute.route('/register', {
    action(){
        mount(RegisterLayout,{
            content: <RegisterForm name="Request" />       
        })
    }
});

PublicRoute.route('/login', {
    action(){
        mount(LoginLayout,{
            content: <LoginForm name="Login" />       
        })
    }
});

AuthenticatedRoute.route('/', {
	action() {
		mount (MainLayout, {
			header: <Header />,
			content: <TimeBoard />
		})
	}
})