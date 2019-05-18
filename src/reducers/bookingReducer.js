import {
  BOOK_TARATSA,
  BOOK_TARATSA_SUCCESS,
  BOOK_TARATSA_FAILURE
} from '../actions/types';

const initialState = {
  isBookingLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
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