(function () {

  'use strict';

  Flown.Views.HomeView = Flown.View.extend({

    initialize: function() {
      this.render();
    },

    el: '#stage',

    template: _.template($('#homeView').html()),

    render: function () {
      this.$el.html(this.template());
    },

    events: {
      "click #play": "startGame",
      "click #levels": "startLevels"
    },

    startGame: function () {
      Flown.router.navigate('start', {trigger: true});
    },

    startLevels: function () {
      Flown.router.navigate('levels', {trigger: true});
    }

  });

})();

