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
    };
  }
  switch (action.type) {
    case 'UPDATE_CURRENT_CONTACTS':
      return { ...state, currentContacts: action.payload };
    case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'UPDATE_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export default Reducer;
