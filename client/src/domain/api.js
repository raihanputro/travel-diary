import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  login: 'user/login',
  register: 'user/register',
  createPost: 'post/create',
  getPost: 'post',
  getDetailPost: 'detail/',
  getMyPost: 'post/my-post',
  deletePost: 'post/remove/',
  getUser: 'user/get-profile',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const register = (dataUser) => {
  return callAPI(urls.register, 'POST', {}, {}, dataUser);
};

export const login = (dataUser) => {
  return callAPI(urls.login, 'POST', {}, {}, dataUser);
};

export const getPost = () => {
  return callAPI(urls.getPost, 'GET');
};

export const getDetailPost = (id) => {
  return callAPI(`${urls.getDetailPost}${id}`, 'GET');
};

export const getMyPost = () => {
  return callAPI(urls.getMyPost, 'GET');
};

export const deletePost = (id) => {
  return callAPI(`${urls.deletePost}${id}`, 'DELETE');
}

export const createPost = (dataPost) => {
  return callAPI(urls.createPost, 'POST', {}, {}, dataPost);
};

export const getUser = () => {
  return callAPI(urls.getUser, 'GET');
}


