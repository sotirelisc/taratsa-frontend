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
  userToken: null,
  error: null,
  isLoading: false,
  userData: null
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
        userToken: action.payload.token,
        error: null,
        isLoading: false,
        userData: action.payload.user_info
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
        ...initialState
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