import React from "react";
import {Text, TextInput, View} from 'react-native';
import { HistoriquePlayerStyle } from "./historiquePlayerStyle"; 


const HistoriquePlayer = () => {

    return (
        <View style={HistoriquePlayerStyle.container}>
            <View style={HistoriquePlayerStyle.img}>
            </View>
            <View style={HistoriquePlayerStyle.infos}>
                <View style={HistoriquePlayerStyle.traitrise}>
                    <Text>Traitrise</Text>
                </View>

                <View style={HistoriquePlayerStyle.infoContainer}>
                    <Text>Date</Text>
                    <View style={HistoriquePlayerStyle.values}>
                        <Text style={HistoriquePlayerStyle.multi}>x50</Text>
                        <Text>Nbr Points</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HistoriquePlayer;