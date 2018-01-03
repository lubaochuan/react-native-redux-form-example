import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';

import MyComponent from './src/components/MyComponent';
import store from './src/redux/store';

export default function main() {
  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
}
