import { Linking, Alert, Platform } from 'react-native';

/*
Source:
https://stackoverflow.com/questions/51545064/how-to-make-phone-call-in-react-native
*/

const callNumber = (phone) => {
  console.log('callNumber ----> ', phone);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};

export default callNumber;
