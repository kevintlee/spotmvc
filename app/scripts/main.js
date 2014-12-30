/*global Spotmvc, $*/
'use strict';

require.config({
//Remember: only use shim config for non-AMD scripts,
//scripts that do not already call define(). The shim
//config will not work correctly if used on AMD scripts,
//in particular, the exports and init config will not
//be triggered, and the deps config will be confusing
//for those cases.
    shim: {
        bootstrap: {
            //These script dependencies should be loaded before loading
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs-text/text'
    },
    
});

require([
    'jquery',
    'backbone',
    'bootstrap',
    'models/search',
    'views/search',
    'views/albumsearch',
    'views/artistsearch'
    ], function ($, Backbone, bootstrap, SearchModel, SearchView, AlbumSearchView, ArtistSearchView) {
      //main app init will go here
      $(document).ready(function () {
        
        window.searchModel = new SearchModel();
        window.searchModel.fetch();
        
        window.searchView = new SearchView({
            el: $("#search-container")
        });

        window.albumSearchView = new AlbumSearchView({
            el: $('#album-search-container')
        });

        window.artistSearchView = new ArtistSearchView({
            el: $('#artist-search-container')
        });
    });

});



