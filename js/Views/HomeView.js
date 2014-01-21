(function () {

  'use strict';

  Flown.Views.HomeView = Backbone.View.extend({

    el: '#stage',

    template: $('#homeView').html(),

    render: function () {
      this.$el.html(this.template);
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

