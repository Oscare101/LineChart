import {Dimensions, StyleSheet} from 'react-native';
import colors from './colors';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    width: '92%',
    padding: width * 0.03,
    borderRadius: width * 0.03,
    marginTop: width * 0.03,
    backgroundColor: colors.BG,
  },
});
