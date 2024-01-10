import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, StatusBar, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { registerScreenStyle } from "./registerScreenStyle";
import CustomTextInput from "../../../components/customTextInput/customTextInput";
import { createUser } from "../../../services/userService/userService";

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function checkPassword() {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  }

  async function register() {
    const goodPassord = await checkPassword();

    if (goodPassord) {
      const user = {
        pseudo: username,
        password: password,
      };

      console.log(user);
      console.log("good password");

      try {
        const response = await createUser(user);

        navigation.navigate("Login", { user: user });
      } catch (error) {
        console.error("Failed to register: ", error);
      }
    } else {
      console.log("bad password");
    }
  }

  return (
    <SafeAreaView style={registerScreenStyle.screen}>
      <ScrollView contentContainerStyle={registerScreenStyle.contentContainer}>
        <StatusBar animated={true} backgroundColor="#F5F5F5" barStyle="dark-content" />
        <View style={registerScreenStyle.formContainer}>
          <View style={registerScreenStyle.profilPic}>
            <Text>Image</Text>
          </View>

          <View style={registerScreenStyle.title}>
            <Text style={registerScreenStyle.titleText}>Inscription</Text>
          </View>

          <CustomTextInput
            placeholder={"Pseudo"}
            placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
            keyboardType={"default"}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />

          <CustomTextInput
            placeholder={"Mot de passe"}
            placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
            secureTextEntry={true}
            autoCapitalize={"none"}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

          <CustomTextInput
            placeholder={"Répétez le Mot de passe"}
            placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
            secureTextEntry={true}
            autoCapitalize={"none"}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />

          <Pressable style={[registerScreenStyle.signButton]} onPress={() => register()}>
            <Text style={registerScreenStyle.signButtonText}>Créer un Compte</Text>
          </Pressable>

          <Text style={[registerScreenStyle.textColor, registerScreenStyle.brand]}>TRAITROMETRE</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
