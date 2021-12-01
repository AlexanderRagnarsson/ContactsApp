import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SearchBar from '../../components/SearchBar';
import AddButton from '../../components/AddButton';
import ContactPreview from '../../components/ContactPreview';
import AddContactModal from '../../components/AddContactModal';
import ImportContacts from '../../components/ImportContacts';
import styles from './styles';

const Contacts = ({ navigation: { navigate } }) => {
  // To add new contacts
  const dispatch = useDispatch();
  // All of the contacts
  const { contacts } = useSelector((state) => state);
  let nextId = contacts.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);

  // Is the modal to add a new contact open
  const [addModalOpen, setAddModalOpen] = useState(false);
  // The current term in the search bar
  const [search, setSearch] = useState('');
  // The currently shown contacts
  const [currentContacts, setCurrentContacts] = useState(
    // Sort the contacts after name
    contacts.sort(
      (a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      },
    ),
  );

  // Only get the contacts that fulfill the search criteria
  const filterContacts = (searchTerm) => (
    contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Check if arrays are eual
  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // Checks to see if we have to update the current contacts
  const checkContacts = (searchTerm) => {
    const filteredContacts = filterContacts(searchTerm);
    if (!arraysEqual(filteredContacts, currentContacts)) {
      setCurrentContacts(filteredContacts);
    }
  };

  // Update the search term and check for new contacts
  const updateSearch = (newSearch) => {
    checkContacts(newSearch);
    setSearch(newSearch);
  };

  // Add a new contact
  const submit = (newContact) => {
    // console.info(newContact);
    nextId += 1;

    dispatch({ type: 'ADD_CONTACT', payload: { ...newContact, id: nextId } });
  };

  checkContacts(search);

  return (
    <View style={styles.container}>
      <ImportContacts
        submit={submit}
      />
      <SearchBar
        search={search}
        setSearch={updateSearch}
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
