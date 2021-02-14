import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Login</Text>
    </View>
  );
};

export default App;
