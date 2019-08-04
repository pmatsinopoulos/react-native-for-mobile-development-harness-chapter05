import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const AboutScreen = (props) => {
  return (
    <View style={styles.about}>
      <Text>About Us</Text>
    </View>
  )
}

AboutScreen.navigationOptions = {
  title: 'About@!!!'
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AboutScreen