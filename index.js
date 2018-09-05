import React, { Component } from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import LoginPage from './Components/LoginPage'
import Splash from './Components/Splash'
import MainScreen from "./Components/MainScreen";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen: 'Splash'}
        console.log('Start doing some task for about 2 seconds')
        setTimeout(()=>{
            console.log('Done some task for 2 seconds')
            this.setState({currentScreen:'LoginPage'})
        },2000)
        
    }
    render(){
        const {currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <LoginPage/>
        return mainScreen
    }

}
AppRegistry.registerComponent('ReactNativeproject', () => Main)
