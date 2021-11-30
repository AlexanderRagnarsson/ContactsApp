// import * as FileSystem from 'expo-file-system';
import data from '../../resources/data.json';
// import { getAllContacts, addContact } from '../../services/fileserf';

// const dire = getAllContacts();
// const add = addContact('danni-2.json');
// const newDire = getAllContacts();

// console.log(dire);
// console.log(add);
// console.log(newDire);
// eslint-disable-next-line default-param-last
function Reducer(state, action) {
  if (state === undefined) {
    return {
      ...data,
      search: '',
      addModalOpen: false,
    };
  }
  switch (action.type) {
    case 'SET_CURRENT_CONTACTS':
      return { ...state, currentContacts: action.payload };
    case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) => (
          contact.id === action.payload.id ? action.payload : contact)),
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'SET_ADD_MODAL_OPEN':
      return { ...state, addModalOpen: action.payload };
    default:
      return state;
  }
}

export default Reducer;
