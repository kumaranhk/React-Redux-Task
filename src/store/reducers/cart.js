const initialState = {
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        count: state.count + 1,
      };
    case "remove_from_cart":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset_cart":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default cartReducer;
