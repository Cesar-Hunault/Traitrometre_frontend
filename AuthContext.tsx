import React, { createContext, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import { getUserInfo } from "./services/userService/userService";

// Création d'un nouveau contexte d'authentification avec la fonction createContext(). Ce contexte sera utilisé pour partager des informations d'authentification avec d'autres composants de l'application.
interface AuthContextType {
  token: string | null;
  updateToken: (newToken: string | null) => void;
  getToken: () => void;
  userId: string | null;
  updateUserId: (newUserId: string | null) => void;
  getUserId: () => void;
  saveTokenToStorage: (token: string, expiresIn: number) => void;
  checkToken: () => Promise<boolean>;
}

const TOKEN = "TRAITROMETRE_AUTH_TOKEN";
const TOKEN_EXPIRATION_TIME = "TRAITROMETRE_AUTH_TOKEN_EXPIRATION_TIME";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Définit le fournisseur d'authentification qui encapsule les composants enfants avec le contexte d'authentification.
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<object | null>(null);

  const updateToken = async (newToken: string | null) => {
    setToken(newToken);
  };

  const getToken = async () => {
    return token;
  };

  const updateUserId = async (newUserId: string | null) => {
    setUserId(newUserId);
  };

  const getUserId = async () => {
    return userId;
  };

  const updateUser = async (newUser: object | null) => {
    setUser(newUser);
  };

  async function saveTokenToStorage(token: string, expiresIn: number) {
    try {
      const expirationTime = Date.now() + expiresIn;
      await AsyncStorage.setItem(TOKEN, token);
      await AsyncStorage.setItem(TOKEN_EXPIRATION_TIME, expirationTime.toString());
      console.log("Token sauvegardé");
    } catch (error) {
      console.error("Error while saving token to AsyncStorage:", error);
    }
  }

  async function checkToken() {
    try {
      const token = await AsyncStorage.getItem(TOKEN);
      if (token) {
        // Token trouvé, check si il a expiré
        const tokenExpirationTime = await AsyncStorage.getItem(TOKEN_EXPIRATION_TIME);
        if (tokenExpirationTime && Date.now() < parseInt(tokenExpirationTime)) {
          // Mise à jour du contexte d'authentification avec l'id de l'utilisateur
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.user_id;

          // Token valide, navigation jusqu'au home
          console.log("Token trouvé localement, login autorisé");

          // Mettre à jour le contexte d'authentification avec le nouveau jeton
          await updateUserId(userId);
          await updateToken(token);

          // Récupération de toute les informations de l'utilisateur
          try {
            const response = await getUserInfo(token, userId);
            await updateUser(response.user);
            return true;
          } catch (error) {
            console.error("Failed getting user informations: ", error);
          }
        } else {
          // Token expiré, on le supprime localement
          await AsyncStorage.removeItem(TOKEN);
          await AsyncStorage.removeItem(TOKEN_EXPIRATION_TIME);
        }
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error while retrieving token from AsyncStorage:", error);
    }
  }

  return (
    <AuthContext.Provider value={{ token, updateToken, getToken, userId, updateUserId, getUserId, saveTokenToStorage, checkToken }}>
      {children}
    </AuthContext.Provider>
  );
};
