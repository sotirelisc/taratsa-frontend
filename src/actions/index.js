import taratses from '../apis/taratses';
import history from '../history';
import {
  CREATE_USER,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
  FETCH_TARATSES,
  FETCH_TARATSA,
  CREATE_TARATSA,
  FETCH_CHEFS,
  SELECT_DATE,
  BOOK_TARATSA,
  BOOK_TARATSA_SUCCESS,
  BOOK_TARATSA_FAILURE,
} from './types';

export const selectDate = date => {
  return {
    type: SELECT_DATE,
    payload: date
  };
};

export const signIn = formValues => async dispatch => {
  dispatch({
    type: SIGN_IN
  });

  try {
    const response = await taratses.post('/users/login', formValues);
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: response.data
    });

    history.push('/');
  } catch(e) {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: e
    });
  }
};

export const signOut = () => dispatch => {
  dispatch({
    type: SIGN_OUT
  });

  history.push('/');
};

export const createUser = formValues => async dispatch => {
  const response = await taratses.post('/users/register', formValues);

  dispatch({
    type: CREATE_USER,
    payload: response.data
  });

  history.push('/');
};

export const createTaratsa = (userToken, formValues) => async dispatch => {
  try {
    const response = await taratses.post('/taratses', {
      ...formValues,
      token: userToken,
      long: '26.709238',
      lat: '37.801206'
    });
  
    dispatch({
      type: CREATE_TARATSA,
      payload: response.data
    });
  
    history.push('/');
  } catch(e) {
    console.log(e);
  }
};

export const fetchTaratses = date => async dispatch => {
  let query = '/taratses'

  if (typeof date !== 'undefined' && date !== '') {
    const formattedDate = new Date(date).toISOString().slice(0, 10).replace('T', ' ');
    query += `/date/${formattedDate}`;
  }

  const response = await taratses.get(query);

  dispatch({
    type: FETCH_TARATSES,
    payload: response.data
  });
};

export const fetchTaratsa = id => async dispatch => {
  const response = await taratses.get(`/taratses/${id}`);

  dispatch({
    type: FETCH_TARATSA,
    payload: response.data
  });
};

export const fetchChefs = () => async dispatch => {
  const response = await taratses.get('/users/chefs');

  dispatch({
    type: FETCH_CHEFS,
    payload: response.data
  });
};

export const bookTaratsa = (userToken, taratsaId, reservationDate) => async dispatch => {
  dispatch({
    type: BOOK_TARATSA
  });

  try {
    const response = await taratses.post('/reservations', {
      token: userToken,
      taratsa: taratsaId,
      reservation_date: reservationDate,
      notes: ''
    });
  
    console.log(response);
    
    dispatch({
      type: BOOK_TARATSA_SUCCESS,
      payload: response.data
    });
  } catch(e) {
    console.log(e);
    dispatch({
      type: BOOK_TARATSA_FAILURE,
      payload: e
    });
  }
};