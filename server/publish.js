Meteor.publish("allTimers", function(){
    var currentUser = this.userId;
    return Timers.find({createdBy: currentUser});
});

Meteor.publish('loggedInUser', function() {
    var currentUser = this.userId;
    return Meteor.users.find({_id: currentUser}, {
        fields: {
            'email': 1,
            'profile': 1
        }
    });
});