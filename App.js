import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import store from './src/redux/store';
import LoginPage from './src/components/LoginPage';

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
        <View style={{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
            <LoginPage />
        </View>
      </Provider>
  );
};

export default App;
