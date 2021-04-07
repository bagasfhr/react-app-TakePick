import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '../../../constants';

const {width} = Dimensions.get('window');

const SeeAllCard = ({onPress}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="chevron-right" size={24} color={colors.Primary_70} />
        </View>
        <Text style={styles.buttonText}>See All</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SeeAllCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 64,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    marginHorizontal: 8,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.Primary_70,
    padding: 8,
    marginBottom: 8,
  },
  buttonText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 12,
    color: colors.Primary_70,
    lineHeight: 16.8,
    textDecorationLine: 'underline',
  },
});
