import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigator}>
          <Text style={styles.title}>Supreme</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator: {
    backgroundColor: '#ff00ff',
  },
  title: {
    color: '#fff'
  }
});
