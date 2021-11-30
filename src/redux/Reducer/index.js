import { addContact } from '../../services/fileserf';

function Reducer(state, action) {
  if (state === undefined) {
    return { contacts: [], currentContacts: [] };
  }
  switch (action.type) {
    case 'ADD_CONTACT':
      Promise.resolve(addContact(action.payload));
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'ADD_CONTACTS_FROM_DATABSE':
      return { ...state, contacts: [...state.contacts, ...action.payload] };
    default:
      return state;
  }
}

export default Reducer;
