'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pour l'instant, juste un alert pour tester le frontend
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
      <div className="login-top">
        <img src="/logo.png" alt="Bus Tracking" className="logo" />
        <h1>Bus Tracking</h1>
      </div>
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
      </form>
    </div>
  );
}

