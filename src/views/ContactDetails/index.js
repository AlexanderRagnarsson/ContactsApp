import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Contact from '../../components/Contact';

const ContactDetails = ({ route }) => {
  const {
    id, name, phoneNumber, photo,
  } = route.params;
  console.log(id);

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
