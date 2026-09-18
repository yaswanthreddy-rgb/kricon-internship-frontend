import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      setMessage("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (form.email === user.email && form.password === user.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          Kricon<span>Tech</span>
        </div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue your interview preparation
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {message && <p className="auth-message">{message}</p>}

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
