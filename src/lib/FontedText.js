import React from 'react';
import { StyleSheet, Text } from 'react-native';

const FontedText = ({ style, ...props }) => {
  const propsStyle = style ? StyleSheet.flatten(style) : {};

  return (
    <Text {...props} style={{
      fontFamily: 'dokdo',
      ...propsStyle,
    }}>
      {props.children}
    </Text>
  );
};

export default FontedText;