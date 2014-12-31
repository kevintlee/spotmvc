//album search view

define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templates/artistsearch.hbs',
    'text!templates/loading.hbs'
    ] , function ($, Backbone, Handlebars, artistSearchTemplate, loadingTemplate) {
        var ArtistSearchView = Backbone.View.extend({

            //backbone event listeners
            events:{},

            initialize: function() {
                this.listenTo(this.model, 'all', function() {
                    console.log(arguments);
                });

                this.listenTo(this.model, 'request', this.loading);
                this.listenTo(this.model, 'change', this.render);
            },

            render: function() {
                if (this.model.types === 'artist') {
                    var template = Handlebars.compile(artistSearchTemplate);
                    this.$el.html(template(this.model.toJSON()));
                }
            },

            loading: function() {
                if (this.model.types === 'artist') {
                  var template = Handlebars.compile(loadingTemplate);
                  this.$el.html(template({}));
                }
            }
        });
        
        return ArtistSearchView;
});