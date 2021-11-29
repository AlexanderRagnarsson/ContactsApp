import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Setting default styles for all Text components.
  defaultText: {
    style: {
      fontSize: 200,
      fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
      color: 'black',
    },
  },
});
