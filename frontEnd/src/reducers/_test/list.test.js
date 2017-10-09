import deepFreeze from 'deep-freeze';
import reducer from '../list-reducer';

const defaultState = {};
deepFreeze(defaultState);

test('Create List Item',() => {
  const state = defaultState;
  const action = {
    type: 'LIST_CREATE',
    payload: {
      title: 'New List',
    }
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual([{title: 'New List'}]);
});

test('Remove List Item',() => {
  const state = [
    { _id: 3,title: 'Remove me'},
    { _id: 4,title: 'Don\'t remove me'}
  ];
  const action = {
    type: 'LIST_REMOVE',
    payload: {
      _id: 3
    }
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual([
    { _id: 4,title: 'Don\'t remove me'}
  ]);
});

test('Unknown Action',() => {
  const state = defaultState;
  const action = {
    type: 'UNKNOWN'
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual(defaultState);
});
