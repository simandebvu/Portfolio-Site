export const menuReducer = (state = { isMenuActive: false }, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, isMenuActive: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
