import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Characters } from '../../pages';
import { Provider } from 'react-redux';
import store from '../../../config/redux';


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="home" component={Characters} title={'Characters'}/>
        </Stack>
      </Router>
    </Provider>
  );
};

export default App;
