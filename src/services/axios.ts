/** @format */

import axios from "axios";

const client = axios.create();

client.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const setAxiosHeaderAuthorization = (bearerToken: string): void => {
  if (bearerToken) {
    client.defaults.headers.common.Authorization = bearerToken;
  } else {
    delete client.defaults.headers.common.Authorization;
  }
};

export default client;
