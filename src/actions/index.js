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
  FETCH_CHEFS
} from './types';

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
      long: '123456',
      lat: '123456'
    });
  
    console.log(response);
    dispatch({
      type: CREATE_TARATSA,
      payload: response.data
    });
  
    history.push('/');
  } catch(e) {
    console.log(e);
  }
};

export const fetchTaratses = () => async dispatch => {
  const response = await taratses.get('/taratses');

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