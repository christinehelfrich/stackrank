import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRegistry } from 'react-native';
import MainNavPage from './components/pages/MainNavPage';


export default function App() {

  return (
    <Provider store={store}>
      <MainNavPage></MainNavPage>
    </Provider>
  );

}

AppRegistry.registerComponent('stackrank', () => App);

