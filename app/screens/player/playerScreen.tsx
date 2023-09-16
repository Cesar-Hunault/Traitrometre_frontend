import React from 'react';
import { SafeAreaView, View, Text, StatusBar, ScrollView } from "react-native";
import { playerStyle } from './playerScreenStyle';
import Stats from '../../../components/stats/stats';
import HistoriquePlayer from '../../../components/historiquePlayer/historiquePlayer';

interface LoginScreenProps {
    navigation: any;
}

export const PlayerScreen = (props: LoginScreenProps) => {

    return (

        <SafeAreaView style={playerStyle.screen}>
            <StatusBar
                animated={true}
                backgroundColor= '#F5F5F5'
                barStyle='dark-content'
            />

            <View style={playerStyle.header}>
                <Text style={playerStyle.boutonRetour}>retour</Text>
            </View>

            <View style={playerStyle.picAndName}>
                <View style={playerStyle.profilPic}>

                </View>
                <Text style={playerStyle.userName}> Nom </Text>
            </View>

            <View style={playerStyle.stats}>
                <Stats categorie="Nombre de Traitrise" points="27" />
                <Stats categorie="Total de points" points="158" />
                <Stats categorie="Position dans la course" points="1er" /> 
            </View>

            <ScrollView style={playerStyle.listContainer}>

                <HistoriquePlayer></HistoriquePlayer>
                <HistoriquePlayer></HistoriquePlayer>
                <HistoriquePlayer></HistoriquePlayer>
                <HistoriquePlayer></HistoriquePlayer>
                <HistoriquePlayer></HistoriquePlayer>
                <HistoriquePlayer></HistoriquePlayer>
                <HistoriquePlayer></HistoriquePlayer>
                <HistoriquePlayer></HistoriquePlayer>
                <HistoriquePlayer></HistoriquePlayer>

            </ScrollView>
            

        </SafeAreaView>
    )
}