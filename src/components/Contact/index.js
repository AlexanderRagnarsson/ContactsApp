import React from 'react';
import {
  Text, View, Animated, TouchableHighlight,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';
import callNumber from '../../services/phonecalls';

const Contact = ({
  id, name, phoneNumber, photo,
}) => (
  <View style={styles.view}>
    {/* <View>
      <Text style={styles.Text}>{id}</Text>
    </View> */}
    <Animated.Image
      style={styles.photo}
      source={{ uri: photo }}
    />
    <View style={styles.nameView}>
      <Text style={styles.nameText}>{name}</Text>
    </View>
    <TouchableHighlight
      style={styles.phoneNumberView}
      onPress={() => callNumber(`${phoneNumber}`)}
    >
      <View style={styles.iconNumber}>
        <AntDesign name="phone" size={60} color="black" />
        <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.phoneNumberView}
    >
      <View style={styles.iconNumber}>
        <AntDesign name="edit" size={60} color="black" />
        <Text style={styles.editText}>Edit contact</Text>
      </View>
    </TouchableHighlight>
  </View>
);

Contact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Contact;
