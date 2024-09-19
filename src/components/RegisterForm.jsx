import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostUser } from "../services/PostUser";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { email, password };

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
      PostUser(email, password)
      alert("Registration successful.");
      navigate("/LoginPage");
  };

  

}
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
