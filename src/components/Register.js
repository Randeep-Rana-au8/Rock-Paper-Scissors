import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="form-container">
      <form className="login-form">
        <h2 style={{ marginBottom: "10px" }}>Welcome😄</h2>
        <input type="text" name="name" id="name" placeholder="Enter your name" className="input" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirm password"
          id="confirm-password"
          className="input"
          placeholder="Enter your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          Register
        </button>
        <div>
          <p style={{ marginTop: "10px" }}>
            Already a user? Please{" "}
            <Link style={{ color: "red" }} to="/signin">
              SignIn
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
