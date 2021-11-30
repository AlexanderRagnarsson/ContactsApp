import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Text, View, Animated, TouchableHighlight,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';
import callNumber from '../../services/phonecalls';
import EditButton from '../EditButton';
import EditContactModal from '../EditContactModal';

const Contact = ({
  name, phoneNumber, photo,
}) => {
  // Is the modal to add a new contact open
  const [editModalOpen, setEditModalOpen] = useState(false);

  const dispatch = useDispatch();

  const editSubmit = async (newContact) => {
    dispatch({ type: 'EDIT_CONTACT', payload: newContact });
  };

  return (
    <View style={styles.view}>
      {/* <View>
        <Text style={styles.Text}>{id}</Text>
      </View> */}
      <Animated.Image
        style={styles.photo}
        source={{ uri: photo }}
      />
      <EditButton
        onAdd={() => setEditModalOpen(true)}
        addString="Edit Contact"
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
      <EditContactModal
        contact={{
          name, phoneNumber, photo,
        }}
        isOpen={editModalOpen}
        closeModal={() => setEditModalOpen(false)}
        title="Edit the Contact"
        submit={editSubmit}
      />
    </View>
  );
};

Contact.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Contact;
