import React from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideos: null,
  };
  componentDidMount() {
    this.handleSubmit("Javascript");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: { q: searchTerm },
    });

    this.setState({
      videos: response.data.items,
      selectedVideos: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={6}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={6}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
// ** npm start