class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    }
  }
   
  componentDidMount() {
    this.getYouTubeVideos('pitbull puppies');
  }
 
  handleClickVideo (id) {
    for (var i = 0; i < this.state.videos.length; i++ ) {
      if ( this.state.videos[i].id.videoId === id) {
        this.setState({currentVideo: this.state.videos[i]});
     }
    }
  }
  
  getYouTubeVideos (query) {
    console.log(this.props)
    var options = {
      key : this.props.API_KEY,
      query: query
    }

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} handleClickVideo={this.handleClickVideo.bind(this)} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
