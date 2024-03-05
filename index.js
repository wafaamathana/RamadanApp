/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import RTLWrapper from './RTLWrapper';
import {name as appName} from './app.json';
const RootComponent = () => (
  <RTLWrapper>
    <App />
  </RTLWrapper>
);

AppRegistry.registerComponent(appName, () => RootComponent);
