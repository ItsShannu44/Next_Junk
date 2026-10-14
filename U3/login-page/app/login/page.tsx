
"use client";

import { useState } from "react";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({email: "",password: "",});
  const [success, setSuccess] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors = {email: "",password: "",};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

    if (!passwordRegex.test(password)) {
      newErrors.password ="Password must contain 8+ characters, uppercase, lowercase, number and special character.";}

    setErrors(newErrors);
    setSuccess("");

    if (!newErrors.email && !newErrors.password) {
      setSuccess("Form submitted successfully!");
    }
  }

  return (
    <main className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>

        <p className="login-subtitle">Login to your account</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@example.com"/>

            {errors.email && (<p className="error-message">{errors.email}</p>)}
          </div>

          <div className="form-group password-group">
            <label htmlFor="password">Password</label>

            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>

            <p className="password-hint">
              Minimum 8 characters with uppercase, lowercase,
              number and special character.
            </p>

            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="submit-button">Submit</button>

          {success && (
            <p className="success-message">{success}</p>
          )}
        </form>
      </div>
    </main>
  );
}
