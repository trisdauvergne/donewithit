import React from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native';

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            source={require('../assets/andrew-haimerl-andrewnef-iRE9XAFmnPw-unsplash.jpg')}
            style={styles.background}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/child.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Sell what you don't need</Text>
            </View>
            <View style={styles.loginBtn}></View>
            <View style={styles.registerBtn}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 160,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    text: {
        color: 'yellow',
    },
    loginBtn: {
        width: '100%',
        height: 70,
        backgroundColor: 'red',
    },
    registerBtn: {
        width: '100%',
        height: 70,
        backgroundColor: 'blue',
    },
})

export default WelcomeScreen;