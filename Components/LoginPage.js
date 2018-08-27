import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView
    
} from "react-native"

export default class LoginPage extends Component {
    render() {
        return(<View style={styles.container} >
        <View style={styles.logoContainer}>
        <Image style={styles.logo}>
            
        </Image>
        </View>
    </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo:{
        width: 128,
        height: 56,
    }
})
//b