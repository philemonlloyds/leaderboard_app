if(Meteor.isClient){
    console.log("Hello World");
}


//create a mongo db collection to store player data
PlayersList = new Mongo.Collection('players');
