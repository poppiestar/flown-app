(function () {

  'use strict';

  Flown.Router = Backbone.Router.extend({

    routes: {
      ''       : 'home',
      'levels' : 'levels'
    },

    home: function () {
      if( Flown.currentView ) {
        Flown.currentView.undelegateEvents();
      }
      Flown.currentView = new Flown.Views.HomeView();

      Flown.currentView.render();
    },

    levels: function() {
      if( Flown.currentView ) {
        Flown.currentView.undelegateEvents();
      }
      Flown.currentView = new Flown.Views.LevelsView();

      Flown.currentView.render();
    }

  });

})();

