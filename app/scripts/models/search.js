/*global Spotmvc, Backbone*/

var SearchModel = Backbone.Model.extend({

  url: function() {
    return 'https://api.spotify.com/v1/search?q=' + this.query + '&type=' + this.types;
  },

  initialize: function() {
    this.types = 'album';
    this.query = 'Basic Channel';
  },

  validate: function(attrs, options) {},

  parse: function(response, options) {
    return response;
  }
});