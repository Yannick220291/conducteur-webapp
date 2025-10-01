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
      <div className="login-top">
        <div className="logo-name">
          <Image src="/images/logo.png" alt="Bus Tracking" width={80} height={80} />
          <h1>Bus Tracking</h1>
        </div>
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
