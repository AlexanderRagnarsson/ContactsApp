import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
    // marginVertical: 80,
  },
  body: {
    alignItems: 'center',
    // alignContent: 'center',
    justifyContent: 'center',
    // flex: 1,
    // flexGrow: 0.3,
    borderRadius: 10,
    width: winWidth - 100,
    // height: winHeight - 100,
    backgroundColor: 'white',
    padding: 30,
  },
  title: {
    fontSize: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
});
