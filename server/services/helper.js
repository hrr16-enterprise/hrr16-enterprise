const axios = require('axios');

// Get helper function for making 'GET' calls to external api
const getHelper = (url) => {
  return axios.get(url)
  .then((res) => {
    return res;
  })
  .catch((res) => {
    return res;
  });
};

// Post helper function for making 'POST' calls to external api
const postHelper = (url, data) => {
  return axios.post(url, data)
  .then((res) => {
    return res;
  })
  .catch((res) => {
    return res;
  });
};

// Put helper function for making 'PUT' calls to external api
const putHelper = (url, data) => {
  return axios.put(url, data)
  .then((res) => {
    return res;
  })
  .catch((res) => {
    return res;
  });
};

// Delete helper function for making 'DELETE' calls to external api
const deleteHelper = (url) => {
  return axios.delete(url)
  .then((res) => {
    return res;
  })
  .then((res) => {
    return res;
  });
};

module.exports = {
  getHelper,
  postHelper,
  putHelper,
  deleteHelper
};
