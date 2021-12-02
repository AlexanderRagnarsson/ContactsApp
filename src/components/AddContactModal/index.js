import React, { useState } from 'react';
import {
  View, TextInput, Button, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import PhotoSelection from '../PhotoSelection';
import styles from './styles';

const AddContactModal = ({
  isOpen, closeModal, submit,
}) => {
  const [inputs, setInputs] = useState({ name: '', phoneNumber: '', photo: 'https://www.visir.is/dre/i/626D3E86D782116CB6CCF3C7888AD4A6BBD628869566F01F2838579A13A4CFAE.jpg' });
  const [valid, setValid] = useState({
    name: inputs.name !== '', phoneNumber: inputs.phoneNumber !== '', photo: inputs.photo !== '',
  });
  const inputHandler = (name, value) => {
    setInputs({ ...inputs, [name]: value });
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

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add a new contact"
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

AddContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default AddContactModal;
