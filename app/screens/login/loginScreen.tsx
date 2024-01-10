import React, { useState, useContext, useEffect } from "react";
import { Pressable, SafeAreaView, Text, View, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { loginStyle } from "./loginScreenStyle";
import CustomTextInput from "../../../components/customTextInput/customTextInput";
import { AuthContext } from "../../../AuthContext";
import { useRoute } from "@react-navigation/native";
import { login as loginUser } from "../../../services/userService/userService";

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen = (props: LoginScreenProps) => {
  const route = useRoute();
  const userParams = (route.params as { user: { pseudo: string; password: string } })?.user || { pseudo: "", password: "" };
  const authContext = useContext(AuthContext);

  const [pseudo, setPseudo] = useState(userParams.pseudo);
  const [password, setPassword] = useState(userParams.password);

  useEffect(() => {
    const check = async () => {
      const result = await authContext.checkToken();
      if (result) {
        props.navigation.navigate("Acceuil");
      }
    };

    check();
  }, []);

  async function login() {
    const user = {
      pseudo: pseudo,
      password: password,
    };
    try {
      const response = await loginUser(user);
      const token = response.token; // Récupérer le jeton du serveur
      const userId = response.user.id; // Récupérer l'ID de l'utilisateur du serveur
      const expiresIn = 30 * 24 * 60 * 60 * 1000; // Token valide pour une durée de 30 jours, temps d'expiration en millisecondes pour etre cohérent avec le temps en millisecondes de Date danns la fonction SaveTokenToStorage

      // Mettre à jour le contexte d'authentification avec le nouveau jeton et l'id de l'utilisateur
      await authContext.updateToken(token);
      await authContext.updateUserId(userId);

      // Sauvegarde du token et son temps d'expiration localement
      await authContext.saveTokenToStorage(token, expiresIn);

      // On autorise la navigation
      props.navigation.navigate("Acceuil");
    } catch (error) {
      // Gérer les erreurs de requête
      console.error("Failed to login", error);
    }
  }

  function register() {
    props.navigation.navigate("Register");
  }

  return (
    <SafeAreaView style={loginStyle.screen}>
      <ScrollView contentContainerStyle={loginStyle.contentContainer}>
        <StatusBar animated={true} backgroundColor="#F5F5F5" barStyle="dark-content" />
        <View style={loginStyle.formContainer}>
          <View style={loginStyle.profilPic}>
            <Text>Image</Text>
          </View>

          <View style={loginStyle.title}>
            <Text style={loginStyle.titleText}>Connexion</Text>
          </View>

          <CustomTextInput
            placeholder={"Pseudo"}
            placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
            keyboardType={"default"}
            onChangeText={(text) => setPseudo(text)}
            value={pseudo}
          />
          <CustomTextInput
            placeholder={"Mot de Passe"}
            placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
            secureTextEntry={true}
            autoCapitalize={"none"}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

          <TouchableOpacity style={[loginStyle.signButton]} onPress={() => login()}>
            <Text style={loginStyle.signButtonText}>Se Connecter</Text>
          </TouchableOpacity>

          <Text style={[loginStyle.textColor, loginStyle.brand]}>TRAITROMETRE</Text>

          <Pressable onPress={() => register()}>
            <Text style={loginStyle.buttonCreate}>Créer un compte</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
