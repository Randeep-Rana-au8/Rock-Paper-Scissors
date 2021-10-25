import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="form-container">
      <form className="login-form">
        <h2 style={{ marginBottom: "10px" }}>Welcome Back!</h2>
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
        <button className="login-button" type="submit">
          Login
        </button>
        <div>
          <p style={{ marginTop: "10px" }}>
            New User? Please{" "}
            <Link style={{ color: "red" }} to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
