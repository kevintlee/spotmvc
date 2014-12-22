/*global Spotmvc, $*/

$(document).ready(function () {
    'use strict';
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
