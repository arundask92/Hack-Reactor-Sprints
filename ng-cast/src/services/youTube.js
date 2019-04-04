angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function({key, query, max = 5}, callback) {

      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          key: key,
          q: query,
          maxResults: max,
          type: 'video',
          videoEmbeddable: 'true'
        }
      }).then(function successCallback(response) {

        callback(response.data.items);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        console.log(response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    };
  });
