const API_KEY = "AIzaSyAI9FhAS1ilSj9RM6U8-gKJ3_CJxq89x_0";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_CATEGORY_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?&regionCode=IN&key=" +
  API_KEY;

// export const YOUTUBE_COMMENT_API =
//   "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=" +
//   API_KEY;
export const YOUTUBE_COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=" +
  API_KEY;

const Youtube_API = async ({ chennelId }) => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=" +
      chennelId +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
};

export default Youtube_API;
