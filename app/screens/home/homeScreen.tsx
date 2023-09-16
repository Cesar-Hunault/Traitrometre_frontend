import React, { useEffect, useState, useContext } from 'react';
import { Pressable, SafeAreaView, Text, TextInput, View, StatusBar, ScrollView } from 'react-native';
import { AuthContext } from '../../../AuthContext';
import { homeStyle } from './homeScreenStyle';
import HistoriqueAllPlayers from '../../../components/historiqueAllPlayers/historiqueAllPlayers';
import AddTraitrise from '../../../components/addTraitrise/addTraitrise';
import ProfilGroup from '../../../components/profilGroup/profilGroup';

interface LoginScreenProps {
    navigation: any;
}

export const HomeScreen = (props: LoginScreenProps) => {

    return (
        
        <SafeAreaView style={homeStyle.screen}> 
            <StatusBar
                animated={true}
                backgroundColor= '#F5F5F5'
                barStyle='dark-content'
            />

            <View style={homeStyle.header}>
                <Text>burger</Text>
                <Text style={homeStyle.groupName}>Nom du Groupe</Text>
                <Text>Param</Text>
            </View>

            <View style={homeStyle.affichage}>
            </View>

            <ScrollView style={homeStyle.historique}>
                <HistoriqueAllPlayers/>
                <HistoriqueAllPlayers/>
                <HistoriqueAllPlayers/>
                <HistoriqueAllPlayers/>
                <HistoriqueAllPlayers/>
                <HistoriqueAllPlayers/>
                <HistoriqueAllPlayers/>
                <HistoriqueAllPlayers/>


            </ScrollView>

            <View style={homeStyle.boutonAjouter}>
                <Pressable style={homeStyle.pressableAjouter}>
                    <Text style={homeStyle.textAjouter}> Nouvelle traitrise </Text>
                </Pressable>
            </View>

            {/* <AddTraitrise></AddTraitrise>
            <ProfilGroup></ProfilGroup> */}
            
        </SafeAreaView>
    )

}