import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  ListArticleCard,
  RegularArticleCard,
  SpecialArticleCard,
} from '../components/molecules/ArticleCard';
import {
  ListProductCard,
  RegularProductCard,
  SpecialProductCard,
} from '../components/molecules/ProductCard';
import {
  ListVendorCard,
  RegularVendorCard,
  SpecialVendorCard,
} from '../components/molecules/VendorCard';
import ListWishlistCard from '../components/molecules/WishlistCard/ListWishlistPage';

import SeeAllCard from '../components/molecules/SeeAllCard';
import {cardSize, imageSize, colors} from '../constants';

const TestPage = () => {
  return (
    <View style={{backgroundColor: colors.Black_5}}>
      <ScrollView>
        <View>
          <Text
            style={{justifyContent: 'center', alignSelf: 'center', padding: 8}}>
            ---Wishlist Card---
          </Text>
          <View style={{paddingHorizontal: 8}}>
            <ListWishlistCard />
            <ListWishlistCard />
          </View>
        </View>
        <View>
          <Text
            style={{justifyContent: 'center', alignSelf: 'center', padding: 8}}>
            ---Vendor Card---
          </Text>
          <View style={{paddingHorizontal: 8}}>
            <ListVendorCard />
            <ListVendorCard />
          </View>
          <ScrollView horizontal style={{flexDirection: 'row'}}>
            <SpecialVendorCard />
            <SpecialVendorCard />
            <SeeAllCard />
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 8,
            }}>
            <RegularVendorCard
              cardSize={cardSize.smallVerticalRegularCard}
              imageSize={imageSize.smallVerticalRegularImage}
            />
            <RegularVendorCard
              cardSize={cardSize.smallVerticalRegularCard}
              imageSize={imageSize.smallVerticalRegularImage}
            />
          </View>
          <ScrollView horizontal={true}>
            <RegularVendorCard
              cardSize={cardSize.mediumRegularCard}
              imageSize={imageSize.mediumRegularImage}
            />
            <RegularVendorCard
              cardSize={cardSize.mediumRegularCard}
              imageSize={imageSize.mediumRegularImage}
            />
          </ScrollView>
          <View style={{paddingHorizontal: 8}}>
            <RegularVendorCard
              cardSize={cardSize.largeRegularCard}
              imageSize={imageSize.largeRegularImage}
            />
          </View>
          <View></View>
          <Text
            style={{justifyContent: 'center', alignSelf: 'center', padding: 8}}>
            ---Product Card---
          </Text>
          <View style={{paddingHorizontal: 8}}>
            <ListProductCard />
            <ListProductCard />
          </View>
          <ScrollView horizontal style={{flexDirection: 'row'}}>
            <SpecialProductCard />
            <SpecialProductCard />
            <SeeAllCard />
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 8,
            }}>
            <RegularProductCard
              cardSize={cardSize.smallVerticalRegularCard}
              imageSize={imageSize.smallVerticalRegularImage}
            />
            <RegularProductCard
              cardSize={cardSize.smallVerticalRegularCard}
              imageSize={imageSize.smallVerticalRegularImage}
            />
          </View>
          <ScrollView horizontal={true}>
            <RegularProductCard
              cardSize={cardSize.mediumRegularCard}
              imageSize={imageSize.mediumRegularImage}
            />
            <RegularProductCard
              cardSize={cardSize.mediumRegularCard}
              imageSize={imageSize.mediumRegularImage}
            />
          </ScrollView>
          <View style={{paddingHorizontal: 8}}>
            <RegularProductCard
              cardSize={cardSize.largeRegularCard}
              imageSize={imageSize.largeRegularImage}
            />
          </View>
        </View>
        <View>
          <Text
            style={{justifyContent: 'center', alignSelf: 'center', padding: 8}}>
            ---Article Card---
          </Text>
          <View style={{paddingHorizontal: 8}}>
            <ListArticleCard />
            <ListArticleCard />
          </View>
          <ScrollView horizontal style={{flexDirection: 'row'}}>
            <SpecialArticleCard />
            <SpecialArticleCard />
            <SeeAllCard />
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 8,
            }}>
            <RegularArticleCard
              cardSize={cardSize.smallVerticalRegularCard}
              imageSize={imageSize.smallVerticalRegularImage}
            />
            <RegularArticleCard
              cardSize={cardSize.smallVerticalRegularCard}
              imageSize={imageSize.smallVerticalRegularImage}
            />
          </View>
          <ScrollView horizontal={true}>
            <RegularArticleCard
              cardSize={cardSize.smallHorizontalRegularCard}
              imageSize={imageSize.smallHorizontalRegularImage}
            />
            <RegularArticleCard
              cardSize={cardSize.smallHorizontalRegularCard}
              imageSize={imageSize.smallHorizontalRegularImage}
            />
            <RegularArticleCard
              cardSize={cardSize.smallHorizontalRegularCard}
              imageSize={imageSize.smallHorizontalRegularImage}
            />
          </ScrollView>
          <ScrollView horizontal={true}>
            <RegularArticleCard
              cardSize={cardSize.mediumRegularCard}
              imageSize={imageSize.mediumRegularImage}
            />
            <RegularArticleCard
              cardSize={cardSize.mediumRegularCard}
              imageSize={imageSize.mediumRegularImage}
            />
          </ScrollView>
          <View style={{paddingHorizontal: 8}}>
            <RegularArticleCard
              cardSize={cardSize.largeRegularCard}
              imageSize={imageSize.largeRegularImage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TestPage;

const styles = StyleSheet.create({});
