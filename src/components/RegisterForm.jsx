import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const userObj = { email, password };

    if (validate()) {
      fetch('http://localhost:5173/user', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj),
      })
        .then((res) => {
          if (res.ok) {
            alert("Registration successful.");
            navigate("/login");
          } else {
            alert("Error during registration.");
          }
        })
        .catch((err) => {
          alert("Failed: " + err.message);
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
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
