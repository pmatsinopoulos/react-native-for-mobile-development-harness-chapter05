import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from "./screens/HomeScreen"
import HomeListScreen from "./screens/HomeListScreen"
import AboutScreen from "./screens/AboutScreen"

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  HomeList: {
    screen: HomeListScreen
  }
}, {
  initialRouteName: "Home",
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#48BBEC'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
})

const App = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App