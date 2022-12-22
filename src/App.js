
import { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="card w-96 bg-neutral text-neutral-content m-auto mt-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{count}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=> setCount ((prvCount) => prvCount + 1)}>Accept</button>
          <button className="btn btn-accent" onClick={()=> setCount ((prvCount) => prvCount -1)}>Deny</button>
        </div>
      </div>
    </div>
  );
}

export default App;
