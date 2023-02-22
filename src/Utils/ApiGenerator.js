const API_KEY = "AIzaSyAI9FhAS1ilSj9RM6U8-gKJ3_CJxq89x_0";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const youtubeSearchApi =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_CATEGORY_API = async () => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videoCategories?&regionCode=IN&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
};

export const YOUTUBE_COMMENT_API = async (youTubeVideochannelId) => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=" +
      youTubeVideochannelId +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
};

export const youtubeGetSearchValueAPI = async (value) => {
  console.log(
    ">>>>",
    value,
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
      value +
      "&key=" +
      API_KEY
  );
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
      value +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
};