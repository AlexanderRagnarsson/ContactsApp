import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import PhotoSelection from '../PhotoSelection';
import styles from './styles';

const AddContactModal = ({
  isOpen, closeModal, submit,
}) => {
  const [inputs, setInputs] = useState({ name: '', phoneNumber: '', photo: 'https://www.visir.is/dre/i/626D3E86D782116CB6CCF3C7888AD4A6BBD628869566F01F2838579A13A4CFAE.jpg' });
  const inputHandler = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add a new contact"
    >
      <TextInput
        styles={styles.textInput}
        placeholder="Enter name"
        value={inputs.name}
        onChangeText={(textInput) => inputHandler('name', textInput)}
      />
      <TextInput
        styles={styles.textInput}
        placeholder="Enter a phone number"
        value={inputs.phoneNumber}
        onChangeText={(textInput) => inputHandler('phoneNumber', textInput)}
      />
      <PhotoSelection
        value={inputs.photo}
        onChange={(value) => { inputHandler('photo', value); }}
      />
      <Button
        title="Submit"
        onPress={() => {
          submit(inputs);
          closeModal();
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
