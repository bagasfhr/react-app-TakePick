import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '../../../../constants';
import {Coupon16} from '../../../../assets/icons';

const {width} = Dimensions.get('window');

const images =
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const RegularNewsCard = ({
  avatar,
  vendorName,
  date,
  likes,
  comment,
  description,
  image,
  imageCarousel,
  onPress,
  onPressBookmark,
  onPresslikes,
  onPressComment,
  onPressShare,
  onPressImage,
  onPressImageCarousel,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.avatar} source={{uri: images}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.titleContainerFlex}>
          <View style={styles.titleContainer}>
            <Text style={styles.vendorNameText}>Alissha Bride</Text>
            <Text style={styles.dateText}>Sep 20, 2020</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBookmark}>
          <Icon name="bookmark-outline" size={24} color={colors.Black_60} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={onPressImage}>
          <Image style={styles.image} source={{uri: images}} />
        </TouchableOpacity>
        <ScrollView
          style={styles.carouselContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Image style={styles.carousel} source={{uri: images}} />
          <Image style={styles.carousel} source={{uri: images}} />
          <Image style={styles.carousel} source={{uri: images}} />
          <Image style={styles.carousel} source={{uri: images}} />
          <Image style={styles.carousel} source={{uri: images}} />
        </ScrollView>
      </View>
      <View style={styles.socialButtonContainer}>
        <TouchableOpacity onPress={onPresslikes}>
          <View style={styles.heartButton}>
            <Icon name="heart-outline" size={24} color={colors.Black_60} />
            <Text style={styles.buttonText}>15</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressComment}
          style={styles.commentButtonFlex}>
          <View style={styles.commentButton}>
            <Icon name="comment-outline" size={24} color={colors.Black_60} />
            <Text style={styles.buttonText}>15</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressShare}>
          <View style={styles.shareButton}>
            <Icon name="share-outline" size={24} color={colors.Black_60} />
            <Text style={styles.buttonText}>Share</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.descriptionText} numberOfLines={4}>
            Nisi amet ipsum exercitation reprehenderit pariatur nisi qui magna
            ex labore qui non. Cupidatat voluptate anim enim est nisi dolor eu
            non est occaecat. Minim cupidatat enim sunt exercitation commodo
            aliquip ipsum enim laborum magna velit nostrud dolor. Voluptate
            deserunt ipsum ipsum deserunt ut sunt eu sunt reprehenderit
            consectetur laborum cillum do qui.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegularNewsCard;

const styles = StyleSheet.create({
  container: {
    width: width / 1 - 16,
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  titleContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 16,
  },
  titleContainerFlex: {
    flexGrow: 1,
  },
  imageContainer: {
    marginVertical: 8,
  },
  carouselContainer: {
    // justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 8,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    padding: 8,
  },
  descriptionContainer: {
    padding: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  image: {
    width: 'auto',
    height: 368,
  },
  carousel: {
    width: 80,
    height: 80,
    marginLeft: 8,
  },
  heartButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  commentButtonFlex: {
    flexGrow: 1,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vendorNameText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 0.5,
    color: colors.Black_100,
  },
  dateText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 12,
    lineHeight: 16.8,
    letterSpacing: 1,
    color: colors.Black_100,
  },
  buttonText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 14,
    lineHeight: 19.6,
    color: colors.Black_80,
    marginLeft: 4,
  },
  descriptionText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    lineHeight: 16.4,
    letterSpacing: 0.5,
    color: colors.Black_100,
    marginRight: 8,
  },
});
