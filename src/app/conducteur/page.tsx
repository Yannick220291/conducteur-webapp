'use client';

import { useState, useEffect } from 'react';
import './conducteur.css';

export default function ConducteurPage() {
  // TypeScript : latitude et longitude peuvent être null ou number
  const [position, setPosition] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  });
  const [message, setMessage] = useState('En attente de position...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition({ latitude, longitude });

          // Simuler envoi à l'API du site principal
          fetch('https://api-principal-site.com/api/position', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ latitude, longitude, busId: 1 }),
          })
            .then((res) => res.json())
            .then((data) => setMessage(data.message || 'Position envoyée'))
            .catch((err) => setMessage('Erreur : ' + err.message));
        },
        (err) => setMessage('Erreur géolocalisation : ' + err.message)
      );
    } else {
      setMessage('Géolocalisation non supportée');
    }
  }, []);

  return (
    <div className="conducteur-container">
      <h1>Application Conducteur</h1>
      <p>Latitude : {position.latitude ?? 'En attente'}</p>
      <p>Longitude : {position.longitude ?? 'En attente'}</p>
      <p>Status : {message}</p>
    </div>
  );
}

