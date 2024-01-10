import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const playerStyle = StyleSheet.create({

    screen: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        width: windowWidth,
        height: windowHeight,
    },
    header: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 5,
    },
    iconContainer: {
        width: wp('10%'), 
        height: wp('10%'),
        borderRadius: wp('10%') / 2, // Pour rendre le conteneur rond, divisez la largeur par 2
        backgroundColor: 'rgba(217, 217, 217, 0.40)',
        justifyContent: 'center',
        alignItems: 'center',
    },


    picAndName: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
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
        backgroundColor: 'rgba(249, 249, 249, 1)',
        alignItems: 'center',
        alignSelf: 'center',        
        width: "90%",
        marginVertical: 25,
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

    listContainer: {
        paddingVertical: 5,
    }
})
