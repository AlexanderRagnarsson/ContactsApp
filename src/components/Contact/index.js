import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Contact = (id, name, phoneNumber, photo) => (
  <View style={styles.View}>
    <Text style={styles.Text}>{id}</Text>
    <Image style={styles.photo} src={photo} />
    <View style={styles.NameView}>
      <Text style={styles.nameText}>{name}</Text>
    </View>
    <View style={styles.phoneNumberView}>
      <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
    </View>
  </View>
);

Contact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Contact;
