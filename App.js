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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import Doua from './src/pages/Doua';
export default class App extends React.Component {
  render() {
    return (
      <>
        <Doua />
      </>
    );
  }
}
const style = StyleSheet.create({});
