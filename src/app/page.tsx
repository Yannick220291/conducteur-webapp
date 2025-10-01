'use client';

import './page.css';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nMot de passe: ${password}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, nextInputId?: string) => {
    if (e.key === 'Enter' && nextInputId) {
      const nextInput = document.getElementById(nextInputId) as HTMLInputElement | null;
      nextInput?.focus();
    }
  };

  return (
    <div className="login-container">
      {/* Introduction */}
      <h2 className="intro-text">Bienvenue sur Web application Application</h2>

      {/* Logo et nom */}
      <div className="login-top">
        <div className="logo-name">
          <div className="logo-circle">
            <Image src="/images/logo.png" alt="Bus Tracking" width={100} height={100} />
          </div>
          <h1>Bus Tracking</h1>
        </div>
      </div>

      {/* Formulaire */}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => handleKeyDown(e, 'password')}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => handleKeyDown(e)}
          required
        />
        <button type="submit">Se connecter</button>
        <a href="#" className="forgot-password">Mot de passe oublié ?</a>
      </form>
    </div>
  );
}
