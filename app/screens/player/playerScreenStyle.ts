import { StyleSheet, Dimensions } from 'react-native';

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
        // justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 5,
    },
    boutonRetour: {
        // position: 'absolute',
        // top: 5,
        // left: 0,
        // height: '100%',
    },

    // container: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },


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
