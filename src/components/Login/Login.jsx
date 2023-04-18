import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogIn = (event) => {
    event.preventDefault();

    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        from.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="from-container">
      <h2 className="from-title">Login</h2>
      <form onSubmit={handleLogIn}>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="extra-text">
        New to ema-jhon ? <Link to="/signUp">Create New Account</Link>
      </p>
    </div>
  );
};

export default Login;
