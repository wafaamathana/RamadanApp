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

export default class Redo extends React.Component {
  constructor() {
    super();
    this.state = {
      array: [
        {
          name: 'allah',
          star: true,
        },
        {
          name: 'allah',
          star: true,
        },
        {
          name: 'allah',
          star: true,
        },
        {
          name: 'allah',
          star: true,
        },
        {
          name: 'allah',
          star: true,
        },
        {
          name: 'allah',
          star: true,
        },
        {
          name: 'allah',
          star: true,
        },
        {
          name: 'allah',
          star: true,
        },
        {
          name: 'allah',
          star: true,
        },
      ],
    };
  }

  /*change(index) {
    let Edit = this.state.array;
    for (let i = 0; i < Edit.length; i++) {
      Edit[index].star = !Edit[index].star;
    }
    this.setState({star: Edit});
  }*/

  render() {
    return (
      <>
        <ImageBackground
          source={require('../imgs/Mosque.jpg')}
          style={{flex: 1, padding: 10}}>
          <View style={style.LargeView}>
            <Text style={{fontSize: 20, fontWeight: '900', color: '#000'}}>
              اسماء الله الحسنى
            </Text>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#000'}}>
              99 Names
            </Text>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
              عن ابى هريره ,رواية قال "لله تسعه وتسعون اسماء مائه الا واحدا, لا
              يحفظها احد الا دخل الجنه ,وهو وتر يحب الوتر
            </Text>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#000'}}>
              صحيح البخاري 6410, صحيح مسلم 2677
            </Text>
          </View>
          <View style={style.NamesView}>
            <ScrollView>
              <View>
                {this.state.array.map((item, index) => (
                  <View
                    style={{
                      flexDirection: 'row',

                      backgroundColor: '#999',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      borderRadius: 10,
                      padding: 10,
                      marginVertical: 10,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#000',

                          fontWeight: '800',
                        }}>
                        الله Allah
                      </Text>

                      <Text style={{fontSize: 20, color: '#000'}}>
                        Allah,God ,One God
                      </Text>
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontSize: 20, color: '#000'}}>
                        {index + 1}
                      </Text>
                    </View>
                  </View>
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
  LargeView: {
    height: '30%',
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  NamesView: {
    height: '70%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
  },
});
