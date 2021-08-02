import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef(null);

  useEffect(() => console.log(ref));

  const handleFocus = () => {
    console.log(ref.current.focus());
    ref.current.style.color = 'red'
  };

  return (
    <div className="App">
      <div className="form">
        <input ref={ref} />
        <button onClick={handleFocus}>focus</button>
      </div>
    </div>
  );
}

export default App;
