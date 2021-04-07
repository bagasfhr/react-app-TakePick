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

const SpecialProductCard = ({
  image,
  type,
  rating,
  city,
  region,
  title,
  newPrice,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: images}} />
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>BEST DEAL</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.reviewLocationContainer}>
            <Icon name="star" size={16} color={colors.Primary_10} />
            <Text style={styles.reviewLocationText}>4.73</Text>

            <Text style={styles.reviewLocationText}>| Bali, ID</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText} numberOfLines={3}>
              Package Engagement Photo & Video
            </Text>
            <Text style={styles.newPriceText}>IDR 5.087.500</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SpecialProductCard;

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
  reviewLocationContainer: {
    flexDirection: 'row',
    marginBottom: 4,
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
  reviewLocationText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 12,
    color: colors.Black_100,
    lineHeight: 16.8,
    letterSpacing: 0.5,
    marginLeft: 4,
  },
  titleText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    lineHeight: 16.8,
    color: colors.Black_100,
    marginBottom: 4,
  },
  newPriceText: {
    fontFamily: fonts.robotoBold,
    fontSize: 12,
    letterSpacing: 1,
  },
});
