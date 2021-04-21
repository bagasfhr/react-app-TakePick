import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '../../../../constants';

const {width} = Dimensions.get('window');

const images =
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const SpecialProjectCard = ({
  image,
  type,
  title,
  vendorName,
  onPress,
  onPressOptions,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: images}} />
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>TRADITIONAL</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText} numberOfLines={2}>
              Venue Sasana Modern
            </Text>
            <Text style={styles.vendorText} numberOfLines={1}>
              by SASANA MODERN
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SpecialProjectCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 64,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    marginLeft: 8,
    marginBottom: 8,
  },
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    padding: 8,
  },
  typeContainer: {
    backgroundColor: colors.Primary_50,
    height: 16,
    borderTopRightRadius: 4,
    paddingHorizontal: 4,
    position: 'absolute',
    top: 128 - 16,
  },
  titleContainer: {},
  image: {
    width: 'auto',
    height: 128,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  typeText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 12,
    color: colors.Black_5,
    lineHeight: 16.8,
    letterSpacing: 1,
  },
  titleText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 15,
    color: colors.Black_100,
    letterSpacing: 0.5,
  },
  vendorText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16.8,
    color: colors.Black_100,
    maxWidth: '85%',
  },
});
