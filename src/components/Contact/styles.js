import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  View: {
    backgroundColor: 'lightgray',
  },
  view: {
    // flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 300 / 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
  },
  nameView: {
    paddingVertical: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  phoneNumberView: {
    paddingVertical: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  phoneNumberText: {
    fontSize: 30,
    // fontWeight: 'bold',
    paddingHorizontal: 15,
    color: '#2986cc',
  },
  editText: {
    fontSize: 30,
    // fontWeight: 'bold',
    paddingHorizontal: 15,
    color: '#2986cc',
  },
  iconNumber: {
    flexDirection: 'row',
  },
});
