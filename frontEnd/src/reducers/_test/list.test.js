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
