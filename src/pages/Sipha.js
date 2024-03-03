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
  Modal,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Sipha extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      Text1: 'لا اله الا الله',
      modalinsidesipha: true,
    };
  }
  plus() {
    let Value = this.state.count;
    let NewValue = Value + 1;
    this.setState({count: NewValue});
    if (NewValue == 100) {
      this.setState({count: 0, modalinsidesipha: true});
    }
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
      NewText = ['الحمد لله'];
    } else if (Value < 66) {
      NewText = ['سبحان الله'];
    } else if (Value > 65 && Value < 99) {
      NewText = ['الله اكبر'];
    } else {
      NewText = ['لا اله الا الله'];
    }

    this.setState({Text1: NewText});
  }
  functionSipha(index) {
    let info = this.state.data;
    this.setState({data: info});
  }

  render() {
    return (
      <>
        <ImageBackground
          source={require('../backgrounds/yy.jpg')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
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
              التسبيحات
            </Text>
            <TouchableOpacity>
              <Entypo name="moon" size={25} color={'#4f5051'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '15%',
              width: '80%',
              //marginLeft: 30,
              marginTop: 20,

              backgroundColor: '#a29c9a',
              alignItems: 'flex-end',
              justifyContent: 'center',
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}>
            <View
              style={{
                height: '83%',
                width: '95%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text style={{fontSize: 25, color: '#fff', fontWeight: '700'}}>
                {this.state.Text1}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '20%',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: '55%',
                width: '55%',
                backgroundColor: '#a29c9a',
                borderTopRightRadius: 45,
                borderBottomLeftRadius: 45,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 25, color: '#fff', fontWeight: '600'}}>
                {this.state.count}
              </Text>
              <Text style={{color: '#fff', fontSize: 30, fontWeight: '700'}}>
                /99
              </Text>
            </View>
          </View>

          <View
            style={{
              height: '20%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <TouchableOpacity
              style={{
                height: '45%',
                width: '45%',
                backgroundColor: '#a29c9a',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 45,
                borderBottomLeftRadius: 45,
              }}
              onPress={() => {
                this.Reset();
              }}>
              <Text style={{fontSize: 25, color: '#fff', fontWeight: '700'}}>
                اعادة
              </Text>
            </TouchableOpacity>
          </View>

          <View style={style.view1}>
            <TouchableOpacity
              style={{
                height: '70%',
                width: '29%',
                backgroundColor: '#917054',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 70,
              }}
              onPress={() => {
                this.plus();
                this.ChangeText();
              }}>
              <Text style={{fontSize: 25, fontWeight: '900', color: '#e1e1e1'}}>
                ابدأ
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Modal
          animationType="slide"
          onRequestClose={() => {
            this.setState({modalinsidesipha: false});
          }}
          visible={this.state.modalinsidesipha}
          transparent={true}>
          <View
            style={{height: 100, width: 100, backgroundColor: '#000'}}></View>
          <TouchableOpacity
            style={{height: 100, width: 100, backgroundColor: '#000'}}
            onPress={() => {
              this.Reset();
              this.setState({modalinsidesipha: false});
            }}></TouchableOpacity>
        </Modal>
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
