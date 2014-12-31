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
    'routes/router'
    ], function ($, Backbone, bootstrap, SearchModel, Router) {
      //main app init will go here
      $(document).ready(function () {

        //creates an object with models and router properties
        window.spotapp = { 
            models: {}, 
            router: {} 
        };

        spotapp.models.searchModel = new SearchModel();

        spotapp.router = new Router({
            searchModel: spotapp.models.searchModel
        });

        Backbone.history.start();
        
    });

});



