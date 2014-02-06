(function () {

  'use strict';

  Flown.Router = Backbone.Router.extend({

    routes: {
      ''       : 'home',
      'start'  : 'viewLevelPacks',
      'levels' : 'levels'
    },

    home: function () {
      Flown.currentView = new Flown.Views.HomeView();
    },

    viewLevelPacks: function () {
      Flown.currentView = new Flown.Views.LevelPacksView();
    },

    levels: function() {
      Flown.currentView = new Flown.Views.LevelsView();
    }

  });

})();

