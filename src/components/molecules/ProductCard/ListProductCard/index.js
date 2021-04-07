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
import {Coupon16} from '../../../../assets/icons';

const {width} = Dimensions.get('window');

const images =
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const ListProductCard = ({
  image,
  type,
  rating,
  review,
  city,
  region,
  title,
  oldPrice,
  newPrice,
  onPress,
  onPressWishlist,
  onPressOptions,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: images}} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.typeReviewLocationContainer}>
            <View style={styles.typeContainer}>
              <Text style={styles.typeText}>BEST DEAL</Text>
            </View>
            <View style={styles.reviewLocationContainer}>
              <Icon name="star" size={16} color={colors.Primary_10} />
              <Text style={styles.reviewLocationText}>4.73</Text>
              <Text style={styles.reviewLocationText} numberOfLines={1}>
                | Bali, ID
              </Text>
            </View>
            <TouchableOpacity onPress={onPressWishlist}>
              <Icon
                name="heart-outline"
                size={16}
                color={colors.Black_60}
                style={styles.wishlist}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText} numberOfLines={1}>
              Package Engagement Photo & Video Photo & Video
            </Text>
            <View style={styles.oldPriceContainer}>
              <Image source={Coupon16} />
              <Text style={styles.oldPriceText}>IDR 5.587.500</Text>
            </View>
            <View style={styles.newPriceContainer}>
              <Text style={styles.newPriceText}>IDR 5.087.500</Text>
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

export default ListProductCard;

const styles = StyleSheet.create({
  container: {
    width: width / 1 - 16,
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 8,
  },
  imageContainer: {},
  textContainer: {
    flexShrink: 2,
    paddingHorizontal: 8,
  },
  typeReviewLocationContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    width: 'auto',
  },
  typeContainer: {
    backgroundColor: colors.Primary_50,
    height: 16,
    borderTopRightRadius: 4,
    paddingHorizontal: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderRadius: 4,
    // marginBottom: 4,
  },
  reviewLocationContainer: {
    flexDirection: 'row',
    // marginBottom: 4,
    marginLeft: 4,
    flexGrow: 1,
  },
  titleContainer: {
    width: 'auto',
  },
  oldPriceContainer: {
    flexDirection: 'row',
  },
  newPriceContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 8,
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
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    lineHeight: 19.6,
    color: colors.Black_100,
    // letterSpacing: 0.2,
    marginBottom: 8,
  },
  oldPriceText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    lineHeight: 16.8,
    letterSpacing: 1,
    textDecorationLine: 'line-through',
    marginBottom: 4,
    marginLeft: 4,
  },
  newPriceText: {
    fontFamily: fonts.robotoBold,
    fontSize: 16,
    lineHeight: 22.4,
    letterSpacing: 1,
    flexGrow: 1,
  },
});
