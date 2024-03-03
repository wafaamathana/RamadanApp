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

export default class Names extends React.Component {
  constructor() {
    super();
    this.state = {
      array: [
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          name2: ' Allah,God ,One God',
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
          source={require('../backgrounds/yy.jpg')}
          style={{flex: 1, padding: 10}}>
          <View style={style.LargeView2}>
            <Text style={{fontSize: 20, fontWeight: '900', color: '#fff'}}>
              اسماء الله الحسنى
            </Text>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#fff'}}>
              99 Names
            </Text>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>
              عن ابى هريره ,رواية قال "لله تسعه وتسعون اسماء مائه الا واحدا, لا
              يحفظها احد الا دخل الجنه ,وهو وتر يحب الوتر
            </Text>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#fff'}}>
              صحيح البخاري 6410, صحيح مسلم 2677
            </Text>
          </View>
          <View style={style.NamesView2}>
            <ScrollView>
              <View>
                {this.state.array.map((item, index) => (
                  <View
                    style={{
                      flexDirection: 'row',

                      backgroundColor: '#c0bab8',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      borderTopRightRadius: 35,
                      borderBottomLeftRadius: 35,
                      padding: 10,
                      marginVertical: 3,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#fff',
                          fontWeight: '800',
                        }}>
                        {item.name}
                      </Text>

                      <Text style={{fontSize: 20, color: '#fff'}}>
                        {item.name2}
                      </Text>
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontSize: 20, color: '#fff'}}>
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
  LargeView2: {
    height: '30%',
    width: '100%',
    backgroundColor: '#a29c9a',
    marginBottom: 10,
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  NamesView2: {
    height: '70%',
    width: '100%',
    //backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
  },
});
