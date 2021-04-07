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

const RegularVendorCard = ({
  image,
  type,
  rating,
  review,
  city,
  region,
  title,
  categoryName,
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
            <Text style={styles.typeText}>FEATURED</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.reviewLocationContainer}>
            <Icon name="star" size={16} color={colors.Primary_10} solid />
            <Text style={styles.reviewLocationText}>4.73</Text>
            <Text style={styles.reviewLocationText}>(21)</Text>
            <Text style={styles.reviewLocationText}>| Bali, ID</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText} numberOfLines={2}>
              Delapan Bali Event & Wedding
            </Text>
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>Wedding Organizer</Text>
              <TouchableOpacity onPress={onPressOptions}>
                <Icon
                  name="dots-horizontal"
                  size={24}
                  color={colors.Black_40}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RegularVendorCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 12,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    marginBottom: 8,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    padding: 8,
  },
  typeContainer: {
    backgroundColor: colors.Primary_50,
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
  wishlistContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    alignSelf: 'flex-end',
  },
  reviewLocationContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  titleContainer: {},
  oldPriceContainer: {
    flexDirection: 'row',
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 'auto',
    height: 180,
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
  reviewLocationText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    color: colors.Black_100,
    lineHeight: 16.8,
    letterSpacing: 0.5,
    marginLeft: 4,
  },
  titleText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 15,
    // lineHeight: 19.6,
    color: colors.Black_100,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  categoryText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 1,
    flexGrow: 1,
  },
});
