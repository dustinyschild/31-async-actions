const initialState = [];

export default (state = initialState,action = {}) => {
  const { type, payload } = action;

  switch(type){
    case 'LIST_CREATE':
      return state = [
        ...state,
        payload
      ];
  
    default:
      return state;
  }
};
