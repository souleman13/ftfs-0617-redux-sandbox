import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../actions';


export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART :
      const { item, quantity } = action;
      return [
        ...state,
        {
          ...item,
          quantity,
        },
      ];
    case REMOVE_FROM_CART :
      return state.filter(i => i.id !== action.item.id);
    case CLEAR_CART:
      return [];
    default :
      return state;
  }
};