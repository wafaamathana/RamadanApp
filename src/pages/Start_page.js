import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Modal,
  ScrollView,
  Image,
  Linking,
  TextInput,
  I18nManager
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

export default class Start_page extends React.Component {
  componentDidMount() {
    // Enable RTL right to left
    //علشان نثبت ال app
    I18nManager.forceRTL(true);
    // Allow RTL
    I18nManager.allowRTL(true);
  }
  componentWillUnmount() {
    //بتعكس الحالات
    // Reset RTL settings when the component unmounts
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);
  }



  constructor() {
    super();
    this.state = {
      modalVisible: false,
      model: false,
      modelDoua: false,
      modelQuran: false,
      modelsipha: false,
      modelNames: false,
      modelAthkar: false,
      modelRamadan: false,
      TextModalNames: false,
      modelTime: false,
      count: 0,
      Text1: 'لا اله الا الله',
      modalinsidesipha: false,
      TextModalDoua: false,
      TextModalQuran: false,
      TimingModal: false,
      data: [
        {
          img: require('../backgrounds/moshaf.png'),
          name: 'القرآن الكريم',
        },
        {
          img: require('../backgrounds/rosary11.png'),
          name: 'أَدعية',
          icpn: 'page-multiple',
        },
        {
          img: require('../backgrounds/ll.png'),
          name: 'السبحة',
          icpn: 'page-multiple',
        },

        {
          img: require('../backgrounds/allahname.png'),
          name: 'أسماء اللَّه الحُسْنَى ',
          icpn: 'page-multiple',
        },
        {
          img: require('../backgrounds/mmon2.png'),
          name: 'أذْكار',
          icpn: 'page-multiple',
        },
        {
          img: require('../backgrounds/ramadann.png'),
          name: 'إِمساكيّة رَمَضانُ',
        },
      ],
      searchDoua: '',
      arrayDoua: [
        {
          name1: 'دعاء',
          chevron: true,
          Bool: true,
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
          name1: 'Patience',
          chevron: true,
          Bool: true,

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
          Bool: true,

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
          name1: 'دعاء',
          chevron: true,
          Bool: true,
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
          name1: 'Patience',
          chevron: true,
          Bool: true,

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
          Bool: true,

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
          name1: 'دعاء',
          chevron: true,
          Bool: true,
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
          name1: 'Patience',
          chevron: true,
          Bool: true,

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
          Bool: true,

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
          name1: 'دعاء',
          chevron: true,
          Bool: true,
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
          name1: 'Patience',
          chevron: true,
          Bool: true,

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
          Bool: true,

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
          name1: 'دعاء',
          chevron: true,
          Bool: true,
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
          name1: 'Patience',
          chevron: true,
          Bool: true,

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
          Bool: true,

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
          name1: 'دعاء',
          chevron: true,
          Bool: true,
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
          name1: 'Patience',
          chevron: true,
          Bool: true,

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
          Bool: true,

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
          name1: 'دعاء',
          chevron: true,
          Bool: true,
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
          name1: 'Patience',
          chevron: true,
          Bool: true,

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
          name1: 'Sleepdddding',

          chevron: true,
          Bool: true,

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
      searchQuran: '',
      QuranPage: [
        {
          name: 'الفاتحه ',
          Type: 'مكية',

          Bool: true,
          link: 'https://hemanthkollanur.medium.com/understanding-react-native-linking-d794e56cde10',
        },
        {
          name: 'البقره',
          Type: 'مدنية',

          Bool: true,
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },

        {
          name: 'آل عمران',
          Type: 'مدنية',

          Bool: true,
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },
        {
          name: ' النساء',
          Type: 'مدنية',

          Bool: true,
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },
        {
          name: 'الفاتحه ',
          Type: 'مكية',
          Bool: true,
          link: 'https://hemanthkollanur.medium.com/understanding-react-native-linking-d794e56cde10',
        },
        {
          name: 'البقره',
          Type: 'مدنية',

          Bool: true,
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },

        {
          name: 'آل عمران',
          Type: 'مدنية',
          Bool: true,
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },
        {
          name: ' النساء',
          Type: 'مدنية',
          Bool: true,
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },
        {
          name: 'الفاتحه ',
          Type: 'مكية',
          Bool: true,
          link: 'https://hemanthkollanur.medium.com/understanding-react-native-linking-d794e56cde10',
        },

        {
          name: 'البقره',
          Type: 'مدنية',
          Bool: true,
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },

        {
          name: 'آل عمران',
          Type: 'مدنية',
          Bool: true,
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },
        {
          name: ' الddنساء',
          Type: 'مدنية',
          Bool: true,
          link: 'https://www.youtube.com/watch?v=Y1M6hJHHrjM&t=329s',
        },
      ],
      searchNames: '',
      array: [
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'sss sss',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
        {
          name: 'الله Allsssah',
          Bool: true,
          name2: ' Allah,God ,One God',
        },
      ],
      searchAzkar: '',
      array2: [
        {
          name1: 'اذكار الصباح',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'اذكار المساء',
          Bool: true,
          chevron: true,
        },

        {
          name1: 'قبل النوم',
          Bool: true,
          chevron: true,
        },

        {
          name1: 'الاستيقاظ',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'بعد الصلاة',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'عند سماع الآذان',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'قبل النوم',
          Bool: true,
          chevron: true,
        },

        {
          name1: 'الاستيقاظ',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'بعد الصلاة',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'عند سماع الآذان',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'قبل النوم',
          Bool: true,
          chevron: true,
        },

        {
          name1: 'الاستيقاظ',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'بعد الصلاة',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'عند سماع الآذان',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'اذكار الصباح',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'اذكار المساء',
          Bool: true,
          chevron: true,
        },

        {
          name1: 'قبل النوم',
          Bool: true,
          chevron: true,
        },

        {
          name1: 'الاستيقاظ',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'بعد الصلاة',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'عند سماع الآذان',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'قبل النوم',
          Bool: true,
          chevron: true,
        },

        {
          name1: 'الاستيقاظ',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'بعد الصلاة',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'عند سماع الآذان',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'قبل النوم',
          Bool: true,
          chevron: true,
        },

        {
          name1: 'الاستيقاظ',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'بعد الصلاة',
          Bool: true,
          chevron: true,
        },
        {
          name1: 'عند ddسماع الآذان',
          Bool: true,
          chevron: true,
        },
      ],
      dark: false,
      SearchExplor: '',
      ExplorBox: [
        {
          Bool: true,
          ExplorText: 'القاهره',
          Open: true,
          Img: require('../imgs/cairo.jpg'),
        },
        {
          ExplorText: 'الاسكندريه',
          Bool: true,
          Open: true,
          Img: require('../imgs/allah.jpg'),
        },
        {
          ExplorText: 'مطروح',
          Bool: true,
          Open: true,
          Img: require('../imgs/cairo.jpg'),
        },
        {
          ExplorText: 'Children',
          Bool: true,
          Open: true,
          Img: require('../imgs/cairo.jpg'),
        },
        {
          Bool: true,
          ExplorText: 'القاهره',
          Open: true,
          Img: require('../imgs/cairo.jpg'),
        },
        {
          ExplorText: 'الاسكندريه',
          Bool: true,
          Open: true,
          Img: require('../imgs/allah.jpg'),
        },
        {
          ExplorText: 'مطروح',
          Bool: true,
          Open: true,
          Img: require('../imgs/cairo.jpg'),
        },
        {
          ExplorText: 'Children',
          Bool: true,
          Open: true,
          Img: require('../imgs/cairo.jpg'),
        },
        {
          Bool: true,
          ExplorText: 'القاهره',
          Open: true,
          Img: require('../imgs/cairo.jpg'),
        },
        {
          ExplorText: 'الاسكندريه',
          Bool: true,
          Open: true,
          Img: require('../imgs/allah.jpg'),
        },
        {
          ExplorText: 'مطdروح',
          Bool: true,
          Open: true,
          Img: require('../imgs/cairo.jpg'),
        },
        {
          ExplorText: 'Children',
          Bool: true,
          Open: true,
          Img: require('../imgs/cairo.jpg'),
        },
      ],
      chevron: true,
    };
  }
  makeSearchDoua = searchText => {
    let list = this.state.arrayDoua;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].name1.toUpperCase().includes(searchText.toUpperCase())) {
        list[i].Bool = true;
      } else {
        list[i].Bool = false;
        count++;
      }
    }
    if (count == list.length) {
      this.state.TextModalDoua = true;
    } else if (count != list.length) {
      this.state.TextModalDoua = false;
    }
    this.setState({arrayDoua: list});
    count = 0;
  };

  makeSearchQuran = searchText => {
    let list = this.state.QuranPage;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].name.toUpperCase().includes(searchText.toUpperCase())) {
        list[i].Bool = true;
      } else {
        list[i].Bool = false;
        count++;
      }
      if (count == list.length) {
        this.state.TextModalQuran = true;
      } else if (count != list.length) {
        this.state.TextModalQuran = false;
      }
    }
    count = 0;
    this.setState({QuranPage: list});
  };

  makeSearchNames = searchText => {
    let list = this.state.array;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].name.toUpperCase().includes(searchText.toUpperCase())) {
        list[i].Bool = true;
      } else {
        list[i].Bool = false;
        count++;
      }
    }
    if (count == list.length) {
      this.state.TextModalNames = true;
    } else if (count != list.length) {
      this.state.TextModalNames = false;
    }
    count = 0;
    this.setState({array: list});
  };
  makeSearchAzkar = searchText => {
    let list = this.state.array2;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].name1.toUpperCase().includes(searchText.toUpperCase())) {
        list[i].Bool = true;
      } else {
        list[i].Bool = false;
        count++;
      }
      if (count == list.length) {
        this.state.TextModalDoua = true;
      } else if (count != list.length) {
        this.state.TextModalDoua = false;
      }
    }
    count = 0;
    this.setState({array2: list});
  };
  makeSearchExplor = searchText => {
    let list = this.state.ExplorBox;

    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].ExplorText.toUpperCase().includes(searchText.toUpperCase())) {
        list[i].Bool = true;
      } else {
        list[i].Bool = false;
        count++;
      }
    }
    if (count == list.length) {
      this.state.TextModalDoua = true;
    } else if (count != list.length) {
      this.state.TextModalDoua = false;
    }
    count = 0;
    this.setState({ExplorBox: list});
  };

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
  change(index) {
    let Edit = this.state.arrayDoua;
    for (let i = 0; i < Edit.length; i++) {
      Edit[i].chevron = true;
    }
    Edit[index].chevron = false;
    this.setState({star: Edit});
  }

  functionQuran(index) {
    let info = this.state.QuranPage;
    this.setState({QuranPage: info});
  }
  changeAthkar(index) {
    let Edit = this.state.array2;
    for (let i = 0; i < Edit.length; i++) {
      Edit[i].chevron = true;
    }
    Edit[index].chevron = false;
    this.setState({array2: Edit});
  }

  changemode() {
    let mode = this.state.dark;
    this.setState({dark: !mode});
  }
  ExplorBoxfun(index) {
    let lastEdit = this.state.ExplorBox;
    for (let i = 0; i < lastEdit.length; i++) {
      lastEdit[i].Open = true;
    }
    console.log(lastEdit[index]);
    lastEdit[index].Open = false;
    this.setState({ExplorBox: lastEdit});
  }
  render() {
    return (
      <>
        {/**start page */}
        <ImageBackground
          source={require('../backgrounds/hh.jpg')}
          style={{flex: 1}}>
          <View style={style.background}>
            <View style={style.salam}>
              <Text style={{fontSize: 50, color: '#443B36', fontWeight: '700'}}>
                السَلآْم عَلْيُكّمٌ
              </Text>
            </View>
            <View style={style.Logo}></View>
            <View style={style.name}>
              <Text style={{fontSize: 35, color: '#fff', fontWeight: '800'}}>
                app name
              </Text>
              <Text style={{fontSize: 35, color: '#fff', fontWeight: '800'}}>
                Wafaa Ibrahim
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: '8%',
                width: '50%',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#443B36',
                padding: 10,
                flexDirection: 'row',
              }}
              onPress={() => {
                this.setState({model: true});
              }}>
              <Text style={{fontSize: 30, color: '#fff', fontWeight: '600'}}>
                ابدأ
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/**start page modal */}
        <Modal
          onRequestClose={() => {
            this.setState({model: false});
          }}
          visible={this.state.model}
          animationType="slide">
          <>
            <ImageBackground
              source={require('../backgrounds/yy.jpg')}
              style={{
                flex: 1,
              }}>
              {/* <ScrollView> */}

              <TouchableOpacity
                onPress={() => {
                  this.setState({model: false});
                }}>
                <AntDesign name="left" size={30} color="#4f5051" />
              </TouchableOpacity>

              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '95%',
                  //backgroundColor: '#666',
                }}>
                {/* <ScrollView> */}
                <View
                  style={{
                    height: '15%',
                    width: '80%',
                    borderTopRightRadius: 25,
                    borderBottomLeftRadius: 25,
                    backgroundColor: this.state.dark ? '#3d3e43' : '#c0bab8',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: '700',
                      color: '#fff',
                    }}>
                    احفظ الله تجده تجاهك
                  </Text>
                </View>
                {/* <View > */}
                <LottieView
                  source={require('../Lottie/AnimationHome.json')} // Provide the path to your Lottie animation JSON file
                  autoPlay
                  loop
                  style={{width: '100%', height: 200}}
                />
                {/* </View> */}
                <View
                  style={{
                    //  height: '100%',
                    // width: '100%',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: '#000',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                  }}>
                  {/**map ------------------------------------------------------------------*/}
                  {/**Duapage____________________________________ */}
            {/* <ScrollView>   */}
                  <ScrollView contentContainerStyle={{backgroundColor:"#3d3e43",
                 borderTopLeftRadius: 30,
                 borderTopRightRadius: 30,
                  flexDirection: 'row',
                 flexWrap: 'wrap',
                 alignItems:"center",
                 justifyContent:"space-evenly"}}>
                    <View
                      style={{
                        
                        borderRadius: 25,
                        //backgroundColor: '#fff',
                        margin: 5,
                       }}>
                      <TouchableOpacity
                        style={{
                           borderRadius: 25,
                          backgroundColor: this.state.dark
                            ? '#3d3e43'
                            : '#C0BAB8',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 15,
                        }}
                        onPress={() => {
                          this.setState({modelDoua: true});
                        }}>
                        <Image
                          source={this.state.data[1].img}
                          style={{height: 75, width: 75}}
                        />
 
                      </TouchableOpacity>
                    </View>
                    {/*******************end duapage */}

                    {/************quran page*********** */}
                    <View
                      style={{
                       
                        borderRadius: 25,
                        //backgroundColor: '#fff',
                        margin: 5,
                        // marginTop: 15,
                      }}>
                      <TouchableOpacity
                        style={{
                          
                          borderRadius: 25,
                          backgroundColor: this.state.dark
                            ? '#3d3e43'
                            : '#c0bab8',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 15,
                        }}
                        onPress={() => {
                          this.setState({modelQuran: true});
                        }}>
                        <Image
                          source={this.state.data[0].img}
                          style={{height: 75, width: 75}}
                        />

                       
                      </TouchableOpacity>
                    </View>
                    {/**siphaaaaaaa */}
                    <View
                      style={{
                         borderRadius: 25,
                        // backgroundColor: '#fff',
                        margin: 5,
                       }}>
                      <TouchableOpacity
                        style={{
                           borderRadius: 25,
                          backgroundColor: this.state.dark
                            ? '#3d3e43'
                            : '#c0bab8',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 15,
                        }}
                        onPress={() => {
                          this.setState({modelsipha: true});
                        }}>
                        <Image
                          source={this.state.data[2].img}
                          style={{height: 75, width: 75}}
                        />

                       </TouchableOpacity>
                    </View>
                    {/**names*****                                 */}
                    <View
                      style={{
                         borderRadius: 25,
                        // backgroundColor: '#fff',
                        margin: 5,
                       }}>
                      <TouchableOpacity
                        style={{
                           borderRadius: 25,
                          backgroundColor: this.state.dark
                            ? '#3d3e43'
                            : '#c0bab8',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 15,
                        }}
                        onPress={() => {
                          this.setState({modelNames: true});
                        }}>
                        <Image
                          source={this.state.data[3].img}
                          style={{height: 75, width: 75}}
                        />

                       </TouchableOpacity>
                    </View>
                    {/**Athkar page *************************/}
                    <View
                      style={{
                         borderRadius: 25,
                        // backgroundColor: '#fff',
                        margin: 5,
                       }}>
                      <TouchableOpacity
                        style={{
                           borderRadius: 25,
                          backgroundColor: this.state.dark
                            ? '#3d3e43'
                            : '#c0bab8',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 15,
                        }}
                        onPress={() => {
                          this.setState({modelAthkar: true});
                        }}>
                        <Image
                          source={this.state.data[4].img}
                          style={{height: 75, width: 75}}
                        />

                       </TouchableOpacity>
                    </View>
                    {/**ramadann** */}
                    <View
                      style={{
                         borderRadius: 25,
                        // backgroundColor: '#fff',
                        margin: 5,
                       }}>
                      <TouchableOpacity
                        style={{
                           borderRadius: 25,
                          backgroundColor: this.state.dark
                            ? '#3d3e43'
                            : '#c0bab8',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 15,
                        }}
                        onPress={() => {
                          this.setState({modelRamadan: true});
                        }}>
                        <Image
                          source={this.state.data[5].img}
                          style={{height: 75, width: 75}}
                        />

                       </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              </View>
              {/* </ScrollView> */}
              {/* </ScrollView> */}
            </ImageBackground>
            {/**مودل الدعاء */}
            <Modal
              onRequestClose={() => {
                this.setState({modelDoua: false});
              }}
              visible={this.state.modelDoua}
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
                        this.setState({modelDoua: false});
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
                  {/* search ==> start */}
                  <View
                    style={{
                      alignItems: 'center',
                      alignSelf: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      width: '80%',
                      paddingHorizontal: 10,
                      marginTop: 10,
                      borderRadius: 20,
                      backgroundColor: '#66605E',
                    }}>
                    <TextInput
                      style={{
                        // backgroundColor: '#000',
                        // height: 50,
                        borderRadius: 20,

                        padding: 10,
                        width: '90%',
                        // marginTop: 10,
                        fontSize: 20,
                        color: '#fff',
                      }}
                      onChangeText={value => {
                        this.makeSearchDoua(value);
                        this.setState({searchDoua: value});
                      }}
                      value={this.state.searchDoua}
                    />

                    <FontAwesome name="search" size={20} color={'#fff'} />
                  </View>

                  {/**-----------------------------map/////////////////////////////////////////////////////////////// */}
                  <View style={style.NamesView}>
                    <ScrollView>
                      <View>
                        {this.state.TextModalDoua ? (
                          <>
                            <Animatable.View
                              animation="fadeIn"
                              easing="ease-in-expo"
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <LottieView
                                source={require('../Lottie/Animation - 1709843897980.json')} // Provide the path to your Lottie animation JSON file
                                autoPlay
                                loop
                                style={{width: 200, height: 200}}
                              />
                            </Animatable.View>
                          </>
                        ) : (
                          <>
                            {this.state.arrayDoua.map((item, index) =>
                              // if search
                              item.Bool ? (
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
                              ) : null,
                            )}
                          </>
                        )}
                      </View>
                      <View style={{height: 50}}></View>
                    </ScrollView>
                  </View>
                </ImageBackground>
              </>
            </Modal>

            {/**مودل القرأن */}
            <Modal
              onRequestClose={() => {
                this.setState({modelQuran: false});
              }}
              visible={this.state.modelQuran}
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
                      width: '100%',
                      paddingVertical: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({modelQuran: false});
                      }}>
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
                      <View></View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      alignSelf: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      width: '90%',
                      paddingHorizontal: 10,
                      marginTop: 10,
                      borderRadius: 20,
                      backgroundColor: '#66605E',
                    }}>
                    <TextInput
                      style={{
                        // backgroundColor: '#100',
                        // height: 50,
                        borderRadius: 20,

                        padding: 10,
                        width: '80%',
                        // marginTop: 10,
                        fontSize: 20,
                        color: '#fff',
                      }}
                      keyboardType="email-address"
                      onChangeText={value => {
                        this.makeSearchQuran(value);
                        this.setState({searchQuran: value});
                      }}
                      value={this.state.searchQuran}
                    />

                    <FontAwesome name="search" size={20} color={'#fff'} />
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      padding: 20,
                    }}>
                    <ScrollView>
                      <View>
                        {this.state.TextModalQuran ? (
                          <Animatable.View
                            animation="fadeIn"
                            easing="ease-in-expo"
                            style={{
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <LottieView
                              source={require('../Lottie/Animation - 1709843897980.json')} // Provide the path to your Lottie animation JSON file
                              autoPlay
                              loop
                              style={{width: 200, height: 200}}
                            />
                          </Animatable.View>
                        ) : (
                          <>
                            {this.state.QuranPage.map((item, index) =>
                              item.Bool ? (
                                <>
                                  <TouchableOpacity
                                    style={{
                                      // height: '10%',
                                      width: '100%',
                                      borderRadius: 20,
                                      backgroundColor: '#c0bab8',
                                      marginBottom: 10,
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      flexDirection: 'row',
                                      paddingHorizontal: 20,
                                      alignSelf: 'center',
                                      padding: 15,
                                    }}
                                    onPress={() => {
                                      Linking.openURL(item.link);
                                    }}>
                                    <Text
                                      style={{
                                        fontSize: 22,
                                        color: '#4f5051',
                                        fontWeight: '800',
                                      }}>
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
                                        // height: '41%',
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
                                </>
                              ) : null,
                            )}
                          </>
                        )}
                      </View>
                      <View style={{height: 100}}></View>
                    </ScrollView>
                  </View>
                </ImageBackground>
              </>
            </Modal>
            {/**sipha modal*** */}
            <Modal
              onRequestClose={() => {
                this.setState({modelsipha: false});
              }}
              visible={this.state.modelsipha}
              animationType="slide">
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
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({modelsipha: false});
                      }}>
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
                      <View></View>
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
                      <Text
                        style={{
                          fontSize: 25,
                          color: '#fff',
                          fontWeight: '700',
                        }}>
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
                      <Text
                        style={{
                          fontSize: 25,
                          color: '#fff',
                          fontWeight: '600',
                        }}>
                        {this.state.count}
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 30,
                          fontWeight: '700',
                        }}>
                        /
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 30,
                          fontWeight: '700',
                        }}>
                        99
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
                      <Text
                        style={{
                          fontSize: 25,
                          color: '#fff',
                          fontWeight: '700',
                        }}>
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
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: '900',
                          color: '#e1e1e1',
                        }}>
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
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      padding: 10,
                    }}>
                    <View
                      style={{
                        //height: '60%',
                        width: '100%',
                        backgroundColor: '#B6B0AE',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        borderRadius: 35,
                        padding: 10,
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 25,
                            fontWeight: '600',
                            color: '#fff',
                            marginBottom: 10,
                          }}>
                          لا إلَه إلَّا اللهُ وحدَه لا شَريكَ له، له المُلكُ وله
                          الحمدُ يُحيِي ويُميتُ وهو على كلِّ شيءٍ قديرٌ.
                        </Text>
                        <View
                          style={{
                            borderRadius: 5,
                            // borderRightColor: '#fff',
                            height: 1.5,
                            width: 200,
                            backgroundColor: '#fff',
                          }}></View>
                        <Text
                          style={{
                            fontSize: 25,
                            fontWeight: '600',
                            color: '#fff',
                          }}>
                          غُفرت خطاياك وإن كانت مثل زبد البحر بإذن الله.
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          height: '20%',
                          width: '40%',
                          backgroundColor: '#636465',
                          borderRadius: 50,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => {
                          this.Reset();
                          this.setState({modalinsidesipha: false});
                        }}>
                        <Text
                          style={{
                            fontSize: 25,
                            fontWeight: '900',
                            color: '#fff',
                          }}>
                          آمين
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </>
            </Modal>
            {/**names modal */}
            <Modal
              onRequestClose={() => {
                this.setState({modelNames: false});
              }}
              visible={this.state.modelNames}
              animationType="slide">
              <>
                <ImageBackground
                  source={require('../backgrounds/yy.jpg')}
                  style={{flex: 1, padding: 10}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({modelNames: false});
                    }}>
                    <AntDesign name="left" size={30} color="#4f5051" />
                  </TouchableOpacity>
                  <View style={style.LargeView2}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '900',
                          color: '#fff',
                        }}>
                        اسماء الله الحسنى
                      </Text>
                    </View>

                    <Text
                      style={{fontSize: 15, fontWeight: '600', color: '#fff'}}>
                      99 Names
                    </Text>
                    <Text
                      style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>
                      عن ابى هريره ,رواية قال "لله تسعه وتسعون اسماء مائه الا
                      واحدا, لا يحفظها احد الا دخل الجنه ,وهو وتر يحب الوتر
                    </Text>
                    <Text
                      style={{fontSize: 15, fontWeight: '600', color: '#fff'}}>
                      صحيح البخاري 6410, صحيح مسلم 2677
                    </Text>
                  </View>
                  <View style={style.NamesView2}>
                    <ScrollView>
                      <View>
                        {this.state.TextModalNames ? (
                          <>
                            <Animatable.View
                              animation="fadeIn"
                              easing="ease-in-expo"
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <LottieView
                                source={require('../Lottie/Animation - 1709843897980.json')} // Provide the path to your Lottie animation JSON file
                                autoPlay
                                loop
                                style={{width: 200, height: 200}}
                              />
                            </Animatable.View>
                          </>
                        ) : (
                          <>
                            {this.state.array.map((item, index) =>
                              item.Bool ? (
                                <>
                                  <TouchableOpacity
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

                                      <Text
                                        style={{fontSize: 20, color: '#fff'}}>
                                        {item.name2}
                                      </Text>
                                    </View>
                                    <View style={{marginLeft: 20}}>
                                      <Text
                                        style={{fontSize: 20, color: '#fff'}}>
                                        {index + 1}
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                </>
                              ) : null,
                            )}
                          </>
                        )}
                      </View>
                      <View style={{height: 50}}></View>
                    </ScrollView>
                  </View>
                </ImageBackground>
              </>
            </Modal>
            {/**athkar modal */}
            <Modal
              onRequestClose={() => {
                this.setState({modelAthkar: false});
              }}
              visible={this.state.modelAthkar}
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
                      backgroundColor: '#66605E',
                      borderRadius: 25,
                      paddingVertical: 10,
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({modelAthkar: false});
                      }}>
                      <AntDesign name="left" size={30} color="#fff" />
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
                  <View
                    style={{
                      alignItems: 'center',
                      alignSelf: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      width: '80%',
                      paddingHorizontal: 10,
                      marginTop: 10,
                      borderRadius: 20,
                      backgroundColor: '#66605E',
                    }}>
                    <TextInput
                      style={{
                        // backgroundColor: '#100',
                        // height: 50,
                        borderRadius: 20,

                        padding: 10,
                        width: '90%',
                        // marginTop: 10,
                        fontSize: 20,
                        color: '#fff',
                      }}
                      keyboardType="email-address"
                      onChangeText={value => {
                        this.makeSearchAzkar(value);
                        this.setState({searchAzkar: value});
                      }}
                      value={this.state.searchAzkar}
                    />

                    <FontAwesome name="search" size={20} color={'#fff'} />
                  </View>
                  <View style={style.NamesView}>
                    <ScrollView>
                      <View>
                        {this.state.TextModalDoua ? (
                          <>
                            <Animatable.View
                              animation="fadeIn"
                              easing="ease-in-expo"
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <LottieView
                                source={require('../Lottie/Animation - 1709843897980.json')} // Provide the path to your Lottie animation JSON file
                                autoPlay
                                loop
                                style={{width: 200, height: 200}}
                              />
                            </Animatable.View>
                          </>
                        ) : (
                          <>
                            {this.state.array2.map((item, index) =>
                              item.Bool ? (
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
                              ) : null,
                            )}
                          </>
                        )}
                      </View>
                      <View style={{height: 50}}></View>
                    </ScrollView>
                  </View>
                </ImageBackground>
              </>
            </Modal>
            {/**Ramadan modal */}
            <Modal
              onRequestClose={() => {
                this.setState({modelRamadan: false});
              }}
              visible={this.state.modelRamadan}
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

                      // width: '100%',

                      paddingVertical: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({modelRamadan: false});
                      }}>
                      <AntDesign name="left" size={30} color="#4f5051" />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#4f5051',
                      }}>
                      امساكية رَمَضانُ
                    </Text>
                    <TouchableOpacity>
                      <View></View>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      // alignItems: 'center',
                      // height: 700,
                      // width: '100%',
                      // backgroundColor:"#000"
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '90%',
                        paddingHorizontal: 10,
                        marginVertical: 10,
                        borderRadius: 20,
                        backgroundColor: '#66605E',
                      }}>
                      <TextInput
                        style={{
                          width: '90%',
                          fontSize: 20,
                          color: '#fff',
                        }}
                        keyboardType="email-address"
                        onChangeText={value => {
                          this.makeSearchExplor(value);
                          this.setState({SearchExplor: value});
                        }}
                        value={this.state.SearchExplor}
                      />

                      <FontAwesome name="search" size={20} color={'#fff'} />
                    </View>
                    <ScrollView>
                      {this.state.TextModalDoua ? (
                        <>
                          <Animatable.View
                            animation="fadeIn"
                            easing="ease-in-expo"
                            style={{
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <LottieView
                              source={require('../Lottie/Animation - 1709843897980.json')} // Provide the path to your Lottie animation JSON file
                              autoPlay
                              loop
                              style={{width: 200, height: 200}}
                            />
                          </Animatable.View>
                        </>
                      ) : (
                        <>
                          {this.state.ExplorBox.map((item, index) =>
                            item.Bool ? (
                              <>
                                <TouchableOpacity
                                  style={{
                                    // height: '7%',
                                    //  width: '48%',
                                    width: '90%',
                                    alignSelf: 'center',
                                    paddingVertical: 15,
                                    borderRadius: 20,
                                    backgroundColor: '#c0bab8',
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // flexDirection: 'row',
                                  }}
                                  onPress={() => {
                                    this.ExplorBoxfun(index);
                                    this.setState({modalVisible: true});
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: 22,
                                      fontWeight: '700',
                                      color: '#fff',
                                    }}>
                                    {item.ExplorText}
                                  </Text>
                                </TouchableOpacity>
                                {item.Open ? null : (
                                  <>
                                    <Modal
                                      animationType="slide"
                                      transparent={true}
                                      visible={this.state.modalVisible}
                                      onRequestClose={() =>
                                        this.setState({modalVisible: false})
                                      }>
                                      <View
                                        style={{
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          backgroundColor: '#0005',
                                          flex: 1,
                                        }}>
                                        <Image
                                          source={item.Img}
                                          resizeMode="contain"
                                          style={{
                                            // borderRadius: 200,
                                            width: '100%',
                                            // height: "100%",
                                          }}
                                        />
                                      </View>
                                    </Modal>
                                  </>
                                )}
                              </>
                            ) : null,
                          )}
                        </>
                      )}
                    </ScrollView>
                    <View style={{height: '15%'}}></View>
                  </View>
                </ImageBackground>
              </>
            </Modal>
          </>
        </Modal>
      </>
    );
  }
}
const style = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  salam: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },
  name: {
    alignItems: 'center',
    justifyContent: 'center',

    margin: '3%',
  },
  Logo: {
    height: '50%',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
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
  view1: {
    height: '20%',
    width: '100%',
    // backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
  //from names page
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
