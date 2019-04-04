angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.$onInit = function() {
        youTube.search({key: YOUTUBE_API_KEY, query: 'dogs', max: 5}, function(response) {
          this.videos = response;
          this.currentVideo = response[0];
        }.bind(this));
      };

      this.selectVideo = function(video) {
        this.currentVideo = video;

      }.bind(this);

      this.searchResults = function(query) {
        youTube.search({key: YOUTUBE_API_KEY, query: query, max: 5}, function(response) {
          this.videos = response;
          console.log(this.videos, 'here');
          this.currentVideo = response[0];
        }.bind(this));
      }.bind(this);

      // this.setState = function(currentVideo, videos) {
      //   this.currentVideo = currentVideo;
      //   this.videos = videos;
      // }.bind(this);


    },
    templateUrl: 'src/templates/app.html'
  });
 