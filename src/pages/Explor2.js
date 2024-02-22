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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Explor2 extends React.Component {
  constructor() {
    super();
    this.state = {
      dark: false,

      data: [
        {
          TypeText: 'From Quran',
          type: false,
        },

        {
          TypeText: 'From Hadith',
          type: false,
        },
      ],
    };
  }

  changemode() {
    let mode = this.state.dark;
    this.setState({dark: !mode});
  }

  DataType(index) {
    let info = this.state.type;
    for (let i = 0; i < info.length; i++) {
      info[index].COLOR = !info[index].COLOR;
    }
    this.setState({type: !info});
  }

  render() {
    return (
      <>
        <View
          style={{
            height: '8%',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              paddingHorizontal: 10,
              backgroundColor: this.state.dark ? '#000' : '#fff',
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
        </View>
        <View
          style={{
            height: '7%',
            backgroundColor: this.state.dark ? '#000' : '#fff',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: this.state.dark ? '#fff' : '#000',
              fontWeight: '500',
              marginLeft: 10,
            }}>
            Fasting
          </Text>
          <View
            style={{
              height: 2,
              width: 100,
              borderRadius: 10,
              backgroundColor: this.state.dark ? '#fff' : '#000',
              marginLeft: 10,
              marginTop: 10,
            }}></View>
        </View>
        <View
          style={{
            height: '85%',
            backgroundColor: this.state.dark ? '#fff' : '#000',
          }}>
          <View
            style={{
              height: '8%',
              width: '95%',
              borderRadius: 20,
              backgroundColor: '#999',
              alignSelf: 'center',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {this.state.data.map(item => (
              <TouchableOpacity
                style={{
                  height: '75%',
                  width: '45%',
                  borderRadius: 20,
                  backgroundColor: '#D7C0CB',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: this.state.dark ? '#000' : '#fff',
                  }}>
                  {item.TypeText}
                </Text>
              </TouchableOpacity>
            ))}
            {/** <TouchableOpacity
              style={{
                height: '75%',
                width: '45%',
                borderRadius: 20,
                backgroundColor: '#D7C0CB',
                justifyContent: 'center',
                alignItems: 'center',
              }} 
              
              >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: this.state.dark ? '#000' : '#fff',
                }}>
                From Hadith
              </Text>
            </TouchableOpacity>*/}
          </View>
        </View>
      </>
    );
  }
}
const style = StyleSheet.create({});
