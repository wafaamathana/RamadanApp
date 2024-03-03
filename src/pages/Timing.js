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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class Timing extends React.Component {
  constructor() {
    super();
    this.state = {
      dark: false,
      ExplorBox: [
        {
          ExplorText: 'القاهره',
        },
        {
          ExplorText: 'الاسكندريه',
        },
        {
          ExplorText: 'مطروح',
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

  functionRamadan() {
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
              ? require('../backgrounds/yy.jpg')
              : require('../backgrounds/yy.jpg')
          }
          style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',

              width: '100%',

              paddingVertical: 10,
            }}>
            <TouchableOpacity>
              <AntDesign
                name="arrowleft"
                size={30}
                color={this.state.dark ? '#000' : '#4f5051'}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '800',
                color: this.state.dark ? '#000' : '#4f5051',
              }}>
              امساكية رَمَضانُ
            </Text>
            <TouchableOpacity onPress={() => this.changemode()}>
              {this.state.dark ? (
                <Entypo name="moon" size={25} color={'#4f5051'} />
              ) : (
                <FontAwesome name="sun-o" size={20} color={'#4f5051'} />
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: 700,
              width: '100%',
            }}>
            <View>
              <TextInput
                style={{
                  height: 50,
                  width: 280,
                  borderRadius: 25,
                  backgroundColor: this.state.dark ? '#928575' : '#c0bab8',
                  margin: 10,
                }}
                placeholder="    Get Answer From Quran And Hadith      "
                placeholderTextColor={'#fff'}></TextInput>
            </View>
            <ScrollView>
              <View
                style={{
                  height: '100%',
                  width: '100%',

                  padding: 10,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',

                  borderRadius: 25,
                  paddingVertical: 20,
                }}>
                {this.state.ExplorBox.map(data => (
                  <TouchableOpacity
                    style={{
                      height: '7%',
                      width: '48%',
                      borderRadius: 20,
                      backgroundColor: this.state.dark ? '#928575' : '#c0bab8',
                      marginBottom: 10,
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: '700',
                        color: this.state.dark ? '#fff' : '#fff',
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
