import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import styles from './styles';
import ContactPreview from '../ContactPreview';

const ContactList = ({ contacts, navigate }) => (
  <View style={styles.view}>
    <FlatList
      style={styles.list}
      data={contacts}
      renderItem={({ item }) => (
        <ContactPreview {...{ ...item, navigate }} />
      )}
      keyExtractor={(board) => board.id}
    />
  </View>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default ContactList;
