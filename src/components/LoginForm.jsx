import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      fetch(`'http://localhost:5173/user'?email=${email}`)
        .then((res) => res.json())
        .then((users) => {
          if (users.length === 0) {
            alert("Invalid email or user not found.");
          } else if (users[0].password === password) {
            alert("Login successful");
            navigate("/");
          } else {
            alert("Invalid password.");
          }
        })
        .catch((err) => {
          alert("Login failed: " + err.message);
        });
    }
  };

  const validate = () => {
    if (!email || !password) {
      alert("Both email and password are required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email.");
      return false;
    }
    return true;
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
