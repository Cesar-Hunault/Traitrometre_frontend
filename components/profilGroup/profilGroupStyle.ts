import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ProfilGroupStyle = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 0,
        width: '90%',
        height: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

    subContainer: {
        backgroundColor: 'white',
        width: '80%',
        height: '100%',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        paddingTop: 50
    },
    boutonRetour: {
        marginTop: 15,
        backgroundColor: 'grey',
        borderRadius: 90,
        padding: 5
    },

    picAndName: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
    },
    profilPic: {
        backgroundColor: 'rgba(47, 154, 254, 0.47)',
        height: 95,
        width: 95,
        borderRadius: 180,
        marginBottom: 15
    },
    groupName: {
        fontSize: 20,
        fontWeight: "500"
    },

    classementContainer: {
        marginTop: 35,
        alignItems: 'center',
        height: '45%'
    },
    classementTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 15

    },
    scrollView: {
        width: '100%',
    },

    footer: {
        marginTop: '20%',
        alignItems: 'center'
    },
    footerText: {
        color: 'red',
        fontWeight: '500',
        textDecorationLine: 'underline'
    }

})