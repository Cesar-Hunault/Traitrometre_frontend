import React, { createContext, useState, ReactNode } from 'react';

// Création d'un nouveau contexte d'authentification avec la fonction createContext(). Ce contexte sera utilisé pour partager des informations d'authentification avec d'autres composants de l'application.
interface AuthContextType {
  token: string | null;
  updateToken: (newToken: string | null) => void;
  userId: string | null;
  updateUserId: (newUserId: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Définit le fournisseur d'authentification qui encapsule les composants enfants avec le contexte d'authentification.
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const updateToken = async (newToken: string | null) => {
    setToken(newToken);
  };

  const updateUserId = async (newUserId: string | null) => {
    setUserId(newUserId);
  };

  return (
    <AuthContext.Provider value={{ token, updateToken, userId, updateUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
