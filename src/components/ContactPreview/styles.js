import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  PreviewView: {
    flex: 1,
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 15,
  },
});
