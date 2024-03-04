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
  I18nManager 
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Doua extends React.Component {
  
  constructor() {
    super();
    this.state = {
      array: [
        {
          name1: 'Children',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1:
            'رَبَّنَا وَٱجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةًۭ مُّسْلِمَةًۭ لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ ۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ',
          Doua2:
            'رَبِّ ٱجْعَلْنِى مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِى ۚ رَبَّنَا وَتَقَبَّلْ دُعَآءِ (٤٠) رَبَّنَا ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ',
          Doua3:
            'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَٰجِنَا وَذُرِّيَّـٰتِنَا قُرَّةَ أَعْيُنٍۢ وَٱجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
          Doua4:
            'رَبِّ هَبْ لِى مِن لَّدُنكَ ذُرِّيَّةًۭ طَيِّبَةً ۖ إِنَّكَ سَمِيعُ ٱلدُّعَآءِ',
        },
        {
          name1: 'Guidance',
          name2: 'الإِرْشَادِ',
          chevron: true,
          Doua1:
            'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (١) ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ (٢) ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (٣) مَـٰلِكِ يَوْمِ ٱلدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ (٦) صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ (٧)',

          Doua2:
            'رَبِّ هَبْ لِى حُكْمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ (٨٣) وَٱجْعَل لِّى لِسَانَ صِدْقٍۢ فِى ٱلْـَٔاخِرِينَ (٨٤) وَٱجْعَلْنِى مِن وَرَثَةِ جَنَّةِ ٱلنَّعِيمِ (٨٥)',
          Doua3:
            'رَّبَّنَآ إِنَّنَا سَمِعْنَا مُنَادِيًۭا يُنَادِى لِلْإِيمَـٰنِ أَنْ ءَامِنُوا۟ بِرَبِّكُمْ فَـَٔامَنَّا ۚ رَبَّنَا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلْأَبْرَارِ (١٩٣) رَبَّنَا وَءَاتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ ٱلْقِيَـٰمَةِ ۗ إِنَّكَ لَا تُخْلِفُ ٱلْمِيعَادَ (١٩٤)',
          Doua4:
            'يَتَرَقَّبُ ۖ قَالَ رَبِّ نَجِّنِى مِنَ ٱلْقَوْمِ ٱلظَّـٰلِمِينَ (٢١)',
        },

        {
          name1: 'Children2',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Children4',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
        {
          name1: 'Children',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1:
            'رَبَّنَا وَٱجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةًۭ مُّسْلِمَةًۭ لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ ۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ',
          Doua2:
            'رَبِّ ٱجْعَلْنِى مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِى ۚ رَبَّنَا وَتَقَبَّلْ دُعَآءِ (٤٠) رَبَّنَا ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ',
          Doua3:
            'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَٰجِنَا وَذُرِّيَّـٰتِنَا قُرَّةَ أَعْيُنٍۢ وَٱجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
          Doua4:
            'رَبِّ هَبْ لِى مِن لَّدُنكَ ذُرِّيَّةًۭ طَيِّبَةً ۖ إِنَّكَ سَمِيعُ ٱلدُّعَآءِ',
        },
        {
          name1: 'Guidance',
          name2: 'الإِرْشَادِ',
          chevron: true,
          Doua1:
            'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (١) ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ (٢) ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (٣) مَـٰلِكِ يَوْمِ ٱلدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ (٦) صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ (٧)',

          Doua2:
            'رَبِّ هَبْ لِى حُكْمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ (٨٣) وَٱجْعَل لِّى لِسَانَ صِدْقٍۢ فِى ٱلْـَٔاخِرِينَ (٨٤) وَٱجْعَلْنِى مِن وَرَثَةِ جَنَّةِ ٱلنَّعِيمِ (٨٥)',
          Doua3:
            'رَّبَّنَآ إِنَّنَا سَمِعْنَا مُنَادِيًۭا يُنَادِى لِلْإِيمَـٰنِ أَنْ ءَامِنُوا۟ بِرَبِّكُمْ فَـَٔامَنَّا ۚ رَبَّنَا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلْأَبْرَارِ (١٩٣) رَبَّنَا وَءَاتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ ٱلْقِيَـٰمَةِ ۗ إِنَّكَ لَا تُخْلِفُ ٱلْمِيعَادَ (١٩٤)',
          Doua4:
            'يَتَرَقَّبُ ۖ قَالَ رَبِّ نَجِّنِى مِنَ ٱلْقَوْمِ ٱلظَّـٰلِمِينَ (٢١)',
        },

        {
          name1: 'Children2',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Children4',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
        {
          name1: 'Children2',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Children4',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
        {
          name1: 'Children2',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Children4',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
        {
          name1: 'Children2',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Children4',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
        {
          name1: 'Children2',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Children4',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
        {
          name1: 'Children2',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Children4',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
      ],
    };
  }

  change(index) {
    let Edit = this.state.array;
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
          source={require('../imgs/Mosque.jpg')}
          style={{flex: 1, padding: 5}}>
          <View
            style={{
              alignItems: 'center',
              height: '10%',
              backgroundColor: '#fff',
              width: '80%',
              alignSelf: 'center',
              borderRadius: 30,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#000', fontWeight: '600'}}>
              الدعاء
            </Text>
          </View>

          <View style={style.DataView}>
            <ScrollView>
              <View>
                {this.state.array.map((item, index) => (
                  <>
                    <View>
                      <TouchableOpacity
                        style={{
                          //height: '12%',
                          width: '100%',
                          backgroundColor: '#000',
                          borderRadius: 20,

                          flexDirection: 'row',
                          alignItems: 'center',
                          marginBottom: 10,
                        }}
                        onPress={() => {
                          this.change(index);
                        }}>
                        <View
                          style={{
                            //height: '70%',
                            width: '20%',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            margin: 10,
                          }}>
                          <Image
                            source={require('../imgs/icon.jpg')}
                            style={{
                              resizeMode: 'contain',
                              //height: '100%',
                              width: '100%',
                              borderRadius: 20,
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: '600',
                            color: '#fff',
                          }}>
                          {item.name1}
                        </Text>
                        <View
                          style={{
                            //  height: '100%',
                            width: '25%',
                            // backgroundColor: '#fff',
                          }}></View>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: '600',
                            color: '#fff',
                          }}>
                          {item.name2}
                        </Text>
                        {item.chevron ? (
                          <Entypo
                            name="chevron-small-right"
                            size={40}
                            color={'#fff'}
                          />
                        ) : (
                          <Entypo
                            name="chevron-small-down"
                            size={40}
                            color={'#fff'}
                          />
                        )}
                      </TouchableOpacity>

                      {item.chevron ? null : (
                        <View>
                          <View
                            style={{
                              width: '100%',
                              borderRadius: 20,
                              backgroundColor: '#999',
                              alignItems: 'center',
                              padding: 20,
                              marginBottom: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#000',
                              }}>
                              {item.Doua1}
                            </Text>
                          </View>
                          <View
                            style={{
                              //width: '100%',
                              borderRadius: 20,
                              backgroundColor: '#999',
                              alignItems: 'center',
                              padding: 20,
                              marginBottom: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#000',
                              }}>
                              {item.Doua2}
                            </Text>
                          </View>
                          <View
                            style={{
                              // width: '100%',
                              borderRadius: 20,
                              backgroundColor: '#999',
                              alignItems: 'center',
                              padding: 20,
                              marginBottom: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#000',
                              }}>
                              {item.Doua3}
                            </Text>
                          </View>
                          <View
                            style={{
                              // width: '100%',
                              borderRadius: 20,
                              backgroundColor: '#999',
                              alignItems: 'center',
                              padding: 20,
                              marginBottom: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#000',
                              }}>
                              {item.Doua4}
                            </Text>
                          </View>
                        </View>
                      )}
                    </View>
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
  DataView: {
    height: '85%',
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
  },
});
