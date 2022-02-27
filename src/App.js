import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    setName("");
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-welcome-text">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container contact-form m-t-20">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="control">
              <label className="label">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-link">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div> */}
      <Routes>
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
