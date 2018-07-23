import React from 'react';
import { StyleSheet, Text } from 'react-native';

const FontedText = ({ style, ...props }) => {
  const propsStyle = style ? StyleSheet.flatten(style) : {};
  const styles = StyleSheet.create({
    fontBase: {
      fontFamily: 'dokdo',
      ...propsStyle,
    },
  });
  return (
    <Text {...props} style={styles.fontBase}>
      {props.children} {style}
    </Text>
  );
};

export default FontedText;