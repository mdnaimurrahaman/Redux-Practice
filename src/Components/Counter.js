import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    } else if (action.type === "Decrement") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content m-auto mt-11">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{state}</h2>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "Increment" })}
            >
              Increment
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => dispatch({ type: "Decrement" })}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
