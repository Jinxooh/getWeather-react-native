import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import { Font } from 'expo';
import Weather from 'components/Weather';
import Loading from 'components/Loading';

export default class Main extends Component {
  state = {
    fontLoaded: false,
    isLoaded: false,
  }

  async componentDidMount() {
    // https://fonts.googleapis.com/css?family=Dokdo|East+Sea+Dokdo
    await Font.loadAsync({
      dokdo: require('assets/fonts/Dokdo/Dokdo-Regular.ttf'),
      // 'dokdo-east-sea': require('./assets/fonts/East_Sea_Dokdo/EastSeaDokdo-Regular.ttf'),
      'bungee-shade': require('assets/fonts/Bungee_Shade/BungeeShade-Regular.ttf'),
    });

    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    const { isLoaded, fontLoaded } = this.state;
    return (
      fontLoaded ? <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? <Weather /> : <Loading /> }
      </View> : null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
