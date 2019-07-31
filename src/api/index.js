import axios from "axios";

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`)
}
function fetchCommentItem(itemId) {
  // https://api.hnpwa.com/v0/item/13831370.json
  return axios.get(`${config.baseUrl}item/${itemId}.json`)
}

export {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo,fetchCommentItem}
