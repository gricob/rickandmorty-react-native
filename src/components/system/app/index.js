import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { Characters, Character, CharactersAdd } from '../../pages';
import { Provider } from 'react-redux';
import store from '../../../config/redux';


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene 
            key="home"
            component={Characters}
            title="Characters"
            rightTitle="Add"
            onRight={() => Actions.push('charactersAdd')}
          />
          <Scene 
            key="charactersAdd"
            component={CharactersAdd}
            title="Add character"
          />
          <Scene key="character" component={Character} />
        </Stack>
      </Router>
    </Provider>
  );
};

export default App;
