import _ from 'lodash';
import {
  FETCH_CHEFS,
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHEFS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};