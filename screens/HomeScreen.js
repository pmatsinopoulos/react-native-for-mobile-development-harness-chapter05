import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight
} from 'react-native'

const lionImage = require('../assets/lion2.jpg')

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'House State'
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.topBox} onPress={() => {this.props.navigation.navigate('HomeList')}}>
          <Image style={styles.homeBanner} source={lionImage}/>
        </TouchableHighlight>
        <View style={styles.bottomBox}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topBox: {
    flex: 2,
    backgroundColor: '#CCE5FF'
  },
  bottomBox: {
    flex: 1,
    backgroundColor: '#FFFFCC'
  },
  homeBanner: {
    bottom: 0,
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
})

export default HomeScreen
