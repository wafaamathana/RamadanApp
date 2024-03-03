import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Modal,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          img: require('../backgrounds/moshaf.png'),
          name: 'القرآن الكريم',
        },
        {
          img: require('../backgrounds/rosary11.png'),
          name: 'أَدعية',
          icpn: 'page-multiple',
          model: false,
        },
        {
          img: require('../backgrounds/ll.png'),
          name: 'السبحة',
          icpn: 'page-multiple',
          model: false,
        },

        {
          img: require('../backgrounds/allahname.png'),
          name: 'أسماء اللَّه الحُسْنَى ',
          icpn: 'page-multiple',
          model: false,
        },
        {
          img: require('../backgrounds/mmon2.png'),
          name: 'أذْكار',
          icpn: 'page-multiple',
          model: false,
        },
        {
          img: require('../backgrounds/ramadann.png'),
          name: 'إِمساكيّة رَمَضانُ',

          model: false,
        },
      ],

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
          name1: 'Hereafter',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Mercy',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
        {
          name1: 'Patience',
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
          name1: 'Sleeping',

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
          name1: 'Hereafter',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Mercy',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
        {
          name1: 'Patience',
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
          name1: 'Sleeping',

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
          name1: 'Hereafter',
          name2: 'الْأَطْفَال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },

        {
          name1: 'Mercy',
          name2: 'الاطفال',
          chevron: true,
          Doua1: '',
          Doua2: '',
          Doua3: '',
          Doua4: '',
        },
        {
          name1: 'Patience',
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
          name1: 'Sleeping',

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
      ],
      model: false,
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

  function() {
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
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '95%',
              //backgroundColor: '#666',
            }}>
            <View
              style={{
                height: '15%',
                width: '80%',
                borderTopRightRadius: 25,
                borderBottomLeftRadius: 25,
                backgroundColor: '#c0bab8',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 25, fontWeight: '700', color: '#fff'}}>
                احفظ الله تجده تجاهك
              </Text>
            </View>
            <View
              style={{
                height: '65%',
                width: '100%',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                //backgroundColor: '#000',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}>
              {/**map */}
              <View
                style={{
                  height: '27%',
                  width: '45%',
                  borderRadius: 25,
                  backgroundColor: '#fff',
                  margin: 5,
                  marginTop: 15,
                }}>
                <TouchableOpacity
                  style={{
                    height: '95%',
                    width: '98%',
                    borderRadius: 25,
                    backgroundColor: '#C0BAB8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15,
                  }}
                  onPress={() => {
                    this.setState({model: true});
                  }}>
                  <Image
                    source={this.state.data[1].img}
                    style={{height: '90%', width: '60%'}}
                  />

                  <Text
                    style={{fontSize: 20, fontWeight: '900', color: '#fff'}}>
                    {this.state.data[1].name}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
        <Modal
          onRequestClose={() => {
            this.setState({model: false});
          }}
          visible={this.state.model}
          animationType="slide">
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
                  backgroundColor: '#a29c9a',
                  borderRadius: 25,
                  paddingVertical: 10,
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({model: false});
                  }}>
                  <AntDesign name="arrowleft" size={30} color="#4f5051" />
                </TouchableOpacity>
                <View
                  style={{
                    height: '100%',
                    width: '55%',
                    //backgroundColor: '#000',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: '800',
                      color: '#4f5051',
                      marginHorizontal: 20,
                    }}>
                    الدعاء
                  </Text>
                </View>
              </View>
              {/**----------------------------- */}
              <View style={style.NamesView}>
                <ScrollView>
                  <View>
                    {this.state.array.map((item, index) => (
                      <>
                        <TouchableOpacity
                          style={{
                            flexDirection: 'row',

                            backgroundColor: '#c0bab8',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            borderTopRightRadius: 30,
                            borderBottomLeftRadius: 30,
                            borderRadius: 5,
                            padding: 15,
                            marginVertical: 3,
                          }}
                          onPress={() => {
                            this.change(index);
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
        </Modal>
      </>
    );
  }
}
const style = StyleSheet.create({
  LargeView: {
    height: '30%',
    width: '100%',
    backgroundColor: '#a29c9a',
    marginBottom: 10,
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  NamesView: {
    height: '92%',
    width: '100%',
    //backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
  },
});
