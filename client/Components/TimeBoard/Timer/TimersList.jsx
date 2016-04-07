import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {format} from 'moment-duration-format';

import SingleTimer from './SingleTimer.jsx';


let increase = 0;

function updateTimers(){
			
	timers = $('.single-timer');
	
	for(i = 0; i < timers.length; i++){
		
		if( $(timers[i]).attr('data-running') == "true" ){
			
			let currentTimerElapsed = parseInt($(timers[i]).attr('data-elapsed'));
			
			let currentTimerElapsedMore = currentTimerElapsed + (increase * 1000);
			
			$(timers[i]).attr("data-runningtime", increase );
			$(timers[i]).find('.stopwatch').html(moment.duration(currentTimerElapsedMore, "milliseconds").format("hh:mm:ss", { trim: false }));
						
		}
		
	}
		
	increase = increase + 1;
		
}
	

setInterval(updateTimers, 1000); 

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

