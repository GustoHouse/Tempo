import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {format} from 'moment-duration-format';

import SingleTimer from './SingleTimer.jsx';

export default class TimerList extends TrackerReact(React.Component) {
    
 
 	constructor(){
        super();
        
        this.state = {
            subscription: {
                timers: Meteor.subscribe("allTimers")
            }
        }

   }
    
    componentWillUnmount() {
        this.state.subscription.timers.stop();
    }
    
    timers(){
        return Timers.find({}, {sort: {createdDate: -1}}).fetch();
    }
		
		  
    
    
    
    render(){
	    
	    	increase = 0;
	    	    
        return(
            <div id="timer-list">
            
                {this.timers().map( (timer) => {
                    return <SingleTimer key={timer._id} timer={timer} /> 
                })}

            </div>
        )
    }

}

