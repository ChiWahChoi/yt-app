import axios from "axios";

const KEY = "AIzaSyAGw842ylXsoq-mS3BOdLGVQ4YK1UNFIAM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", type: "video", maxResults: 5, key: KEY },
});
