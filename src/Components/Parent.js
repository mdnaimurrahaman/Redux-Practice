import React, { useContext, useState } from "react";
import { COUNTER_CONTEXT } from "../App";
import Chield from "./Chield";

const Parent = () => {
  const {count} = useContext(COUNTER_CONTEXT)
  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content m-auto mt-11">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Parent</h2>
          <h2 className="card-title">{count}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
      <Chield/>
    </div>
  );
};

export default Parent;
