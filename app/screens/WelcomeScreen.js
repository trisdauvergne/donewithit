import React from 'react';
import {
    Button,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native';
import colors from '../config/colors';

const WelcomeScreen = ({ navigation }) => {
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
            <View style={styles.loginBtn}>
                <Button
                    title='View an image'
                    onPress={() => navigation.navigate('Image')}
                />
            </View>
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
        color: colors.primary,
    },
    loginBtn: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    registerBtn: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    },
})

export default WelcomeScreen;