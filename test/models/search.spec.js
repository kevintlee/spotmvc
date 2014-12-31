/*global beforeEach, describe, it, assert, expect  */
'use strict';

define([
	'models/search'
	], function(SearchModel){
		//mochas describe() encapsulates the tests
		describe('Search Model', function(){
			beforeEach(function(){
				this.searchModel = new SearchModel;
			});

			//it() is a chai assertion, for a unit test
			it('should update the url when query is changed, album test', function(){
				//test code goes here
				this.searchModel.query = 'gas';
				this.searchModel.types = 'album'; 
				var url = this.searchModel.url();
				expect(url).to.equal('https://api.spotify.com/v1/search?q=gas&type=album');
			});

			it('should update the url when query is changed, artist test', function(){
				//test code goes here
				this.searchModel.query = 'hello';
				this.searchModel.types = 'artist'; 
				var url = this.searchModel.url();
				expect(url).to.equal('https://api.spotify.com/v1/search?q=hello&type=artist');
			});


		});
	});