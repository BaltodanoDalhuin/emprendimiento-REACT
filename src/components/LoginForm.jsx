import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetUser } from "../services/GetUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

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

    if (validate()) {
      const user = await GetUser(email, password);
      if (user) {
        alert("Login successful.");
        navigate("/HomePage"); 
      } else {
        alert("Invalid email or password.");
      }
    }
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
