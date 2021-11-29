import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Modal = ({
  isOpen,
  closeModal,
  title,
  children,
}) => (
  <NativeModal
    isVisible={isOpen}
    hasBackdrop
    onBackButtonPress={closeModal}
    onBackdropPress={closeModal}
    style={styles.modal}
  >
    <View style={styles.body}>
      <Text style={styles.title}>{title}</Text>
      {children}
      <Button
        title="Cancel"
        onPress={() => { closeModal(); }}
      />
    </View>
  </NativeModal>
);

Modal.propTypes = {
  // Is the modal open
  isOpen: PropTypes.bool.isRequired,
  // Function called when modal is open
  closeModal: PropTypes.func.isRequired,
  // Title of the modal
  title: PropTypes.string.isRequired,
  // JSX children
  children: PropTypes.node.isRequired,
};

export default Modal;
