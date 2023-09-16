import React from "react";
import {TextInput} from 'react-native';
import { CustomTextInputStyle } from "./CustomTextInputStyle";

const CustomTextInput = (props) => {

    const { placeholder, placeholderTextColor, keyboardType, secureTextEntry, autoCapitalize, value, onChangeText } = props;
  
    return (
        <TextInput 
            style={CustomTextInputStyle.textInput} 
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize} 
            value={value}
            onChangeText={onChangeText}
            >
        </TextInput>
    );
};

export default CustomTextInput;