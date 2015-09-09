(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw("<h1>Leaderboard</h1>\n  <!--to make the leaderboard template available in the interface add the following -->\n  <!-- spacebar syntax is used in html to make something appear dynamically -->\n  "), Spacebars.include(view.lookupTemplate("leaderboard")) ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("leaderboard");
Template["leaderboard"] = new Template("Template.leaderboard", (function() {
  var view = this;
  return "Hello World";
}));

})();
