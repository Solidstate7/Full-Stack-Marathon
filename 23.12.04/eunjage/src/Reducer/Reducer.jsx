import { useReducer } from "react";

const Reducer = () => {
  const initialState = {
    count: 0,
  };

  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";

  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case INCREMENT:
        return { ...state, count: state.count + payload.count };
      case DECREMENT:
        return { ...state, count: state.count - payload.count };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state.count}</p>
      <button></button>
      <button></button>
    </>
  );
};

export default Reducer;
