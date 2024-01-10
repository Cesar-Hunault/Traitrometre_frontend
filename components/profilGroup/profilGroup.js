import React, { useState } from "react";
import {Text, View, Pressable, ScrollView} from 'react-native';
import { ProfilGroupStyle } from "./profilGroupStyle";
import ClassementPlayer from "../classement/classementPlayer";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfilGroup = ({ onClose }) => {

    const [username, setUsername] = useState('');
    const [traitrise, setTraitrise] = useState('');
    const [points, setPoints] = useState('');
    const [multiplicateur, setMultiplicateur] = useState('');

    

    return (
        <View style={ProfilGroupStyle.container}>

            <View style={ProfilGroupStyle.iconContainer}>
                <Icon name="close-outline" size={wp('10%')} color='#878787' onPress={onClose}/>   
            </View>

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