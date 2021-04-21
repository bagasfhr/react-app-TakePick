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

const ListProjectCard = ({
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
        </View>
        <View style={styles.textContainer}>
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>TRADITIONAL</Text>
          </View>
          <Text style={styles.titleText}>Venue Sasana Modern</Text>
          <View style={styles.vendorContainer}>
            <Text style={styles.vendorText}>by SASANA MODERN</Text>
            <TouchableOpacity>
              <Icon name="dots-horizontal" size={24} color={colors.Black_40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListProjectCard;

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
    flex: 1,
    paddingHorizontal: 8,
  },
  typeContainer: {
    backgroundColor: colors.Primary_50,
    height: 16,
    borderTopRightRadius: 4,
    paddingHorizontal: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 4,
  },
  titleContainer: {
    width: 'auto',
  },
  vendorContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
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
    // marginBottom: 4,
  },
  vendorText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 1,
    flexGrow: 1,
  },
});
