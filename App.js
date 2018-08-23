import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { StackNavigator } from 'react-navigation'
import MainScreen from './Components/MainScreen'

console.ignoredYellowBox = ["Warning: Failed"];

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
