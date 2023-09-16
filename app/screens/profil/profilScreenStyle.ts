import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const profilStyle = StyleSheet.create({

    screen: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        width: windowWidth,
        height: windowHeight,
    },

    header: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 5
    },
    boutonRetour: {
        position: 'absolute',
        top: 5,
        left: 0,
        height: '100%',
    },
    profil: {
        fontSize: 20,
        fontWeight: "500",
    },


    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25%'
    },

    form: {
        backgroundColor: 'rgba(249, 249, 249, 1)',
        alignItems: 'center',
        
        width: "90%",
        marginTop: 15,
        marginBottom: 25,
        borderRadius: 15,
        padding: 10,
        
        shadowColor: '#000000',
        //IOS
        shadowOffset: {
            width: 0,
            height: 2,
          },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        //Android
        elevation: 10
    },

    picAndName: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    profilPic: {
        backgroundColor: 'rgba(47, 154, 254, 0.47)',
        height: 95,
        width: 95,
        borderRadius: 180,
        marginBottom: 15
    },
    userName: {
        fontSize: 20,
        fontWeight: "500"
    },
    stats: {
        width: "100%",
        marginTop: 20,
        marginBottom: 30
    },
    Titre: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 10
    }

})
