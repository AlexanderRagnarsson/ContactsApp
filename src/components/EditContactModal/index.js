import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import PhotoSelection from '../PhotoSelection';
import styles from './styles';

const EditContactModal = ({
  contact, isOpen, closeModal, submit, title,
}) => {
  let setcontact = contact;

  if (setcontact.id !== undefined) {
    const { contacts } = useSelector((state) => state);
    [setcontact] = contacts.filter((contactsId) => contactsId.id === setcontact.id);
    if (setcontact.phoneNumber === undefined) {
      setcontact.phoneNumber = '';
    }
  }

  const [inputs, setInputs] = useState(setcontact);
  const [valid, setValid] = useState({
    name: inputs.name !== '', phoneNumber: inputs.phoneNumber !== '', photo: inputs.photo !== '',
  });
  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const validationHandler = (name, value) => {
    setValid({ ...inputs, [name]: value !== '' });
  };
  const validateSubmit = () => {
    if (valid.name && valid.phoneNumber && valid.photo) {
      submit(inputs);
      closeModal();
    }
  };

  const clearInputs = () => {
    inputs.name = setcontact.name;
    inputs.phoneNumber = setcontact.phoneNumber;
    inputs.photo = setcontact.photo;
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => { closeModal(); clearInputs(); }}
      title={title}
    >
      <View>
        <TextInput
          styles={styles.textInput}
          placeholder="Enter name"
          value={inputs.name}
          onChangeText={(textInput) => {
            inputHandler('name', textInput);
            validationHandler('name', textInput);
          }}
        />
        <Text style={styles.text}>
          {valid.name ? null : 'Please enter a name'}
        </Text>
      </View>
      <View>
        <TextInput
          styles={styles.textInput}
          placeholder="Enter a phone number"
          value={inputs.phoneNumber}
          onChangeText={(textInput) => {
            inputHandler('phoneNumber', textInput);
            validationHandler('phoneNumber', textInput);
          }}
        />
        <Text style={styles.text}>
          {valid.phoneNumber ? null : 'Please enter a phone number'}
        </Text>
      </View>
      <View>
        <PhotoSelection
          value={inputs.photo}
          onChange={(value) => {
            inputHandler('photo', value);
            validationHandler('photo', value);
          }}
        />
        <Text style={styles.text}>
          {valid.photo ? null : 'Please select a photo'}
        </Text>
      </View>
      <Button
        title="Submit"
        onPress={() => {
          validateSubmit();
        }}
      />
    </Modal>
  );
};

EditContactModal.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default EditContactModal;
