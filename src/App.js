import React, { useState } from "react";

import "./App.css";

function App() {
  const [size, setSize] = useState(6);
  const [userInput, setUserInput] = useState("");

  var squares = [];
  var color = 0;
  for (let i = 0; i < size * size; ++i) {
    if (i % size == 0) {
      ++color;
    }
    squares.push(
      <div
        className={
          "square " + (color++ % 2 == 0 ? "square-yellow" : "square-orange")
        }
      >
        {i}
      </div>
    );
  }

  const handleChangeUsername = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (event) => {
    if (userInput) {
      console.log(userInput);
      setSize(userInput);
      setUserInput("");
    }
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>chess</h1>
      <div
        className="board"
        style={{
          margin: "0 auto",
          maxWidth: 52 * size,
          maxHeight: 52 * size,
          backgroundColor: "blue",
        }}
      >
        {squares}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="Label">
          <label className="Textc">Your size :&nbsp;</label>
          <input
            type="text"
            name="task"
            value={userInput}
            onChange={handleChangeUsername}
            maxLength="23"
            pattern="[0-9]*"
            style={{ height: "25px", borderRadius: "5px" }}
          />
          &nbsp;
          <input
            type="submit"
            value="Apply"
            style={{ height: "32px", borderRadius: "5px" }}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
