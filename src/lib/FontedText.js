import React from 'react';
import { Text } from 'react-native';

const FontedText = (props) => {
  return (
    <Text style={{ fontFamily: 'dokdo' }} {...props}>
      {props.children}
    </Text>
  );
};

export default FontedText;