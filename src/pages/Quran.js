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
  Linking,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Quran extends React.Component {
  constructor() {
    super();
    this.state = {
      QuranPage: [
        {
          name: 'الفاتحه ',
          Type: 'مكية',
          link: 'https://hemanthkollanur.medium.com/understanding-react-native-linking-d794e56cde10',
        },
        {
          name: 'البقره',
          Type: 'مدنية',
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },

        {
          name: 'آل عمران',
          Type: 'مدنية',
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },
        {
          name: ' النساء',
          Type: 'مدنية',
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },
      ],
    };
  }
  functionQuran(index) {
    let info = this.state.QuranPage;
    this.setState({QuranPage: info});
  }
  render() {
    return (
      <>
        <ImageBackground
          source={require('../backgrounds/yy.jpg')}
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
              <AntDesign name="arrowleft" size={30} color="#4f5051" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '800',
                color: '#4f5051',
              }}>
              القرآن الكريم
            </Text>
            <TouchableOpacity>
              <Entypo name="moon" size={25} color={'#4f5051'} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              //height: 900,

              alignItems: 'center',
              padding: 20,
            }}>
            <ScrollView>
              {this.state.data.map((item, index) => (
                <TouchableOpacity
                  style={{
                    height: '10%',
                    width: '100%',
                    borderRadius: 20,
                    backgroundColor: '#c0bab8',
                    marginBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    alignSelf: 'center',
                  }}
                  onPress={() => {
                    Linking.openURL(item.link);
                  }}>
                  <Text
                    style={{fontSize: 22, color: '#4f5051', fontWeight: '800'}}>
                    {item.Type}
                  </Text>

                  <Text
                    style={{
                      fontSize: 20,
                      color: '#4f5051',
                      fontWeight: '800',
                    }}>
                    {item.name}
                  </Text>

                  <View
                    style={{
                      height: '41%',
                      width: '10%',
                      borderRadius: 25,
                      backgroundColor: '#fff',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#4f5051',
                        fontWeight: '800',
                      }}>
                      {index + 1}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ImageBackground>
      </>
    );
  }
}
const style = StyleSheet.create({});
