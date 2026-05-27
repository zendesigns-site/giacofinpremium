import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  // useLocation ci dice in quale URL ci troviamo attualmente
  const location = useLocation();

  // Associamo il nome di ogni tab al suo URL (devono corrispondere a quelli in App.tsx)
  const tabs = [
    { name: 'Home 1', path: '/' },
    { name: 'Home 2', path: '/pagina-2' },
    { name: 'Home 3', path: '/pagina-3' },
    { name: 'Home 4', path: '/pagina-4' },
    { name: 'Home 5', path: '/pagina-5' }
  ];
  
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-light px-2 py-2 rounded-full flex gap-2">
        {tabs.map((tab, idx) => {
          // Controlliamo se l'URL attuale è uguale al path di questo specifico bottone
          const isActive = location.pathname === tab.path;
          
          return (
            <Link
              key={idx}
              to={tab.path}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                isActive 
                  ? 'bg-accent text-white shadow-lg shadow-accent/30' 
                  : 'text-primary hover:bg-gray-100'
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
