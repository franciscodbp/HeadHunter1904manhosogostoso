import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { StackNavigator } from "react-navigation"
//import MainScreen from './Components/MainScreen'
//import LoginPage from './Components/LoginPage'
//import Splash from './Components/Splash'
import Register from './Components/Register'

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    
    //screen: Splash,
    //screen: LoginPage,
    screen: Register
    //screen: MainScreen
    
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
