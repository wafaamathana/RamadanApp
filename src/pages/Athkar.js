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

export default class Athkar extends React.Component {
  constructor() {
    super();
    this.state = {
      array2: [
        {
          name1: 'اذكار الصباح',

          chevron: true,
        },
        {
          name1: 'اذكار المساء',

          chevron: true,
        },

        {
          name1: 'قبل النوم',

          chevron: true,
        },

        {
          name1: 'الاستيقاظ',

          chevron: true,
        },
        {
          name1: 'بعد الصلاة',

          chevron: true,
        },
        {
          name1: 'عند سماع الآذان',

          chevron: true,
        },
        {
          name1: 'قبل النوم',

          chevron: true,
        },

        {
          name1: 'الاستيقاظ',

          chevron: true,
        },
        {
          name1: 'بعد الصلاة',

          chevron: true,
        },
        {
          name1: 'عند سماع الآذان',

          chevron: true,
        },
        {
          name1: 'قبل النوم',

          chevron: true,
        },

        {
          name1: 'الاستيقاظ',

          chevron: true,
        },
        {
          name1: 'بعد الصلاة',

          chevron: true,
        },
        {
          name1: 'عند سماع الآذان',

          chevron: true,
        },
      ],
    };
  }

  changeAthkar(index) {
    let Edit = this.state.array2;
    for (let i = 0; i < Edit.length; i++) {
      Edit[i].chevron = true;
    }
    Edit[index].chevron = false;
    this.setState({star: Edit});
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
              alignSelf: 'center',
              width: '90%',
              backgroundColor: '#66605E',
              borderRadius: 25,
              paddingVertical: 10,
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
            <View
              style={{
                height: '100%',
                width: '55%',

                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '800',
                  color: '#fff',
                  marginHorizontal: 20,
                }}>
                الأذكار
              </Text>
            </View>
          </View>

          <View style={style.NamesView3}>
            <ScrollView>
              <View>
                {this.state.array2.map((item, index) => (
                  <>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',

                        backgroundColor: '#B6B0AE',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        borderBottomRightRadius: 30,
                        borderTopLeftRadius: 30,
                        borderRadius: 5,
                        padding: 15,
                        marginVertical: 3,
                      }}
                      onPress={() => {
                        this.changeAthkar(index);
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#fff',
                          fontWeight: '800',
                        }}>
                        {item.name1}
                      </Text>
                    </TouchableOpacity>
                    {item.chevron ? null : (
                      <View>
                        <View
                          style={{
                            width: '100%',
                            borderRadius: 20,
                            backgroundColor: '#989290',
                            alignItems: 'center',
                            padding: 20,
                            marginBottom: 3,
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: '600',
                              color: '#fff',
                            }}>
                            {item.Doua1}
                          </Text>
                        </View>
                        <View
                          style={{
                            //width: '100%',
                            borderRadius: 20,
                            backgroundColor: '#989290',
                            alignItems: 'center',
                            padding: 20,
                            marginBottom: 5,
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: '600',
                              color: '#fff',
                            }}>
                            {item.Doua2}
                          </Text>
                        </View>
                      </View>
                    )}
                  </>
                ))}
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </>
    );
  }
}
const style = StyleSheet.create({
  LargeView1: {
    height: '30%',
    width: '100%',
    backgroundColor: '#a29c9a',
    marginBottom: 10,
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  NamesView3: {
    height: '92%',
    width: '100%',
    borderRadius: 15,
    padding: 15,
  },
});
