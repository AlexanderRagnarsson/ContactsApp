import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Contact from '../../components/Contact';

const ContactDetails = ({ route }) => {
  const { id } = route.params;
  const {
    contacts,
  } = useSelector((state) => state);

  const { name, phoneNumber, photo } = contacts.filter((contact) => contact.id === id)[0];
  // console.log(id);

  return (
    <View>
      <Contact {...{
        id, name, phoneNumber, photo,
      }}
      />
    </View>
  );
};

ContactDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ContactDetails;
