import data from '../../resources/data.json';
import fileserf from '../../resources/fileserf';

// eslint-disable-next-line default-param-last
function Reducer(state, action) {
  if (state === undefined) {
    return {
      ...data,
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
