Meteor.methods({
    
	setCurrentTimer() {
		sendTimer = Timers.findOne({ isRunning: true });
		 return sendTimer._id;
	},
	
	
	addTimer(timer, currentTimer){
		
		Timers.update( currentTimer, {
			
			$set: {
				
				isRunning: false,
				lastStarted: moment().valueOf()
				
			}
			
	  });
	   
	  let newTimer = Timers.insert({
	      timerName: timer,
	      isRunning: true,
	      elapsedTime: 0,
	      lastStarted: moment().valueOf(),
	      createdDate: moment().valueOf()
	  });
	  
	  return newTimer;
	    
	},
	
	stopTimer(timerId, runningTime){
	  
	  Timers.update( timerId, {
			
			$set: {
				
				isRunning: false,
				elapsedTime: runningTime
				
			}
			
	  });
	    
	},
	
	playTimer(timerId, currentTimer){
	   
	  Timers.update( currentTimer, {
			
			$set: {
				
				isRunning: false,
				lastStarted: moment().valueOf()
				
			}
			
	  });
	  
	  Timers.update( timerId, {
			
			$set: {
				
				isRunning: true,
				lastStarted: moment().valueOf()
				
			}
			
	  });
	    
	},

	getServerTime: function () {
		return moment().valueOf();
	}

});