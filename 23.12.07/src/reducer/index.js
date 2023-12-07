// reducer method

const init = {
  isLogin: false,
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, isLogin: true };
    case LOGOUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};
