const initialState = [];

const validateList = (payload,options) => {
  console.log('__Options__',options);
  let { validateId,validateTitle } = options;
  if(validateId && !payload._id){
    throw new Error('Validation error: No _id found');
  }
  if(validateTitle && !payload.title){
    throw new Error('Validation error: no title found');
  }
};

export default (state = initialState,action = {}) => {
  const { type, payload } = action;


  switch(type){
    case 'LIST_CREATE':
      return state = [
        ...state,
        payload
      ];
    case 'LIST_REMOVE':
      validateList(payload,{validateId: true});
      return state.filter(list => {
        return list._id !== payload._id;
      });
    default:
      return state;
  }
};
