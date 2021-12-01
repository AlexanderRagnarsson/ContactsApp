import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';
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
  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
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
