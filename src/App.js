import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const errorStyle = { outline: "3px solid darkred" };

  // Add disabled condition

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError(errorStyle);
    } else {
      setEmailError({});
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError(errorStyle);
    } else {
      setPasswordError({});
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        if (e.target.name && email === "") {
          setEmailError(errorStyle);
        }
        break;
      case "password":
        if (e.target.name && password === "") {
          setPasswordError(errorStyle);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <h1>Registration</h1>
      <form>
        <div>
          <input
            className="form-control"
            name="email"
            value={email}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
            style={emailError}
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            className="form-control"
            name="password"
            value={password}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordHandler(e)}
            style={passwordError}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="btn btn-primary">Sing in</button>
      </form>
    </div>
  );
}
