import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const loginStyle = StyleSheet.create({
    screen: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight
    },
    contentContainer: {
        justifyContent: 'center',
        width: windowWidth-50,
        margin: 10,
        marginTop: '33%',
        paddingVertical: 15
    },
    formContainer: {
        backgroundColor: 'rgba(249, 249, 249, 1)',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        paddingHorizontal: 15,
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
    profilPic: {
        backgroundColor: 'rgba(0, 98, 244, 0.08)',
        height: 53,
        width: 53,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signInForm: {
        width: '100%',
        height: Dimensions.get('window').height,
        flex: 1
    },
    title: {
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 22,
        marginBottom: 2,
        fontSize: 15,
    },
    titleText: {
        fontSize: 15,
        fontWeight: '500' 
    },
    textColor: {
        color: '#000000',
        // fontFamily: 'Poppins-Medium'
    },
    signButton: {
        backgroundColor: '#0094FF',
        height: 40,
        width: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 18
    },
    signButtonText: {
        color: 'white',
        fontWeight: '500'
        // fontFamily: 'Poppins-Medium'
    },
    brand: {
        marginVertical: 25
    },
    button: {
        backgroundColor: '#FFFFFF',
        height: 35,
        width: '85%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonCreate: {
        color: '#0094FF',
        textDecorationLine: 'underline',
        marginBottom: 20,
        fontWeight: '500'
        // fontFamily: 'Poppins-SemiBold'
    },

})
