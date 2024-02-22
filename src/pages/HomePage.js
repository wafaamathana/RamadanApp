import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          icon: 'hands-pray',
          name: 'Doua',
        },
        {
          icon: 'text-search',
          name: 'Explor',
        },
        {
          icon: 'hands-pray',
          name: 'Doua',
        },
        {
          icon: 'hands-pray',
          name: 'Doua',
        },
        {
          icon: 'hands-pray',
          name: 'Doua',
        },
        {
          icon: 'hands-pray',
          name: 'Doua',
        },
      ],
    };
  }

  function() {
    let info = this.state.data;
    this.setState({data: info});
  }
  render() {
    return (
      <>
        <ImageBackground
          source={require('../imgs/back.jpg')}
          style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              height: '60%',
              width: '100%',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,

              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {this.state.data.map(Component => (
              <View
                style={{
                  height: '25%',
                  width: '40%',
                  borderRadius: 25,
                  backgroundColor: '#fff',
                  margin: 5,
                  marginTop: 15,
                }}>
                <TouchableOpacity
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 25,
                    backgroundColor: '#000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15,
                  }}>
                  <MaterialCommunityIcons
                    name={Component.icon}
                    size={80}
                    color={'#fff'}
                  />
                  <Text
                    style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>
                    {Component.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ImageBackground>
      </>
    );
  }
}
const style = StyleSheet.create({});
