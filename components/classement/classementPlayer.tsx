import React from "react";
import {Text, TextInput, View} from 'react-native';
import { ClassementPlayerStyle } from "./classementPlayerStyle"; 


const ClassementPlayer = () => {

    return (
        <View style={ClassementPlayerStyle.container}>
            <View style={ClassementPlayerStyle.img}>
            </View>
            <View style={ClassementPlayerStyle.infos}>
                <Text>Nom</Text>
                <View style={ClassementPlayerStyle.infoContainer}>
                    <Text>Nbr pts</Text>
                    <Text>1er</Text>
                </View>
            </View>
        </View>
    );
};

export default ClassementPlayer;