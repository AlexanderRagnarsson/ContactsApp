import { addContact, editContact } from '../../services/fileserf';

function Reducer(state, action) {
  if (state === undefined) {
    return { contacts: [], currentContacts: [] };
  }
  switch (action.type) {
    case 'ADD_CONTACT':
      Promise.resolve(addContact(action.payload));
      console.log('action.payload Add:   ', action.payload);
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'ADD_CONTACTS_FROM_DATABSE':
      return { ...state, contacts: [...state.contacts, ...action.payload] };
    case 'EDIT_CONTACT':
      Promise.resolve(editContact(action.payload));
      console.log('action.payload Edit:   ', action.payload);
      return {
        ...state,
        contacts: state.contacts.map((contact) => (
          contact.id === action.payload.id ? action.payload : contact)),
      };
    default:
      return state;
  }
}

export default Reducer;
