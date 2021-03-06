(function(){if(Meteor.isClient){
    console.log("Hello World");

    Template.leaderboard.helpers({
      'player': function(){
        return PlayersList.find({},{sort:{score:-1,name: 1}})
      },
      'selectedClass':function(){
        var playerId = this._id;
        var selectedPlayer = Session.get('selectedPlayer');
        if (playerId==selectedPlayer){
            return 'selected'
        }
      },
      'showSelectedPlayer':function(){
        var selectedPlayer = Session.get('selectedPlayer');
        return PlayersList.findOne(selectedPlayer)
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
      },
      'submit form':function(event){
        event.preventDefault();
        var playerNameVar = event.target.playerName.value;
        PlayersList.insert({name: playerNameVar, score:0});
      },
      'click .remove':function(){
        var selectedPlayer = Session.get('selectedPlayer');
        PlayersList.remove(selectedPlayer);
      }
    });
}


//create a mongo db collection to store player data
PlayersList = new Mongo.Collection('players');

})();
