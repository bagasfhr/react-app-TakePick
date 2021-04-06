import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import RegularArticleCard from '../components/molecules/ArticleCard/RegularArticleCard';
import SpecialArticleCard from '../components/molecules/ArticleCard/SpecialArticleCard';
import {cardSize, imageSize} from '../constants';

const TestPage = () => {
  return (
    <View>
      <Text>This is Test Page</Text>
      <SpecialArticleCard />
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
  );
};

export default TestPage;

const styles = StyleSheet.create({});
