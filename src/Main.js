import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import { Font } from 'expo';
import { getWeather } from 'lib/getWeather';
import Weather from 'components/Weather';
import Loading from 'components/Loading';


export default class Main extends Component {
  state = {
    fontLoaded: false,
    isLoaded: false,
    error: false,
    temperature: 0,
    weather: null,
  }

  async componentDidMount() {
    const { getWeather } = this;
    await Font.loadAsync({
      dokdo: require('../assets/fonts/Dokdo/Dokdo-Regular.ttf'),
      // 'dokdo-east-sea': require('./assets/fonts/East_Sea_Dokdo/EastSeaDokdo-Regular.ttf'),
      'bungee-shade': require('../assets/fonts/Bungee_Shade/BungeeShade-Regular.ttf'),
    });

    this.setState({
      fontLoaded: true,
    });

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { coords } = position;
        await getWeather(coords);

        this.setState({
          isLoaded: true,
        });
      },
      (error) => {
        this.setState({
          error: 'error occurs',
        })
      }
    );

    // this.setState({
    //   error: 'error occurs',
    // })
  }

  getWeather = async (coords) => {
    const { latitude: lat, longitude: lon } = coords;
    const result = await getWeather(lat, lon);
    console.log('result', result);
    const { main, weather } = result;
    this.setState({
      temperature: parseInt(main.temp - 273.15, 10), // K to C
      weather: weather[0],
    })
  }

  render() {
    const { isLoaded, fontLoaded, error, temperature, weather } = this.state;
    return (
      fontLoaded ? <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? <Weather temperature={temperature} weather={weather}/> : <Loading error={error} /> }
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
