import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SearchBar from '../../components/SearchBar';
import AddButton from '../../components/AddButton';
import ContactPreview from '../../components/ContactPreview';
import AddContactModal from '../../components/AddContactModal';
import styles from './styles';

const Contacts = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const { currentContacts } = useSelector((state) => state);
  console.log(currentContacts);

  const [addModalOpen, setAddModalOpen] = useState(false);

  const setCurrentContacts = (newContacts) => {
    dispatch({ type: 'UPDATE_CURRENT_CONTACTS', payload: newContacts });
  };

  const submit = (newContact) => {
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        setCurrentContacts={setCurrentContacts}
      />
      <AddButton
        onAdd={() => setAddModalOpen(true)}
        addString="Add Contact"
      />
      <FlatList
        numColumns={1}
        data={currentContacts}
        renderItem={({ item }) => (
          <ContactPreview {...{ ...item, navigate }} />
        )}
      />
      <AddContactModal
        isOpen={addModalOpen}
        closeModal={() => setAddModalOpen(false)}
        submit={submit}
      />
    </View>
  );
};

Contacts.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Contacts;
