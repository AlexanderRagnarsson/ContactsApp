import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const AddButton = ({ onAdd, addString }) => (
  <View style={styles.view}>
    <TouchableHighlight
      style={styles.touchableHighlight}
      onPress={onAdd}
    >
      <View>
        <Text style={styles.text}>
          {addString}
        </Text>
        <Text style={styles.plus}>
          <AntDesign name="plus" size={30} color="black" />
        </Text>
      </View>
    </TouchableHighlight>
  </View>
);

AddButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
  addString: PropTypes.string.isRequired,
};

export default AddButton;
