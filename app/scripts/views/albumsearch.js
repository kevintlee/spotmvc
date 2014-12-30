//album search view

define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templates/albumsearch.hbs',
    'text!templates/loading.hbs'
    ] , function ($, Backbone, Handlebars, albumSearchTemplate, loadingTemplate) {
        var AlbumSearchView = Backbone.View.extend({

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
                if (window.searchModel.types === 'album') {
                    var template = Handlebars.compile(albumSearchTemplate);
                    this.$el.html(template(searchModel.toJSON()));
                }
            },

            loading: function() {
                if (window.searchModel.types === 'album') {
                  var template = Handlebars.compile(loadingTemplate);
                  this.$el.html(template({}));
                }
            }

        });
    
        return AlbumSearchView;
});

