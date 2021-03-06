import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts, buttonType} from '../../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomButton = ({
  text,
  onPress,
  buttonType,
  buttonText,
  iconColor,
  iconLeft,
  iconRight,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonType}>
        <Icon name={iconLeft} size={16} style={iconColor} />
        <Text style={buttonText}>{text}</Text>
        <Icon name={iconRight} size={16} style={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

// const styles = StyleSheet.create({});
