import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const AddButton = ({ onAdd, addString }) => (
  <TouchableHighlight
    style={styles.touchableHighlight}
    onPress={() => onAdd()}
  >
    <View style={styles.container}>
      <Text style={styles.text}>
        {addString}
      </Text>
      <Text>
        <MaterialCommunityIcons name="account-plus" size={30} color="black" />
      </Text>
    </View>
  </TouchableHighlight>
);

AddButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
  addString: PropTypes.string.isRequired,
};

export default AddButton;
