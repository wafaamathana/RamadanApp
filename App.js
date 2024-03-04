import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import Start_page from './src/pages/Start_page';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Start_page />
      </>
    );
  }
}
const style = StyleSheet.create({});
