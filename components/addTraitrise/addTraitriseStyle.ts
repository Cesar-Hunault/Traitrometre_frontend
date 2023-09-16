import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const AddTraitriseStyle = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    closeScroll: {
        borderWidth: 1,
        width: '15%',
        height: '2%',
        backgroundColor: 'grey',
        borderColor: 'grey',
        borderRadius: 30
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        marginTop: 15,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#0094FF',
        height: 40,
        width: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 18
    },
    buttonText: {
        color: 'white',
        fontWeight: '500'
    }

})