const reducer = (state, action) => {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "mult7":
      return { ...state, number: state.number * 7 };
    case "div25":
      return { ...state, number: state.number / 25 };
    case "parse":
      return { ...state, number: parseInt(state.number) };
    case "rem9":
      return { ...state, number: action.payload - 9 };
    case "add11":
      return { ...state, number: action.payload + 11 };
    case "nameAdd":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
};

export default reducer;
