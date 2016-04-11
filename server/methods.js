Meteor.methods({
    
	setCurrentTimer() {
		sendTimer = Timers.findOne({ isRunning: true });
		 if(sendTimer) {
			 return sendTimer._id;
			}
	},
	
	
	
	
	
	
	
	
	
	
	
	addTimer(currentTimer, timerName, userId){
		
		if (currentTimer != undefined) {
			
			Timers.update( currentTimer, {
			
				$set: {
					
					isRunning: false
					
				}
			
			});	
			
			SyncedCron.remove('job_' + currentTimer);
			
		}
	   
	  let newTimer = Timers.insert({
	      timerName: timerName,
	      isRunning: true,
	      elapsedTime: 0,
	      createdDate: moment().valueOf(),
	      createdBy: userId
	  }, function(error, id){
				SyncedCron.add({
					name: 'job_' +  id,
					schedule: function(parser) {
					 return parser.recur().every(1).second();
					},
					job: function() {
					 	
					 	findId = Timers.findOne({ _id: id });
					 	
					 	if (findId) {
						 	
						 	Timers.update( id, {
						 	
						 		$set: {
							 	
							 		elapsedTime: findId.elapsedTime + 1000
							 	
						 		}
						 	
					 		});
						 	
					 	}
					
					}
				});
		  	SyncedCron.start('job_' +  id);
	  });
	  
	  return newTimer;
	    
	},	
	
	
	
	
	
	
	
	
	
	
	
	
	
	stopTimer(timerId){
	  
	  Timers.update( timerId, {
			
			$set: {
				
				isRunning: false
				
			}
			
	  });
	  console.log("STOP TIMER" + timerId);
	  SyncedCron.remove('job_' +  timerId);
	    
	},
	
	playTimer(timerId, currentTimer){
	   
	 if (currentTimer != undefined) {
			
			Timers.update( currentTimer, {
			
				$set: {
					
					isRunning: false
					
				}
			
			});	
			
		}
			
		SyncedCron.remove('job_' + currentTimer);
	  
	  Timers.update( timerId, {
			
			$set: {
				
				isRunning: true
				
			}
			
	  });
	  
	  SyncedCron.add({
			name: 'job_' +  timerId,
			schedule: function(parser) {
			 return parser.recur().every(1).second();
			},
			job: function() {
			 	
			 	findId = Timers.findOne({ _id: timerId });
			 	
			 	if (findId) {
				 	
				 	Timers.update( timerId, {
				 	
				 		$set: {
					 	
					 		elapsedTime: findId.elapsedTime + 1000
					 	
				 		}
				 	
			 		});
				 	
			 	}
			
			}
		});
		SyncedCron.start('job_' +  timerId);
	    
	},

	getServerTime: function () {
		return moment().valueOf();
	}

});