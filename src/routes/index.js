import React from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from '../views/Contacts';
import ContactDetails from '../views/ContactDetails';
import { getAllContacts } from '../services/fileserf';

const Stack = createStackNavigator();

const Routes = () => {
  const dispatch = useDispatch();
  Promise.resolve(getAllContacts()).then((contacts) => {
    dispatch({ type: 'ADD_CONTACTS_FROM_DATABSE', payload: contacts.map((contact) => contact.file) });
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
