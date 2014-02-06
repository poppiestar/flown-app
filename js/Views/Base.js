(function () {

  'use strict';

  // This is shamelessly ripped off from Ghost, but it's really nice
  Flown.View = Backbone.View.extend({
    
    addSubView: function (view) {
      if( !(view instanceof Backbone.View) ) {
        throw new Error("Subview must be a Backbone view");
      }
      this.subviews = this.subviews || [];
      this.subviews.push(view);
      return view;
    },

    removeSubviews: function () {
      var children = this.subviews;

      if (!children) {
        return this;
      }

      _.invoke(children, "remove");

      this.subviews = [];
      return this;
    },

    remove: function () {
      if (this.subview) {
        this.removeSubviews();
      }
      return Backbone.View.prototype.remove.apply(this, arguments);
    }

  });

})();

