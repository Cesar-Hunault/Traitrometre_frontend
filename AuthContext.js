import React, { createContext, useState } from 'react';

// Création un nouveau contexte d'authentification avec la fonction createContext(). Ce contexte sera utilisé pour partager des informations d'authentification avec d'autres composants de l'application.
export const AuthContext = createContext();

// Définit le fournisseur d'authentification qui encapsule les composants enfants avec le contexte d'authentification.
export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(null); // On utilise un token car c'est cette information ("Authorization": Bearer + token) que l'on a besoin de transmettre aux requetes d'API pour identifier l'utilisateur

  const updateToken = (newToken) => {
    setToken(newToken);
  };


  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
