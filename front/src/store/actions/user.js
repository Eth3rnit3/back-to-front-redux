import { FETCH_USERS, FETCH_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from '../types/user';
import Axios from 'axios';

export const fetchUsers = () => {
  return async function (dispatch, getState) {
    function onSuccess(response) {
      dispatch({ type: FETCH_USERS, payload: response.data.user });
    }
    function onError(error) {
      console.log(error);
    }

    const response = await Axios.get('/users');
    try {
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};

export const showUser = (userId) => {
  return async function (dispatch, getState) {
    function onSuccess(response) {
      dispatch({ type: FETCH_USER, payload: response.data.user });
    }
    function onError(error) {
      console.log(error);
    }

    try {
      const response = await Axios.get(`/users/${userId}`);
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};

export const createUser = (userData) => {
  return async function (dispatch, getState) {
    function onSuccess(response) {
      console.log('SUCCESS');
    }
    function onError(error) {
      console.log(error);
    }

    try {
      delete userData.id;
      const response = await Axios.post('/users', { ...userData });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};

export const updateUser = (userData, userId) => {
  return async function (dispatch, getState) {
    function onSuccess(response) {
      console.log('SUCCESS');
    }
    function onError(error) {
      console.log(error);
    }

    try {
      const response = await Axios.put(`/users/${userId}`, { ...userData });
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};

export const deleteUser = (userId) => {
  return async function (dispatch, getState) {
    function onSuccess(response) {
      dispatch({ type: DELETE_USER, payload: response });
      dispatch(fetchUsers());
    }
    function onError(error) {
      console.log(error);
    }

    try {
      const response = await Axios.delete(`/users/${userId}`);
      onSuccess(response);
    }
    catch (err) {
      onError(err);
    }
  };
};