import React from "react";
import {Text, TextInput, View} from 'react-native';
import { HistoriqueAllPlayersStyle } from "./historiqueAllPayersStyle"; 


const HistoriqueAllPlayers = () => {

    return (
        <View style={HistoriqueAllPlayersStyle.container}>
            <View style={HistoriqueAllPlayersStyle.img}>
            </View>
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