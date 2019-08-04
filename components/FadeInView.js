import React from 'react'
import { Animated, Text, View } from 'react-native'

class FadeInView extends React.Component {
  state = {
    fadeAdmin: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAdmin,
      {
        toValue: 1,
        duration: 4000,
      }
    ).start()
  }

  render() {
    let { fadeAdmin } = this.state

    return (
      <Animated.View
        style={{ ...this.props.style, opacity: fadeAdmin }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

export default FadeInView