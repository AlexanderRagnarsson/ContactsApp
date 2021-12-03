import React from 'react';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Contacts from 'expo-contacts';
import styles from './styles';
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
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.RawImage],
      });
      if (data.length > 0) {
        data.forEach((contactFromOs) => {
          const imgToAdd = (contactFromOs.imageAvailable ? contactFromOs.rawImage.uri : 'https://static.rankone.global/img/avatars/avatar_silhouette2.png');
          let numToAdd = '';
          if ('phoneNumbers' in contactFromOs && 'digits' in contactFromOs.phoneNumbers[0]) {
            numToAdd = contactFromOs.phoneNumbers[0].digits;
          } else if ('phoneNumbers' in contactFromOs && 'number' in contactFromOs.phoneNumbers[0]) {
            numToAdd = contactFromOs.phoneNumbers[0].number;
          }
          const nameToAdd = (('name' in contactFromOs) ? contactFromOs.name : '');
          if (!phonenums.has(numToAdd) && nameToAdd !== '' && numToAdd !== '' && numToAdd !== undefined) {
            submit({
              name: nameToAdd, phoneNumber: numToAdd, photo: imgToAdd,
            });
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
        <View style={styles.container}>
          <MaterialCommunityIcons name="import" size={30} color="black" />
          <Text style={styles.text}>Import</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

ImportContacts.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ImportContacts;
