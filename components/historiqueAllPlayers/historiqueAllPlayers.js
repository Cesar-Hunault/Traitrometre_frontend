import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import { HistoriqueAllPlayersStyle } from "./historiqueAllPayersStyle"; 


const HistoriqueAllPlayers = ({navigation}) => {

    const go_stats = () => {
        navigation.navigate('Player')
    }

    return (
        <View style={HistoriqueAllPlayersStyle.container}>
            <TouchableOpacity style={HistoriqueAllPlayersStyle.img} onPress={() => go_stats()}>
            </TouchableOpacity>
            <View style={HistoriqueAllPlayersStyle.infos}>
                <View style={HistoriqueAllPlayersStyle.nom}>
                    <Text>Nom</Text>
                </View>

                <View style={HistoriqueAllPlayersStyle.infoContainer}>
                    <Text>Traitrise</Text>
                    <View style={HistoriqueAllPlayersStyle.values}>
                        <Text style={HistoriqueAllPlayersStyle.multi}>x50</Text>
                        <Text>Nbr Points</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HistoriqueAllPlayers;