import React, { useEffect, useState, useContext } from 'react';
import { Pressable, SafeAreaView, Text, Modal, View, StatusBar, ScrollView } from 'react-native';
import { homeStyle } from './homeScreenStyle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HistoriqueAllPlayers from '../../../components/historiqueAllPlayers/historiqueAllPlayers';
import AddTraitrise from '../../../components/addTraitrise/addTraitrise';
import ProfilGroup from '../../../components/profilGroup/profilGroup';
import Icon from 'react-native-vector-icons/Ionicons';


interface HomeScreenProps {
    navigation: any;
}

export const HomeScreen = (props: HomeScreenProps) => {

    const [isVisibleModalGroup, setIsVisibleModalGroup] = useState(false);
    const [isVisibleModalAjout, setIsVisibleModalAjout] = useState(false);


    const parametres = () => {
        props.navigation.navigate('Profil')
    }

    const toggleModalGroup = () => {
        setIsVisibleModalGroup(!isVisibleModalGroup);
    };

    const toggleModalAjout = () => {
        setIsVisibleModalAjout(!isVisibleModalAjout);
    };

    return (
        
        <SafeAreaView style={homeStyle.screen}> 
            <StatusBar
                animated={true}
                backgroundColor= '#F5F5F5'
                barStyle='dark-content'
            />

            <View style={homeStyle.header}>
                <View style={homeStyle.iconContainer}>
                    <Icon name="menu-outline" size={wp('8%')} color='#878787' onPress={toggleModalGroup}/>   
                </View>
                <Text style={homeStyle.groupName}>Nom du Groupe</Text>
                <Icon name="settings" size={wp('7.5%')} color="rgba(135, 135, 135, 0.68)" onPress={() => parametres()}/>
            </View>

            <View style={homeStyle.affichage}>
            </View>

            <ScrollView style={homeStyle.historique}>
                <HistoriqueAllPlayers navigation={props.navigation}/>
                <HistoriqueAllPlayers navigation={props.navigation}/>
                <HistoriqueAllPlayers navigation={props.navigation}/>
                <HistoriqueAllPlayers navigation={props.navigation}/>
                <HistoriqueAllPlayers navigation={props.navigation}/>
                <HistoriqueAllPlayers navigation={props.navigation}/>
                <HistoriqueAllPlayers navigation={props.navigation}/>
                <HistoriqueAllPlayers navigation={props.navigation}/>



            </ScrollView>

            <View style={homeStyle.boutonAjouter}>
                <Pressable style={homeStyle.pressableAjouter} onPress={toggleModalAjout}>
                    <Text style={homeStyle.textAjouter}> Nouvelle traitrise </Text>
                </Pressable>
            </View>


            <Modal
                visible={isVisibleModalAjout}
                animationType="none"
                transparent={true}
            >
                <AddTraitrise onClose={toggleModalAjout}/>
            </Modal>

            <Modal
                visible={isVisibleModalGroup}
                animationType="none"
                transparent={true}
            >
                <ProfilGroup onClose={toggleModalGroup}/>
            </Modal>
            
        </SafeAreaView>
    )

}