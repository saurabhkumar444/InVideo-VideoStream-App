// const API_KEY = "AIzaSyAI9FhAS1ilSj9RM6U8-gKJ3_CJxq89x_0";
const API_KEY = "AIzaSyBs6LBSX9iuWHDvBKKWmpZQGVtYvi--dmo";

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
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" +
      value +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
};

export const youtubeSelectedVideo = async (value) => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
      value +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
};

export const getSelectedVideoDetails = async (value) => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
      value +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
};
