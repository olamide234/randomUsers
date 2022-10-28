import axios from "axios";

const Api = axios.create({
  baseURL: "https://randomuser.me",
});

Api.interceptors.request.use(
  function (config) {
    // This adds an authorization key to config object if a token exists.
    // if (Auth.isAuthenticated() === true) {
    //   config.headers.common["Authorization"] = `Bearer ${Auth.getToken()}`
    // }
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

export default Api;
