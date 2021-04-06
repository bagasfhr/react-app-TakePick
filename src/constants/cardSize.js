import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const cardSize = StyleSheet.create({
  smallVerticalRegularCard: {
    width: width / 2 - 12,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    marginBottom: 8,
  },
  smallHorizontalRegularCard: {
    width: width / 2 - 12,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    marginBottom: 8,
    marginLeft: 8,
  },
  mediumRegularCard: {
    width: width / 1 - 108,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    marginBottom: 8,
    marginLeft: 8,
  },
  largeRegularCard: {
    width: width / 1 - 16,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    marginBottom: 8,
  },
});

export default cardSize;
