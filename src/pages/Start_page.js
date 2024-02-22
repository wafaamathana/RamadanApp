import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class Start_page extends React.Component {
  render() {
    return (
      <>
        <View style={style.background}>
          <View style={style.salam}>
            <Text style={{fontSize: 50, color: '#000', fontWeight: '600'}}>
              السَلآْم عَلْيُكّمٌ
            </Text>
          </View>
          <View style={style.Logo}></View>
          <View style={style.name}>
            <Text style={{fontSize: 25, color: '#000', paddingBottom: 10}}>
              app name
            </Text>
            <Text style={{fontSize: 25, color: '#000'}}>app name</Text>
          </View>
          <TouchableOpacity
            style={{
              height: '8%',
              width: '50%',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#997',
              padding: 10,
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 20, color: '#000'}}>Get started</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
const style = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  salam: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '15%',
  },
  name: {
    alignItems: 'center',
    justifyContent: 'center',

    margin: '3%',
  },
  Logo: {
    height: '55%',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
