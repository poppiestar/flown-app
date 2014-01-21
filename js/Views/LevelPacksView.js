(function () {

  'use strict';

  Flown.Views.LevelPacksView = Backbone.View.extend({

    el: '#stage',

    template: _.template($('#levelPacksView').html()),

    collection: Flown.levelPacks,

    render: function () {
      this.$el.html(this.template({ levelPacks: this.collection }));
    },

    events: {
      "click #view": "viewLevelPack",
      "click #back": "back"
    },

    viewLevelPack: function (e) {
      var levelPack = $(e.currentTarget).data('level-id');
      Flown.router.navigate('levels/' + levelPack, {trigger: true});
    },

    back: function () {
      Flown.router.navigate('', {trigger: true});
    }

  });

})();

