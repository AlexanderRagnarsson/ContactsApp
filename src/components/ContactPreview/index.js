import React from 'react';
// import { useSelector } from 'react-redux';
import { View, Text, Animated, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ContactPreview = ({ name, photo }) => (
  <View style={styles.PreviewView}>
    {/* <TouchableHighlight style={styles.touchable}> */}
    <Animated.Image
      style={styles.photo}
      source={photo}
    />
    <Text style={styles.name}>{name}</Text>
  </View>
);

ContactPreview.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default ContactPreview;
