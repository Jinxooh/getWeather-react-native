import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import FontedText from 'lib/FontedText';
import { LinearGradient } from 'expo';

const Loading = ({ error }) => {
  return (
    <LinearGradient colors={['#FDF6AA', 'rgba(0,0,0,0.8)']} style={style.gradient} >
      <Text style={style.mainTitle}>WEAHTER</Text>
      { error ?
        <FontedText style={style.errorFont}>{error}</FontedText> :
        <React.Fragment>
          <FontedText style={style.basicFont}>Now Loading...</FontedText>
          <ActivityIndicator size="large" color="#000" />
        </React.Fragment>
      }
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicFont: {
    fontSize: 20,
    marginBottom: 20,
  },
  errorFont: {
    fontSize: 20,
    marginBottom: 20,
    color: 'red',
  },
  mainTitle: {
    fontFamily: 'bungee-shade',
    fontSize: 50,
    marginBottom: 20,
  },
});

export default Loading;