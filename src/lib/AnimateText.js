import React, { Component } from 'react';
import { StyleSheet, Text, Animated, Easing } from 'react-native';
import { BaseActions } from 'store/actionCreators';

class AnimateText extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    animatedVal: new Animated.Value(0),
    style: null,
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 1000,              // Make it take a while
        }
      ),
      Animated.spring(this.state.animatedVal, {
        toValue: -280,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        delay: 1200,
      }),
    ]).start(() => {
      BaseActions.animationDone();
      console.log('animation done');
    });
  }

  render() {
    let { fadeAnim, animatedVal } = this.state;
    const { style } = this.props;
    const propsStyle = style ? StyleSheet.flatten(style) : {};

    return (
      <Animated.Text                 // Special animatable View
        style={{
          ...propsStyle,
          opacity: fadeAnim,         // Bind opacity to animated value
          top: animatedVal,
        }}
      >
        {this.props.children}
      </Animated.Text>
    );
  }
}

export default AnimateText;