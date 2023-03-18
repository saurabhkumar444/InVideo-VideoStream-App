import {
  categoryList,
  commentsList,
  searchResult,
  searchresultValue,
  selectchanneldetails,
  selectedVideoChannnelvideolist,
  selectedvideodetails,
  videolist,
} from "./demoData";

1;

export const getvideoList = async () => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
  // return videolist;
};
export const youtubeSearchApi = async (searchValue) => {
  const data = await fetch(
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
      searchValue
  );
  const json = await data.json();
  console.log(json[1]);
  return json[1];
  // return searchResult;
};

export const getCategoryApi = async () => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videoCategories?&regionCode=IN&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
  // return categoryList;
};

export const getCommentsApi = async (youTubeVideochannelId) => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=" +
      youTubeVideochannelId +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
  // return commentsList;
};

export const youtubeGetSearchValueAPI = async (value) => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
      value +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
  // return searchresultValue;
};

export const getSelectedChennelDetails = async (value) => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
      value +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
  // return selectchanneldetails;
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
  // return selectedvideodetails;
};

export const getSelectedChannelVideoList = async (value) => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&&maxResults=10&channelId=" +
      value +
      "&key=" +
      API_KEY
  );
  const json = await data.json();
  return json?.items;
  // return selectedVideoChannnelvideolist;
};
