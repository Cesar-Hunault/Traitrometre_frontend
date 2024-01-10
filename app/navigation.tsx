import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "../AuthContext";

import { LoginScreen } from "./screens/login/loginScreen";
import { RegisterScreen } from "./screens/register/registerScreen";
import { HomeScreen } from "./screens/home/homeScreen";
import { ProfilScreen } from "./screens/profil/profilScreen";
import { PlayerScreen } from "./screens/player/playerScreen";
import { AcceuilScreen } from "./screens/acceuil/acceuilScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <AuthProvider>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Screen name="Login" component={LoginScreen}></Screen>
        <Screen name="Register" component={RegisterScreen}></Screen>
        <Screen name="Home" component={HomeScreen}></Screen>
        <Screen name="Acceuil" component={AcceuilScreen}></Screen>
        <Screen name="Profil" component={ProfilScreen}></Screen>
        <Screen name="Player" component={PlayerScreen}></Screen>
      </Navigator>
    </AuthProvider>
  </NavigationContainer>
);

export default AppNavigator;
