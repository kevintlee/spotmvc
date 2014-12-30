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
                this.listenTo(window.searchModel, 'all', function() {
                    console.log(arguments);
                });

                this.listenTo(window.searchModel, 'request', this.loading);
                this.listenTo(window.searchModel, 'change', this.render);
            },

            render: function() {
                if (window.searchModel.types === 'artist') {
                    var template = Handlebars.compile(artistSearchTemplate);
                    this.$el.html(template(searchModel.toJSON()));
                }
            },

            loading: function() {
                if (window.searchModel.types === 'artist') {
                  var template = Handlebars.compile(loadingTemplate);
                  this.$el.html(template({}));
                }
            }
        });
        
        return ArtistSearchView;
});