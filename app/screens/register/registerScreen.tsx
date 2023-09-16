import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, StatusBar, Pressable } from "react-native";
import { registerScreenStyle } from "./registerScreenStyle";
import CustomTextInput from "../../../components/customTextInput/customTextInput";

interface RegisterScreenProps {
    navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const register = () => {

    //     const user = {
    //         username: username,
    //         password: password
    //     };

    //     console.log(user)

    //     fetch('http://10.0.2.2:3000/users_signup', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //   })

    //   .then(response => response.json())
    //   // Traiter la réponse de l'API
    //   .then(data => {
    //     if (data.success) {
    //         // Créattion réussie, on autorise la navigation sur le screen de login
    //         console.log(data);
    //         props.navigation.navigate('Login')
    //     } else {
    //         console.error(data.error);
    //     }
    //   })
    //   .catch(error => {
    //     // Gérer les erreurs de requête
    //     console.error(error);
    //   });

    // }

    const register = () => {
        props.navigation.navigate('Home')
    }
    

    return (

        <SafeAreaView style={registerScreenStyle.screen}>
            <ScrollView contentContainerStyle={registerScreenStyle.contentContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor= '#F5F5F5'
                    barStyle='dark-content'
                />
                <View style={registerScreenStyle.formContainer}>

                    <View style={registerScreenStyle.profilPic}>
                        <Text>Image</Text>
                    </View>

                    <View style={registerScreenStyle.title}>
                        <Text style={registerScreenStyle.titleText}>Inscription</Text>
                    </View>

                    <CustomTextInput 
                        placeholder={'Pseudo'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
                        keyboardType={'default'}
                        onChangeText={text => setUsername(text)}
                        value={username}
                    />

                    <CustomTextInput 
                        placeholder={'Mot de passe'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />

                    <CustomTextInput 
                        placeholder={'Répétez le Mot de passe'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                    />

                    <Pressable style={[registerScreenStyle.signButton]}
                        onPress={() => register()}>
                        <Text style={registerScreenStyle.signButtonText}>Créer un Compte</Text>
                    </Pressable>

                    <Text style={[registerScreenStyle.textColor, registerScreenStyle.brand]}>TRAITROMETRE</Text>

                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
