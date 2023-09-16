import React, { useState } from "react";
import {Text, View, Pressable} from 'react-native';
import { AddTraitriseStyle } from "./addTraitriseStyle";
import CustomTextInput from "../customTextInput/customTextInput";

const AddTraitrise = () => {

    const [username, setUsername] = useState('');
    const [traitrise, setTraitrise] = useState('');
    const [points, setPoints] = useState('');
    const [multiplicateur, setMultiplicateur] = useState('');

    

    return (
        <View style={AddTraitriseStyle.container}> 
            <View style={AddTraitriseStyle.closeScroll}>

            </View>
            <Text style={AddTraitriseStyle.title}>Nouvelle Traitrise</Text>

            <CustomTextInput
                placeholder={'Nom'}
                placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
                keyboardType={'default'}
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <CustomTextInput
                placeholder={'Type de traitrise'}
                placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
                keyboardType={'default'}
                onChangeText={text => setTraitrise(text)}
                value={traitrise}
            />
            <CustomTextInput
                placeholder={'Nombre de points'}
                placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
                keyboardType={'default'}
                onChangeText={text => setPoints(text)}
                value={points}
            />
            <CustomTextInput
                placeholder={'Multiplicateur'}
                placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
                keyboardType={'default'}
                onChangeText={text => setMultiplicateur(text)}
                value={multiplicateur}
            />

            <Pressable style={[AddTraitriseStyle.button]}
                onPress={() => null}>
                <Text style={AddTraitriseStyle.buttonText}>Valider</Text>
            </Pressable>

        </View>
    );
};

export default AddTraitrise;