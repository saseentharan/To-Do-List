import React, { useState } from "react";

function App() {
  const [val, update] = useState("");
  // const [aval,setval]=useState("");
  const [item, setitem] = useState([]);

  function sub() {
    setitem((prevalue) => {
      return [...prevalue, val];
    });
    update("");
  }
  function handleClick(event) {
    const value = event.target.value;
    update(value);
    //  console.log(val);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleClick} value={val} />
        <button onClick={sub}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((i) => (
            <li>{i} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
