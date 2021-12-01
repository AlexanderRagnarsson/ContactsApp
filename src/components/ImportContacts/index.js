import React from 'react';
import { useSelector } from 'react-redux';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import PropTypes from 'prop-types';

import * as Contacts from 'expo-contacts';
// import styles from './styles';

const ImportContacts = (props) => {
  const { contacts } = useSelector((state) => state);
  const phonenums = new Set();
  contacts.forEach((contact) => phonenums.add(contact.phoneNumber));
  const { submit } = props;
  const addContactsFromOS = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    // console.log(status);
    if (status === 'granted') {
      console.log('Access to contacts granted!\n');
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.RawImage],
      });
      if (data.length > 0) {
        console.log('Importing contacts:');
        data.forEach((contactFromOs) => {
          const imgToAdd = (contactFromOs.imageAvailable ? contactFromOs.rawImage.uri : 'https://static.rankone.global/img/avatars/avatar_silhouette2.png');
          const numToAdd = (('phoneNumbers' in contactFromOs) ? contactFromOs.phoneNumbers[0].digits : '');
          const nameToAdd = (('name' in contactFromOs) ? contactFromOs.name : '');
          if (!phonenums.has(numToAdd) && nameToAdd !== '' && numToAdd !== '') {
            submit({
              name: nameToAdd, phoneNumber: numToAdd, photo: imgToAdd,
            });
            console.log(nameToAdd);
          }
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
