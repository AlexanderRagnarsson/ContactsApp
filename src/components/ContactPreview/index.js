import React from 'react';
// import { useSelector } from 'react-redux';
import {
  View, Text, Animated, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ContactPreview = ({
  id, name, phoneNumber, photo, navigate,
}) => (
  <View style={styles.PreviewView}>
    <TouchableHighlight
      style={styles.touchable}
      onPress={() => navigate('ContactDetails', {
        id, name, phoneNumber, photo,
      })}
    >
      <View>
        <Animated.Image
          style={styles.photo}
          source={{ uri: photo }}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

ContactPreview.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default ContactPreview;
