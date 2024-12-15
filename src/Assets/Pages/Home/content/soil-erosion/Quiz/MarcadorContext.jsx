// MarcadorContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Crea el contexto
const MarcadorContext = createContext();

// Hook para acceder al contexto
export const useScore = () => {
  const context = useContext(MarcadorContext);
  if (!context) {
    throw new Error("useScore must be used within a MarcadorProvider");
  }
  return context;
};

// Componente proveedor del contexto
export const MarcadorProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  // Cargar el puntaje desde localStorage al inicio
  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
      setScore(parseInt(savedScore));
    }
  }, []);

  // Función para aumentar el puntaje
  const increaseScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    localStorage.setItem('score', newScore); // Guardar el puntaje en localStorage
  };

  return (
    <MarcadorContext.Provider value={{ score, increaseScore }}>
      {children}
    </MarcadorContext.Provider>
  );
};
