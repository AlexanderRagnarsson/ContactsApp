import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from '../../routes';
import RootReducer from '../Reducer';

function ReduxProvider() {
  const store = createStore(RootReducer);
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default ReduxProvider;
