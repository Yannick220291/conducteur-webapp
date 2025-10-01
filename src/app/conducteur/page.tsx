'use client';

import { useState, useEffect } from 'react';
import './conducteur.css';

export default function ConducteurPage() {
  const [position, setPosition] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  });
  const [message, setMessage] = useState('En attente de position...');

  useEffect(() => {
    const handlePosition = (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      setPosition({ latitude, longitude });

      sendToBackend(latitude, longitude);
    };

    const handleError = (err: GeolocationPositionError) => {
      setMessage('Erreur géolocalisation : ' + err.message);
    };

    const sendToBackend = (latitude: number, longitude: number) => {
      fetch('https://api-principal-site.com/api/position', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latitude, longitude, busId: 1 }),
      })
        .then((res) => res.json())
        .then((data) => setMessage(data.message || 'Position envoyée'))
        .catch((err) => setMessage('Erreur : ' + err.message));
    };

    if (!navigator.geolocation) {
      setMessage('Géolocalisation non supportée');
      return;
    }

    const sendPosition = () => {
      navigator.geolocation.getCurrentPosition(handlePosition, handleError);
    };

    sendPosition();
    const interval = setInterval(sendPosition, 10000);
    return () => clearInterval(interval);
  }, []); // plus de warning, tout est défini dans useEffect

  return (
    <div className="conducteur-container">
      <h1>Application Conducteur</h1>
      <p>Latitude : {position.latitude ?? 'En attente'}</p>
      <p>Longitude : {position.longitude ?? 'En attente'}</p>
      <p>Status : {message}</p>
    </div>
  );
}
