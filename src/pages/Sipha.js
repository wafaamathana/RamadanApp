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
  I18nManager
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Sipha extends React.Component {
  
  constructor() {
    super();
    this.state = {
      count: 0,
      Text1: 'لا اله الا الله',
    };
  }
  plus() {
    let Value = this.state.count;
    let NewValue = Value + 1;
    if (NewValue == 100) {
      NewValue = 0;
    }

    this.setState({count: NewValue});
  }
  Reset() {
    let value = this.state.count;
    if (value > 0) {
      this.setState({count: 0, Text1: 'لا اله الا الله'});
    }
  }
  ChangeText() {
    let Value = this.state.count;
    let NewText = this.state.Text1;

    if (Value < 33) {
      NewText = 'الحمد لله';
    } else if (Value < 66) {
      NewText = 'سبحان الله';
    } else if (Value > 65 && Value <= 99) {
      NewText = 'الله اكبر';
    } else if (Value == 0) {
      NewText = 'لا اله الا الله';
    }
    this.setState({Text1: NewText});
  }

  render() {
    return (
      <>
        <ImageBackground
          source={require('../imgs/Mosque.jpg')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={[style.view1, {height: '30%', padding: 10}]}>
            <View
              style={{
                height: '100%',
                width: '90%',
                backgroundColor: '#000',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, color: '#fff'}}>
                {this.state.Text1}
              </Text>
            </View>
          </View>
          <View style={style.view1}>
            <View
              style={{
                height: '50%',
                width: '30%',
                backgroundColor: '#000',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, color: '#fff'}}>
                {this.state.count}/99
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: '50%',
                width: '30%',
                backgroundColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
              }}
              onPress={() => {
                this.Reset();
              }}>
              <Text style={{fontSize: 20, color: '#fff'}}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View style={style.view1}>
            <TouchableOpacity
              style={{
                height: '85%',
                width: '35%',
                backgroundColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 70,
              }}
              onPress={() => {
                this.plus();
                this.ChangeText();
              }}>
              <Text style={{fontSize: 25, fontWeight: '600', color: '#fff'}}>
                ابدأ
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </>
    );
  }
}
const style = StyleSheet.create({
  view1: {
    height: '20%',
    width: '100%',
    // backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
});
