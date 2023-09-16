import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ProfilGroupStyle = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 0,
        width: '85%',
        height: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

    iconContainer: {
        width: wp('10%'), 
        height: wp('10%'),
        borderRadius: wp('10%') / 2, // Pour rendre le conteneur rond, divisez la largeur par 2
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    subContainer: {
        backgroundColor: 'white',
        width: '85%',
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