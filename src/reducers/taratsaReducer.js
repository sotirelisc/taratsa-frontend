import _ from 'lodash';
import {
  CREATE_TARATSA,
  FETCH_TARATSA,
  FETCH_TARATSES,
  BOOK_TARATSA,
  BOOK_TARATSA_SUCCESS,
  BOOK_TARATSA_FAILURE
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TARATSA:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_TARATSA:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_TARATSES:
      return {
        ..._.mapKeys(action.payload, 'id')
      };
    case BOOK_TARATSA:
      return {
        ...state,
        isBookingLoading: true,
        error: null
      };
    case BOOK_TARATSA_SUCCESS:
      return {
        ...state,
        isBookingLoading: false,
        error: null,
        reservation: action.payload
      };
    case BOOK_TARATSA_FAILURE:
      return {
        ...state,
        isBookingLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};