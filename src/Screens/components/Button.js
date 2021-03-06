import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color:'green',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 5,
    marginRight: 5,
    height: 50,
  },
};

export default Button;
