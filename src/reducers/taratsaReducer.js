import _ from 'lodash';
import {
  CREATE_TARATSA,
  FETCH_TARATSA,
  FETCH_TARATSES,
  BOOK_TARATSA,
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
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};