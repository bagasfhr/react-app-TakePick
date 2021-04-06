import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../constants/colors';

const FullStar = () => {
  return (
    <View>
      <Icon name="star" size={24} color={colors.Primary_70} />
    </View>
  );
};

const HalfStar = () => {
  return (
    <View>
      <Icon name="star-half" size={24} color={colors.Primary_70} />
    </View>
  );
};

const StarRating = () => {
  return (
    <View style={styles.container}>
      <FullStar />
      <HalfStar />
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
