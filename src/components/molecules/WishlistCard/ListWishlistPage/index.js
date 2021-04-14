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

const ListWishlistCard = ({
  image,
  rating,
  review,
  city,
  region,
  title,
  vendorName,
  oldPrice,
  newPrice,
  onPressCheck,
  onPressDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: images}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText} numberOfLines={1}>
            Package Engagement Photo & Video
          </Text>
          <Text style={styles.vendorText}>by Rakapicture</Text>
          <View style={styles.reviewLocationContainer}>
            <Icon name="star" size={18} color={colors.Primary_10} />
            <Text style={styles.reviewLocationText}>4.73</Text>
            <Text style={styles.reviewLocationText}>(21)</Text>
            <Text style={styles.reviewLocationText}>| Bali, ID</Text>
          </View>
          {/* <View style={styles.oldPriceContainer}>
            <Image source={Coupon16} />
            <Text style={styles.oldPriceText}>IDR 5.587.500</Text>
          </View> */}
          <Text style={styles.newPriceText}>IDR 5.087.500</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onpress={onPressCheck}
          style={styles.buttonCheckContainer}>
          <View style={styles.buttonCheck}>
            <Icon name="plus" size={24} color={colors.Primary_70} />
            <Text style={styles.buttonCheck}>Check availibility</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressDelete}
          style={styles.buttonDeleteContainer}>
          <View>
            <Icon name="delete-outline" size={24} color={colors.Black_80} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListWishlistCard;

const styles = StyleSheet.create({
  container: {
    width: width / 1 - 16,
    flex: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  imageContainer: {},
  textContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  reviewLocationContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  oldPriceContainer: {
    flexDirection: 'row',
    marginLeft: 2,
  },
  buttonCheckContainer: {
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.Primary_70,
    flexGrow: 1,
    // elevation: 3,
  },
  buttonDeleteContainer: {
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 8,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  buttonCheck: {
    flexDirection: 'row',
    color: colors.Primary_70,
    fontFamily: fonts.poppinsMedium,
    fontSize: 14,
    textAlignVertical: 'center',
    lineHeight: 20,
    marginHorizontal: 8,
  },
  titleText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
    // lineHeight: 19.6,
    color: colors.Black_100,
    // letterSpacing: 0.2,
    marginBottom: 4,
  },
  vendorText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    color: colors.Black_100,
    lineHeight: 16.8,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  reviewLocationText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    color: colors.Black_100,
    lineHeight: 16.8,
    letterSpacing: 0.5,
    marginLeft: 4,
  },
  oldPriceText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    lineHeight: 16.8,
    letterSpacing: 1,
    textDecorationLine: 'line-through',
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
