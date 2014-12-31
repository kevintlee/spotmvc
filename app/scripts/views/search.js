//search view
define([
    'jquery',
    'backbone',
    ] , function ($, Backbone) {

      var SearchView = Backbone.View.extend({

        //backbone event listeners
        events: {
          'click #submit': 'search',
          'submit form': 'search',
          'change input[name=type]': 'selectType'
        },
        initialize: function(options) {
          this.router = options.router;
        },
        search: function(ev) {
          ev.preventDefault();
          this.model.query = $('#search-query').val();
          // this.model.fetch();
          this.router.navigate('search' + '/' + this.model.types + '/' + this.model.query, {trigger: true});
        },
        selectType: function(ev) {
          if ($('#type-select').is(':checked')) {
              this.model.types = 'album';
          } else {
              this.model.types = 'artist';
          }
        }
      });

      return SearchView;
});
