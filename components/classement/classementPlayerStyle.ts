import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ClassementPlayerStyle = StyleSheet.create({

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
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    infoContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '20%',
    },
    multi: {
        marginRight: 25
    }

})