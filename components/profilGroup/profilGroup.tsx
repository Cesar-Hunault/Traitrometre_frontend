import React, { useState } from "react";
import {Text, View, Pressable, ScrollView} from 'react-native';
import { ProfilGroupStyle } from "./profilGroupStyle";
import ClassementPlayer from "../classement/classementPlayer";

const ProfilGroup = () => {

    const [username, setUsername] = useState('');
    const [traitrise, setTraitrise] = useState('');
    const [points, setPoints] = useState('');
    const [multiplicateur, setMultiplicateur] = useState('');

    

    return (
        <View style={ProfilGroupStyle.container}>

            <Text style={ProfilGroupStyle.boutonRetour}>retour</Text>

            <View style={ProfilGroupStyle.subContainer}>
                <View style={ProfilGroupStyle.picAndName}>
                    <View style={ProfilGroupStyle.profilPic}>

                    </View>
                    <Text style={ProfilGroupStyle.groupName}> Nom du groupe </Text>
                </View>

                <View style={ProfilGroupStyle.classementContainer}>
                    <Text style={ProfilGroupStyle.classementTitle}>Classement</Text>
                    <ScrollView style={ProfilGroupStyle.scrollView}>
                        <ClassementPlayer></ClassementPlayer>
                        <ClassementPlayer></ClassementPlayer>
                        <ClassementPlayer></ClassementPlayer>
                        <ClassementPlayer></ClassementPlayer>
                        <ClassementPlayer></ClassementPlayer>



                    </ScrollView>

                </View>


                <View style={ProfilGroupStyle.footer}>
                    <Text style={ProfilGroupStyle.footerText}>Supprimer un profil</Text>
                </View>
            </View> 

        </View>
    );
};

export default ProfilGroup;