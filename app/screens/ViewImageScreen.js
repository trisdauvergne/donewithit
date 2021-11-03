import React from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';
import colors from '../config/colors';

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                source={require('../assets/microwave.jpg')}
                style={styles.image}
                resizeMode='contain'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default ViewImageScreen;

