import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import TestPage from './../src/testPage';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <View>
          <TestPage />
        </View>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
