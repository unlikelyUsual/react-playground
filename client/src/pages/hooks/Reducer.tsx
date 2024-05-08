import { useReducer } from "react";

//useReducer is like useState but follows the pattern of redux state
// Advantage of using useReducer is we can change multiple fields at a single action type and logic for single action type is at one place
interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

const reducer = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: "" });
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}></button>
    </div>
  );
};

export default Reducer;
