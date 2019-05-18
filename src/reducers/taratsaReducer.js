import _ from 'lodash';
import {
  CREATE_TARATSA,
  FETCH_TARATSA,
  FETCH_TARATSES,
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
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};