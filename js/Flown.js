(function () {

  'use strict';

  var Flown = {
    Views: {},
    Models: {},
    Collections: {},
    currentView: null
  };

  Flown.init = function () {
    Flown.router = new Flown.Router();

    Backbone.history.start();
  };

  window.Flown = Flown;

})();

