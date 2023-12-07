// Reducer Function
// Initial global state

const init = {
  count: 0,
  user: {
    uid: "",
    upw: "",
    age: 0,
    name: "",
  },
  isLogin: false,
};

const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "value":
      return { ...state, count: state.count + payload.count, isLogin: true };
    case "value2":
      return { ...state, count: state.count + payload.count, isLogin: false };
    default:
      return state;
  }
};

export default reducer;
