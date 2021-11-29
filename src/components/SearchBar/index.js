import React from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBar = ({ setCurrentContacts }) => {
  const dispatch = useDispatch();
  const { contacts, search } = useSelector((state) => state);

  const setSearch = (newSearch) => {
    dispatch({ type: 'UPDATE_SEARCH', payload: newSearch });
  };

  const updateSearch = (value) => {
    setSearch(value);
    setCurrentContacts(contacts.filter((contact) => contact.name.includes(search)));
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={(value) => updateSearch(value)}
      />
    </View>
  );
};

SearchBar.propTypes = {
  setCurrentContacts: PropTypes.func.isRequired,
};

export default SearchBar;
