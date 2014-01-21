(function () {

  'use strict';

  Flown.Views.LevelsView = Backbone.View.extend({

    el: '#stage',

    template: $('#levelsView').html(),

    render: function () {
      this.$el.html(this.template);
    },

    events: {
      "click #edit": "editLevels",
      "click #load": "loadLevels",
      "click #back": "back"
    },

    editGame: function () {
      Flown.router.navigate('levels/edit', {trigger: true});
    },

    loadLevels: function () {
      Flown.router.navigate('levels/load', {trigger: true});
    },

    back: function () {
      Flown.router.navigate('', {trigger: true});
    }

  });

})();

