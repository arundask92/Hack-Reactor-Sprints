angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<',
    },
    controller: function(youTube) {
      this.searchResult = function(query) {
        this.result(query);
      };
    },
    templateUrl: 'src/templates/search.html'
  });
