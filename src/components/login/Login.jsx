import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica futura
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegisterClick = () => {
    // Lógica para redirecionar ou abrir a página de registro
    console.log('Redirecionando para a página de registro...');
    // Aqui você pode usar React Router para navegar, por exemplo:
    // history.push('/register');
  };

  return (
    <main className="login-container">
      <h1>Login into your account</h1> {/* Corrigi o erro de digitação no "Login" */}
      <form onSubmit={handleSubmit} className="login-form" aria-labelledby="login-heading">
        <fieldset>
          <legend className="sr-only" id="login-heading">Login into your account</legend>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button> {/* Botão de envio do formulário */}
        </fieldset>
      </form>
      <div className="register-container">
  <p>OR</p>
  <button onClick={handleRegisterClick} className="register-button">
    Register
  </button>
</div>

    </main>
  );
};

export default Login;
