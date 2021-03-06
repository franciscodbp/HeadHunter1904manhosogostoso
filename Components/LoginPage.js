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
        return(
            <SafeAreaView style ={styles.container}>
                <StatusBar barStyle='light-content'/>
                <KeyboardAvoidingView behavior='padding' style={styles.container}  >
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo}
                                source={require('../assets/WolfIcon.png')}>
                            </Image>
                            <Text style={styles.title}>HeadHunter</Text>
                        </View>
                        <View style ={styles.infoContainer}>
                            <TextInput style={styles.input}
                                placeholder='Enter Username/Email'
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCorrect={false}
                                onSubmitEditing={()=> this.refs.txtPassword.focus()}
                            />
                            <TextInput style={styles.input}
                                placeholder='Enter Password'
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                returnKeyType='go'
                                secureTextEntry={true}
                                ref={'txtPassword'}
                            />
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>SIGN IN</Text>
                            </TouchableOpacity>
                </View>
                </View>
             </TouchableWithoutFeedback>

                </KeyboardAvoidingView>
             
            </SafeAreaView>
       )
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
    },
    title:{
        color:'#ffd700',
        fontSize: 20,
        textAlign: 'center'
    },
    infoContainer:{
        position:'absolute',
        left:0,
        right: 0,
        bottom : 0,
        height:200,
        padding:20,
        //backgroundColor:'red'
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom:20,
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor:'#ffd700',
        paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    }

})
