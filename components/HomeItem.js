import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import FadeInView from "./FadeInView"

const HomeItem = (props) => {
  return (
    <FadeInView style={styles.row}>
      <Image source={{ uri: props.images }} style={styles.thumbnail}/>
      <View style={styles.rightBox}>
        <Text style={styles.name}>{ props.name }</Text>
        <Text style={styles.address}>{ props.address }</Text>
      </View>
    </FadeInView>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: '#D6D7DA'
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightBox: {
    flex: 1
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  address: {
    textAlign: 'center'
  }
})

export default HomeItem