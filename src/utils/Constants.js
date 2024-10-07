const list = [
  "ALL",
  "Gaming",
  "TMKOC",
  "Cricket",
  "SNL",
  "Songs",
  "Valorant",
  "BGMI",
  "COC",
  "Maharashtra",
  "US Elections",
  "META",
  "Football",
  "BMPS",
];
export const OFFSET_LIVE_CHAT=15;
const api = "AIzaSyB95MvuZZVbZEXZZ2oHxnLrM8aKrwxDj9k";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  api;

export const GOOGLE_SEARCH_API=`https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=`
export default list;
