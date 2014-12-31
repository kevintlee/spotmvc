/* global describe, it */

require.config({
  baseUrl: '/',
  paths: {
    jquery: '/bower_components/jquery/dist/jquery',
    backbone: '/bower_components/backbone/backbone',
    underscore: '/bower_components/lodash/dist/lodash',
    bootstrap: '/bower_components/sass-bootstrap/dist/js/bootstrap',
    handlebars: '/bower_components/handlebars/handlebars',
    text: '/bower_components/requirejs-text/text',
    mocha: '../bower_components/mocha/mocha',
    chai: '../bower_components/chai/chai'
  }
});

define(function(require) {
  require('jquery');
  var chai = require('chai');
  var mocha = require('mocha');

  // Chai
  window.assert = chai.assert;
  window.expect = chai.expect;

  window.mocha.setup('bdd');

  require([

  //our test scripts go here...

  ], function(require) {
    window.mocha.run();
  });

});