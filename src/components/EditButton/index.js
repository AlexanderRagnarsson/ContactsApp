import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const EditButton = ({ onAdd, addString }) => (
  <TouchableHighlight
    style={styles.touchableHighlight}
    onPress={() => onAdd()}
  >
    <View style={styles.container}>
      <Text style={styles.text}>
        {addString}
      </Text>
      <AntDesign name="edit" size={30} color="black" />
    </View>
  </TouchableHighlight>
);

EditButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
  addString: PropTypes.string.isRequired,
};

export default EditButton;
