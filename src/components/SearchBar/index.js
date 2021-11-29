import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBar = ({ search, setSearch }) => (
  <View style={styles.searchBar}>
    <TextInput
      style={styles.textInput}
      placeholder="Search"
      value={search}
      onChangeText={(value) => setSearch(value)}
    />
  </View>
);

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
