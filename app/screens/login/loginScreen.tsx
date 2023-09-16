import React, { useEffect, useState, useContext } from 'react';
import { Pressable, SafeAreaView, Text, TextInput, View, StatusBar, ScrollView } from 'react-native';
import { loginStyle } from './loginScreenStyle';
import CustomTextInput from '../../../components/customTextInput/customTextInput';
import { AuthContext } from '../../../AuthContext';


interface LoginScreenProps {
    navigation: any;
}

export const LoginScreen = (props: LoginScreenProps) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const { updateToken } = useContext(AuthContext);

    // const login = () => {
    //     const user = {
    //         username: username,
    //         password: password
    //     };

    //     console.log(user)

    //     // Envoyer la requête à l'API Rails
    //     // https://stackoverflow.com/questions/60639983/react-native-expo-fetch-throws-network-request-failed
    //     fetch('http://10.0.2.2:3000/login', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })

    //     .then(response => response.json())
    //     // Traiter la réponse de l'API
    //     .then(data => {
    //         if (data.success) {
    //             // Connexion réussie
    //             console.log(data);
                
    //             const token = data.token; // Récupérer le jeton du serveur

    //             // Mettre à jour le contexte d'authentification avec le nouveau jeton
    //             updateToken(token);
                
    //             // On autorise la navigation
    //             props.navigation.navigate('Home')
    //         } else {
    //             console.error(data.error);
    //         }
    //     })
    //     .catch(error => {
    //         // Gérer les erreurs de requête
    //         console.error(error);
    //     });
    // }

    const login = () => {
        props.navigation.navigate('Home')
    }

    const register = () => {
        props.navigation.navigate('Register')
    }

    return (
        <SafeAreaView style={loginStyle.screen}>
            <ScrollView contentContainerStyle={loginStyle.contentContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor= '#F5F5F5'
                    barStyle='dark-content'
                />
                <View style={loginStyle.formContainer}>
                    
                    <View style={loginStyle.profilPic}>
                        <Text>Image</Text>
                    </View>

                    <View style={loginStyle.title}>
                        <Text style={loginStyle.titleText}>Connexion</Text>
                    </View>

                    <CustomTextInput 
                        placeholder={'Pseudo'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
                        keyboardType={'default'}
                        onChangeText={text => setUsername(text)}
                        value={username}
                    />
                    <CustomTextInput 
                        placeholder={'Mot de Passe'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />

                    <Pressable style={[loginStyle.signButton]}
                        onPress={() => login()}>
                        <Text style={loginStyle.signButtonText}>Se Connecter</Text>
                    </Pressable>

                    
                    <Text style={[loginStyle.textColor, loginStyle.brand]}>TRAITROMETRE</Text>

 
                    <Pressable
                        onPress={() => register()}>
                        <Text style={loginStyle.buttonCreate} >Créer un compte</Text>
                    </Pressable> 
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
