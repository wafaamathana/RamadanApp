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

export default class Alert extends React.Component {
  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 10,
          }}>
          <View
            style={{
              height: '60%',
              width: '100%',
              backgroundColor: '#B6B0AE',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderRadius: 35,
              padding: 10,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: 10,
                }}>
                لا إلَه إلَّا اللهُ وحدَه لا شَريكَ له، له المُلكُ وله الحمدُ
                يُحيِي ويُميتُ وهو على كلِّ شيءٍ قديرٌ.
              </Text>
              <View
                style={{
                  borderRadius: 5,
                  // borderRightColor: '#fff',
                  height: 1.5,
                  width: 200,
                  backgroundColor: '#fff',
                }}></View>
              <Text style={{fontSize: 25, fontWeight: '600', color: '#fff'}}>
                غُفرت خطاياك وإن كانت مثل زبد البحر بإذن الله.
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: '20%',
                width: '40%',
                backgroundColor: '#636465',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 25, fontWeight: '900', color: '#fff'}}>
                حسنًا
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
const style = StyleSheet.create({});
