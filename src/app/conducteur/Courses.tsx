'use client';

import { useState, useEffect } from 'react';

type Course = {
  id: number;
  départ: string;
  arrivée: string;
  status: string;
};

type BackendResponse = {
  message?: string;
};

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [message, setMessage] = useState('');

  // Fetch des courses depuis le backend principal
  const fetchCourses = () => {
    fetch('https://api-principal-site.com/api/courses')
      .then(res => res.json())
      .then((data: Course[]) => setCourses(data))
      .catch((err: Error) => setMessage('Erreur : ' + err.message));
  };

  // Gérer la réponse du backend après action
  const handleResponse = (id: number, action: 'accept' | 'refuse', data: BackendResponse) => {
    setMessage(data.message || `Course ${action}ée`);
    setCourses(prev => prev.map(c => (c.id === id ? { ...c, status: action } : c)));
  };

  // Gérer les erreurs
  const handleError = (err: Error) => setMessage('Erreur : ' + err.message);

  // Action accepter/refuser
  const handleAction = (id: number, action: 'accept' | 'refuse') => {
    fetch(`https://api-principal-site.com/api/courses/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: action }),
    })
      .then(res => res.json())
      .then(data => handleResponse(id, action, data))
      .catch(handleError);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Liste des courses disponibles</h2>
      {message && <p>{message}</p>}
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.départ} → {course.arrivée} | Status : {course.status}
            <button onClick={() => handleAction(course.id, 'accept')}>Accepter</button>
            <button onClick={() => handleAction(course.id, 'refuse')}>Refuser</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


