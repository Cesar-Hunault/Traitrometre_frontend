import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const homeStyle = StyleSheet.create({

    screen: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        width: windowWidth,
        height: windowHeight,
    },

    header: {
        // backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 15,
        marginBottom: 5
    },
    groupName: {
        fontSize: 20,
        fontWeight: "500"
    },



    affichage: {
        backgroundColor: 'rgba(249, 249, 249, 1)',
        alignItems: 'center',
        height: windowHeight/2.5,
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 25,
        padding: 18,
        borderRadius: 15,
        
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



    historique: {
        // backgroundColor: 'red',
        height: windowHeight /4,
        marginBottom: 10

    },




    boutonAjouter: {
        alignItems: 'center',
        marginBottom: 10
    },
    pressableAjouter: {
        backgroundColor:'#0094FF',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderRadius: 90,
    },
    textAjouter: {
        fontWeight: '500',
        color: 'white'

    }

})