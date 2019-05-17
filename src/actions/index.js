import taratses from '../apis/taratses';
import history from '../history';
import {
  CREATE_USER,
  SIGN_IN,
  SIGN_OUT,
  FETCH_TARATSES,
  FETCH_TARATSA,
  CREATE_TARATSA
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createUser = formValues => async dispatch => {
  const response = await taratses.post('/users', formValues);

  dispatch({
    type: CREATE_USER,
    payload: response.data
  });

  history.push('/');
};

export const createTaratsa = formValues => async dispatch => {
  const response = await taratses.post('/taratses', formValues);

  dispatch({
    type: CREATE_TARATSA,
    payload: response.data
  });

  history.push('/');
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