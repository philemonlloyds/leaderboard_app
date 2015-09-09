(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw("<h1>Leaderboard</h1>\n  <!--to make the leaderboard template available in the interface add the following -->\n  <!-- spacebar syntax is used in html to make something appear dynamically -->\n  "), Spacebars.include(view.lookupTemplate("leaderboard")) ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("leaderboard");
Template["leaderboard"] = new Template("Template.leaderboard", (function() {
  var view = this;
  return [ HTML.Raw('<input type="button" class="increment" value="Give 5 Points">\n  <input type="button" class="decrement" value="Take 5 Points">\n  '), HTML.UL("\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("player"));
  }, function() {
    return [ "\n    ", HTML.LI({
      "class": function() {
        return [ "player ", Spacebars.mustache(view.lookup("selectedClass")) ];
      }
    }, Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    }), ":", Blaze.View("lookup:score", function() {
      return Spacebars.mustache(view.lookup("score"));
    })), "\n    " ];
  }), "\n  ") ];
}));

})();
