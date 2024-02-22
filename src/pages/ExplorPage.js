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

export default class ExplorPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dark: false,
      ExplorBox: [
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
        {
          ExplorText: 'Children',
        },
      ],
    };
  }

  function() {
    let Explor = this.state.ExplorBox;
    this.setState({ExplorBox: !Explor});
  }

  changemode() {
    let mode = this.state.dark;
    this.setState({dark: !mode});
  }

  render() {
    return (
      <>
        <ImageBackground
          source={
            this.state.dark
              ? require('../imgs/dark.jpg')
              : require('../imgs/back.jpg')
          }
          style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',

              width: '100%',
              backgroundColor: this.state.dark ? '#000' : '#fff',
              paddingVertical: 10,
            }}>
            <TouchableOpacity>
              <AntDesign
                name="arrowleft"
                size={30}
                color={this.state.dark ? '#fff' : '#000'}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: this.state.dark ? '#fff' : '#000',
              }}>
              Explor By Topic
            </Text>
            <TouchableOpacity onPress={() => this.changemode()}>
              <Entypo
                name="moon"
                size={25}
                color={this.state.dark ? '#fff' : '#000'}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: 700,
              width: '100%',
              backgroundColor: '#9998',
            }}>
            <View>
              <TextInput
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 25,
                  backgroundColor: this.state.dark ? '#B07984' : '#E2C9FF',
                }}
                placeholder="Get Answer From Quran And Hadith"></TextInput>
            </View>
            <ScrollView>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: this.state.dark ? '#FFCAD5' : '#C9E6FF',
                  padding: 10,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  alignItems: 'flex-start',
                }}>
                {this.state.ExplorBox.map(data => (
                  <TouchableOpacity
                    style={{
                      height: '10%',
                      width: '47%',
                      borderRadius: 20,
                      backgroundColor: this.state.dark ? '#000' : '#fff',
                      marginBottom: 10,
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={require('../imgs/icon.jpg')}
                      style={{
                        height: 50,
                        width: 50,
                        resizeMode: 'contain',
                        borderRadius: 10,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: this.state.dark ? '#fff' : '#000',
                      }}>
                      {data.ExplorText}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </>
    );
  }
}
const style = StyleSheet.create({});
