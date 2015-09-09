(function(){if(Meteor.isClient){
    console.log("Hello World");

    Template.leaderboard.helpers({
      'player': function(){
        return PlayersList.find();
      },
      'selectedClass':function(){
        var playerId = this._id;
        var selectedPlayer = Session.get('selectedPlayer');
        if (playerId==selectedPlayer){
            return 'selected'
        }

      }
    });

    Template.leaderboard.events({
      'click .player':function(){
        Session.set('selectedPlayer',this._id);
      },
      'click .increment':function(){
        var selectedPlayer = Session.get('selectedPlayer');
        PlayersList.update(selectedPlayer,{$inc:{score: 5}});
      },
      'click .decrement':function(){
        var selectedPlayer = Session.get('selectedPlayer');
        PlayersList.update(selectedPlayer,{$inc:{score: -5}});
      }
    });
}


//create a mongo db collection to store player data
PlayersList = new Mongo.Collection('players');

})();
