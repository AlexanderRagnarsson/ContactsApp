import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import PhotoSelection from '../PhotoSelection';

const ContactEditModal = ({
  contact,
  isOpen,
  closeModal,
  submit,
}) => {
  let setContact = contact;

  if (setContact.id !== undefined) {
    const { contacts } = useSelector((state) => state);
    [setContact] = contacts.filter((listIt) => listIt.id === setContact.id);
    // if (setContact.name === undefined) {
    //   setContact.name = '';
    // }
  }

  const [inputs, setInputs] = useState(setContact);
  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInputs = () => {
    inputs.name = setContact.name;
    inputs.phoneNumber = setContact.phoneNumber;
    inputs.photo = setContact.photo;
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => { closeModal(); clearInputs(); }}
      title="Edit the board"
    >
      <TextInput
        styles={styles.textInput}
        placeholder="Enter the name of the contact"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <TextInput
        styles={styles.textInput}
        placeholder="Enter the contact's phone number"
        value={inputs.description}
        onChangeText={(text) => inputHandler('phoneNumber', text)}
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

ContactEditModal.propTypes = {
  // The board the we are currently editing
  contact: PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  // Is the modal open or not
  isOpen: PropTypes.bool.isRequired,
  // Function to close the modal
  closeModal: PropTypes.func.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
};

export default ContactEditModal;
