const initialState = [];

export default (state = initialState,action = {}) => {
  const { type, payload } = action;

  switch(type){
    case 'LIST_CREATE':
      return state = [
        ...state,
        payload
      ];
    case 'LIST_REMOVE':
      return state.filter(list => {
        return list._id !== payload._id;
      });
    default:
      return state;
  }
};
