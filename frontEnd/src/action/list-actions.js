const request = require('superagent');
const API_URL = 'localhost:3000';

export const listCreate = list => {
  return {
    type: 'LIST_CREATE',
    payload: {
      ...list,
    }
  };
};

export const listUpdate = list => {
  return {
    type: 'LIST_UPDATE',
    payload: list
  };
};

export const listRemove = list => {
  return {
    type: 'LIST_REMOVE',
    payload: list
  };
};

export const listCreateRequest = list =>
  dispatch => {
    return request.post(`${API_URL}/api/list`)
      .send(list)
      .then(res => {
        dispatch(res.body);
        return res;
      });
  };
