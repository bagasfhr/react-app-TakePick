import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '../../../../constants';

const {width} = Dimensions.get('window');

const images =
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const RegularProjectCard = ({
  image,
  type,
  title,
  vendorName,
  onPress,
  onPressOptions,
  cardSize,
  imageSize,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={cardSize}>
        <View style={styles.imageContainer}>
          <Image style={imageSize} source={{uri: images}} />
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>TRADITIONAL</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Venue Sasana Modern</Text>
          </View>
          <View style={styles.vendorNameContainer}>
            <View style={styles.vendorTextContainer}>
              <Text style={styles.vendorText} numberOfLines={1}>
                by SASANA MODERN
              </Text>
            </View>
            <TouchableOpacity onPress={onPressOptions}>
              <Icon name="dots-horizontal" size={24} color={colors.Black_40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RegularProjectCard;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    padding: 8,
  },
  typeContainer: {
    backgroundColor: colors.Primary_70,
    height: 16,
    paddingHorizontal: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 8,
    position: 'absolute',
    bottom: 1,
    marginLeft: 8,
  },
  vendorNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vendorTextContainer: {
    flexGrow: 1,
    // maxWidth: '90%',
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
    // marginBottom: 8,
  },
  vendorText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 16.8,
    color: colors.Black_100,
    maxWidth: '85%',
  },
});
