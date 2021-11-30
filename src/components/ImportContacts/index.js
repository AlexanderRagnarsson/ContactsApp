import React from 'react';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import PropTypes from 'prop-types';

import * as Contactz from 'expo-contacts';
// import styles from './styles';

const ImportContacts = (props) => {
  const { submit } = props;
  const addContactsFromOS = async () => {
    const { status } = await Contactz.requestPermissionsAsync();
    console.log(status);
    console.log(submit);
    if (status === 'granted') {
      const { data } = await Contactz.getContactsAsync({
        fields: [Contactz.Fields.PhoneNumbers, Contactz.Fields.RawImage],
      });
      if (data.length > 0) {
        data.forEach((contactFromOs) => {
          const imgToAdd = (contactFromOs.imageAvailable ? contactFromOs.rawImage.uri : 'https://i.ytimg.com/vi/BYx04e35Xso/maxresdefault.jpg');
          const numToAdd = (('phoneNumbers' in contactFromOs) ? contactFromOs.phoneNumbers[0].digits : '');
          const nameToAdd = (('name' in contactFromOs) ? contactFromOs.name : '');
          console.info(contactFromOs);
          submit({
            name: nameToAdd, phoneNumber: numToAdd, photo: imgToAdd,
          });
        });
      }
    }
  };
  return (
    <View>
      <TouchableHighlight
        onPress={async () => addContactsFromOS()}
      >
        <Text>Import</Text>
      </TouchableHighlight>
    </View>
  );
};

ImportContacts.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ImportContacts;
