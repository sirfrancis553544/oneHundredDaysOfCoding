import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    mxResults: 5,
    key: "AIzaSyCqgYOV5bpgoQfb9hlDiUyjv-HzDUt3SHg",
  },
});
