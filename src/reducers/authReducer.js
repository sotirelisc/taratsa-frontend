import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_USER,
} from '../actions/types';

const initialState = {
  isSignedIn: false,
  userId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};