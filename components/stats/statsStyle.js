import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const statsStyle = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10
      },
      categorie: {
        // flex: 1,
        // backgroundColor: "red",
        textAlign: 'left',
      },
      tirets: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
      },
      points: {
        // flex: 1,
        // backgroundColor: "red",
        textAlign: 'right',
      },

 })