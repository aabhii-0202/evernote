import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button1 = ({ onPress, children }) => {
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
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    
  },
  buttonStyle: {
    marginTop:48,
    backgroundColor: 'green',
    borderRadius: 4,
    marginLeft: 16,
    marginRight: 16,
    height: 50,
  },
};

export default Button1;
