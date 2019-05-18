import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_USER,
  CREATE_USER,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from '../actions/types';

const initialState = {
  isSignedIn: false,
  userId: null,
  error: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        error: null,
        isLoading: false
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isSignedIn: false,
        error: action.payload,
        isLoading: false
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
    case CREATE_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};