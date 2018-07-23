import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons as TempIcon, Ionicons } from '@expo/vector-icons';
import FontedText from 'lib/FontedText';

const Weather = ({ temperature, weather }) => {
  return (
    <LinearGradient style={style.container} colors={['#00C6FB', '#005BEA']}>
      <View style={style.upper} >
        <Text style={style.mainTitle}>WEATHER</Text>
        <Ionicons name="ios-sunny-outline" size={144} color="white" />
        <View style={style.upperInfomation} >
          <Text style={style.temp}>{temperature} °C</Text>
        </View>
      </View>
      <View style={style.lower} >
        <FontedText style={style.subTitle}>{weather.main}</FontedText>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperInfomation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontFamily: 'bungee-shade',
    fontSize: 50,
  },
  temp: {
    fontSize: 52,
    color: 'white',
  },
  title: {
    fontSize: 40,
  },
  subTitle: {
    fontSize: 28,
    color: 'white',
  }
});

export default Weather;
