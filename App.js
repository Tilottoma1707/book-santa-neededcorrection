
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreens'
import{createSwitchNavigator, createAppContainer} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import {AppTabNavigator} from './Components/ApptabNavigator'
export default class App extends React.Component {
  render() {
  return (
    
    <View style={styles.container}>
    <WelcomeScreen/>
    </View>
  );
}}

const switchNavgator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})
var AppContainer = createAppContainer(switchNavgator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
