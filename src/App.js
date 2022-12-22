import { createContext, useState } from "react";
import "./App.css";
import Parent from "./Components/Parent";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div>
        <h1 className="m-auto text-5xl">Redux Practice</h1>
        <Parent />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
