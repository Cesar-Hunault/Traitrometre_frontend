import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HistoriqueAllPlayersStyle = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 20,
        marginVertical: 7

    },
    img: {
        backgroundColor: 'rgba(47, 154, 254, 0.47)',
        height: 45,
        width: 45,
        borderRadius: 180,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infos: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1

    },
    nom: {

    },
    infoContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15
    },
    values: {
        flexDirection: 'row',
    },
    multi: {
        marginRight: 25
    }

})