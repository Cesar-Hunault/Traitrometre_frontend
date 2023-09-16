import React, { useState } from 'react';
import {Text, View, Dimensions } from 'react-native';
import { statsStyle } from "./statsStyle"; 

const windowWidth = Dimensions.get('window').width;

const Stats = ({ categorie, points }) => {

    const taille_un_tiret = 3.809523820877075

    const [tirets_a_afficher, setTirets] = useState('');

    const find_dimesions = (layout) => {
        const {x, y, width, height} = layout;

        // console.log("width");
        // console.log(width);

        const nbr_tirets = Math.floor(width / taille_un_tiret)
        // console.log("calcul")
        // console.log(nbr_tirets)
        
        const tirets = '-'.repeat(nbr_tirets-5);
        setTirets(tirets);
    }


    return (
      <View style={statsStyle.container}>
        <Text style={statsStyle.categorie}>{categorie}</Text>
        <View style={statsStyle.tirets} onLayout={(event) => { find_dimesions(event.nativeEvent.layout)}}>
            <Text>{tirets_a_afficher}</Text>
        </View>
        <Text style={statsStyle.points}>{points}</Text>
      </View>
    );
};

export default Stats;
