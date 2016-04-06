Meteor.publish("allTimers", function(){
    return Timers.find();
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