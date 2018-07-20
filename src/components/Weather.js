import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons as TempIcon, Ionicons } from '@expo/vector-icons';

const Weather = ({ temperature }) => {
  return (
    <LinearGradient style={style.container} colors={['#00C6FB', '#005BEA']}>
      <View style={style.upper} >
        <Ionicons name="ios-sunny-outline" size={144} color="white" />
        <View style={style.upperInfomation} >
          <Text style={style.temp}>{temperature}</Text>
          <TempIcon name="temperature-celsius" size={34} color="white" />
        </View>
      </View>
      <View style={style.lower} >
        <Text>Blah blah</Text>
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
  temp: {
    fontSize: 32,
    color: 'white',
  },
  title: {
    fontSize: 40,
  },
  subTitle: {
    fontSize: 28,
  }
});

export default Weather;
