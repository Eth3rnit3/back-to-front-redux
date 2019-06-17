import { FETCH_USERS, FETCH_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from '../types/user';
const initialState = {
  users: [],
  currentUser: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case FETCH_USERS:
      return { ...state, users: [...payload] };

    case FETCH_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
