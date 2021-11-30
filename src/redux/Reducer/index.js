import data from '../../resources/data.json';
import { getAllContacts, addContact } from '../../services/fileserf';

const dire = getAllContacts();

console.log(dire);
console.log(data);
// eslint-disable-next-line default-param-last
function Reducer(state, action) {
  if (state === undefined) {
    return {
      ...dire,
      search: '',
      addModalOpen: false,
    };
  }
  switch (action.type) {
    case 'SET_CURRENT_CONTACTS':
      return { ...state, currentContacts: action.payload };
    case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
        // currentContacts: [...(state.contacts.filter(
        //   (contact) => contact.name.includes(action.payload),
        // ))],
      };
    case 'SET_ADD_MODAL_OPEN':
      return { ...state, addModalOpen: action.payload };
    default:
      return state;
  }
}

export default Reducer;
