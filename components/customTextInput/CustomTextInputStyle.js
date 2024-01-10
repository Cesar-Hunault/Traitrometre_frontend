import { StyleSheet } from 'react-native';

export const CustomTextInputStyle = StyleSheet.create({

    textInput: {
        backgroundColor: '#F3F3F3',
        height: 40,
        width: '100%',
        borderRadius: 15,
        marginVertical: 7,
        paddingLeft: 15,
        color: 'black',
        // fontFamily: 'Poppins-Medium',
        // padding car placeholder non centré verticalement avec la font
        paddingTop: 0, 
        paddingBottom: 0,
    }
})