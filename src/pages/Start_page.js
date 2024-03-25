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
  I18nManager,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Doua from './Doua';

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
          name1: 'عند رؤية هلال رمضان',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'اللَّهُمَّ أَهْلِلْهُ عَلَيْنَا بِالْيُمْنِ وَالإِيمَانِ وَالسَّلاَمَةِ وَالإِسْلاَمِ رَبِّي وَرَبُّكَ اللَّهُ',
            },
          ],
        },
        {
          name1: 'عند بدأ الصيام - السحور ',
          chevron: true,
          Bool: true,

          multi: [
            {
              Doua: 'اللهمَّ تقبّل مني الصيام واغفر لي فيه وبارك لي فيه وزدني علماً',
            },
          ],
        },
        {
          name1: 'ليلة القدر',
          chevron: true,
          Bool: true,

          multi: [
            {
              Doua: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
            },
          ],
        },
        {
          name1: 'دعاء لبس الثوب',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'اَلحَمدُ لِلهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ) وَرَزَقَنِيهِ مِنْ غَيْرِ حَولٍ مِنِّي وَ لَا قُوَّة',
            },
          ],
        },
        {
          name1: 'عند الخروج من المنزل',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'اللَّهُمَّ إِنَّي أَعْوْذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضِلَّ، أَوْ أَزِلَّ، أُوْ أُزَلَّ أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ',
            },
            {
              Doua: 'بِسْمِ اللهِ، تَوَكَّلْتُ عَلَى اللهِ، وَلاَحَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ',
            },
          ],
        },
        {
          name1: 'عند دخول المنزل',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللهِ رَبَّنَا تَوَكَّلْنَا',
            },
          ],
        },
        {
          name1: 'عند دخول المسجد',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: '(يَبْدَأُ بِرِجْلِهِ اليُمْنَى)(١)، ويقول: (أَعُوْذُ بِاللَّهِ الْعَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ)(٢)، (بِسْمِ اللَّهِ, وَالصَّلاةُ)(٣). [وَالسَّلامُ عَلَى رَسُوْلِ اللَّهِ](٤)، (اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ)(٥).',
            },
          ],
        },
        {
          name1: 'عند الخروج من المسجد',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: '(يَبْدَأُ بِرِجْلِهِ الْيُسْرَى)(١)، وَ يَقُولُ: (بِسْمِ اللهِ وَ الصَّلاةُ وَالسَّلامُ عَلَى رَسُولِ اللهِ، اللهم إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ، اللهم اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيْمِ)(٢).',
            },
          ],
        },
        {
          name1: 'قبل دخول الخلاء',
          chevron: true,
          Bool: true,
          Doua: '(بِسْمِ اللَّهِ). اللَّهُـمَّ إِنِّي أَعُـوذُ بِـكَ مِـنَ الْخُـبْثِ وَالْخَبَائِثِ.',
          multi: [
            {
              Doua: '(بِسْمِ اللَّهِ). اللَّهُـمَّ إِنِّي أَعُـوذُ بِـكَ مِـنَ الْخُـبْثِ وَالْخَبَائِثِ.',
            },
          ],
        },
        {
          name1: 'عند الخروج من الخلاء',
          chevron: true,
          Bool: true,
          Doua: 'غُفْرَانَكَ',
          multi: [
            {
              Doua: 'غُفْرَانَكَ',
            },
          ],
        },
        {
          name1: 'قبل النوم',
          chevron: true,

          Bool: true,
          multi: [
            {
              Doua: 'بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا، بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.',
            },
            {
              Doua: 'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ (١) مَلِكِ ٱلنَّاسِ (٢) إِلَـٰهِ ٱلنَّاسِ (٣) مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ (٤) ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ (٥) مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ (٦)',
            },
            {
              Doua: 'قُل أَعوذُ بِرَبِّ الفَلَقِ مِن شَرِّ ما خَلَقَ وَمِن شَرِّ غاسِقٍ إِذا وَقَبَ وَمِن شَرِّ النَّفّاثاتِ فِي العُقَدِ وَمِن شَرِّ حاسِدٍ إِذا حَسَدَ',
            },
            {
              Doua: 'ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ',
            },
          ],
        },
        {
          name1: 'الهداية ',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'رَّبَّنَآ إِنَّنَا سَمِعْنَا مُنَادِيًۭا يُنَادِى لِلْإِيمَـٰنِ أَنْ ءَامِنُوا۟ بِرَبِّكُمْ فَـَٔامَنَّا ۚ رَبَّنَا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلْأَبْرَارِ (١٩٣) رَبَّنَا وَءَاتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ ٱلْقِيَـٰمَةِ ۗ إِنَّكَ لَا تُخْلِفُ ٱلْمِيعَادَ (١٩٤)',
            },
            {
              Doua: ' ۖرَبِّ نَجِّنِى مِنَ ٱلْقَوْمِ ٱلظَّـٰلِمِينَ (٢١)',
            },
            {
              Doua: 'رَبِّ هَبْ لِى حُكْمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ (٨٣) وَٱجْعَل لِّى لِسَانَ صِدْقٍۢ فِى ٱلْـَٔاخِرِينَ (٨٤) وَٱجْعَلْنِى مِن وَرَثَةِ جَنَّةِ ٱلنَّعِيمِ (٨٥)',
            },
            {
              Doua: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (١) ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ (٢) ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (٣) مَـٰلِكِ يَوْمِ ٱلدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ (٦) صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ (٧)',
            },
            {
              Doua: 'رَبِّ ٱجْعَلْنِى مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِى ۚ رَبَّنَا وَتَقَبَّلْ دُعَآءِ (٤٠) رَبَّنَا ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ',
            },
            {
              Doua: 'رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًۭا وَثَبِّتْ أَقْدَامَنَا وَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ',
            },
            {
              Doua: 'وَقُل رَّبِّ أَدْخِلْنِى مُدْخَلَ صِدْقٍۢ وَأَخْرِجْنِى مُخْرَجَ صِدْقٍۢ وَٱجْعَل لِّى مِن لَّدُنكَ سُلْطَـٰنًۭا نَّصِيرًۭا',
            },
            {
              Doua: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ ٱلْوَهَّابُ (٨) رَبَّنَآ إِنَّكَ جَامِعُ ٱلنَّاسِ لِيَوْمٍۢ لَّا رَيْبَ فِيهِ ۚ إِنَّ ٱللَّهَ لَا يُخْلِفُ ٱلْمِيعَادَ',
            },
            {
              Doua: 'رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًۭا وَتَوَفَّنَا مُسْلِمِينَ',
            },
            {
              Doua: 'وَقُل رَّبِّ زِدْنِى عِلْمًۭا',
            },
            {
              Doua: 'رَبِّ فَلَا تَجْعَلْنِى فِى ٱلْقَوْمِ ٱلظَّـٰلِمِينَ',
            },
          ],
        },
        {
          name1: 'الذرية الصالحة',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'رَبَّنَا وَٱجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةًۭ مُّسْلِمَةًۭ لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ ۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ',
            },
            {
              Doua: 'رَبِّ ٱجْعَلْنِى مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِى ۚ رَبَّنَا وَتَقَبَّلْ دُعَآءِ (٤٠) رَبَّنَا ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ',
            },
            {
              Doua: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَٰجِنَا وَذُرِّيَّـٰتِنَا قُرَّةَ أَعْيُنٍۢ وَٱجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
            },
            {
              Doua: 'رَبِّ هَبْ لِى مِن لَّدُنكَ ذُرِّيَّةًۭ طَيِّبَةً ۖ إِنَّكَ سَمِيعُ ٱلدُّعَآءِ',
            },
            {
              Doua: 'رَبِّ لَا تَذَرْنِى فَرْدًۭا وَأَنتَ خَيْرُ ٱلْوَٰرِثِينَ',
            },
            {
              Doua: 'رَبِّ هَبْ لِى مِنَ ٱلصَّـٰلِحِينَ',
            },
          ],
        },
        {
          name1: 'الصبر',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًۭا وَتَوَفَّنَا مُسْلِمِينَ',
            },
            {Doua: ' اللهم اشدد أزري وثبتني وارزقني الصبر والصبر الجميل'},
          ],
        },
        {
          name1: 'الآخرة ',

          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (١) ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ (٢) ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (٣) مَـٰلِكِ يَوْمِ ٱلدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ (٦) صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ (٧)',
            },
            {
              Doua: 'رَبِّ هَبْ لِى حُكْمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ (٨٣) وَٱجْعَل لِّى لِسَانَ صِدْقٍۢ فِى ٱلْـَٔاخِرِينَ (٨٤) وَٱجْعَلْنِى مِن وَرَثَةِ جَنَّةِ ٱلنَّعِيمِ (٨٥)',
            },
            {
              Doua: 'رَّبَّنَآ إِنَّنَا سَمِعْنَا مُنَادِيًۭا يُنَادِى لِلْإِيمَـٰنِ أَنْ ءَامِنُوا۟ بِرَبِّكُمْ فَـَٔامَنَّا ۚ رَبَّنَا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلْأَبْرَارِ (١٩٣) رَبَّنَا وَءَاتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ ٱلْقِيَـٰمَةِ ۗ إِنَّكَ لَا تُخْلِفُ ٱلْمِيعَادَ (١٩٤)',
            },
            {
              Doua: '۞ رَبِّ قَدْ ءَاتَيْتَنِى مِنَ ٱلْمُلْكِ وَعَلَّمْتَنِى مِن تَأْوِيلِ ٱلْأَحَادِيثِ ۚ فَاطِرَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ أَنتَ وَلِىِّۦ فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ ۖ تَوَفَّنِى مُسْلِمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ',
            },
            {
              Doua: 'رَبَّنَا ٱصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ ۖ إِنَّ عَذَابَهَا كَانَ غَرَامًا (٦٥) إِنَّهَا سَآءَتْ مُسْتَقَرًّۭا وَمُقَامًۭا',
            },
            {
              Doua: 'رَبِّ أَوْزِعْنِىٓ أَنْ أَشْكُرَ نِعْمَتَكَ ٱلَّتِىٓ أَنْعَمْتَ عَلَىَّ وَعَلَىٰ وَٰلِدَىَّ وَأَنْ أَعْمَلَ صَـٰلِحًۭا تَرْضَىٰهُ وَأَدْخِلْنِى بِرَحْمَتِكَ فِى عِبَادِكَ ٱلصَّـٰلِحِينَ',
            },
            {
              Doua: 'رَبَّنَآ إِنَّنَآ ءَامَنَّا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ ٱلنَّارِ',
            },
            {
              Doua: 'رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْـَٔاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ',
            },
            {
              Doua: 'رَبِّ أَوْزِعْنِىٓ أَنْ أَشْكُرَ نِعْمَتَكَ ٱلَّتِىٓ أَنْعَمْتَ عَلَىَّ وَعَلَىٰ وَٰلِدَىَّ وَأَنْ أَعْمَلَ صَـٰلِحًۭا تَرْضَىٰهُ وَأَصْلِحْ لِى فِى ذُرِّيَّتِىٓ ۖ إِنِّى تُبْتُ إِلَيْكَ وَإِنِّى مِنَ ٱلْمُسْلِمِينَ',
            },
          ],
        },
        {
          name1: 'المغرة',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'رَبَّنَا وَٱجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةًۭ مُّسْلِمَةًۭ لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ ۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ',
            },
            {
              Doua: 'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًۭا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ',
            },
            {
              Doua: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ ٱلْوَهَّابُ (٨) رَبَّنَآ إِنَّكَ جَامِعُ ٱلنَّاسِ لِيَوْمٍۢ لَّا رَيْبَ فِيهِ ۚ إِنَّ ٱللَّهَ لَا يُخْلِفُ ٱلْمِيعَادَ',
            },
            {
              Doua: 'رَبَّنَا ٱصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ ۖ إِنَّ عَذَابَهَا كَانَ غَرَامًا (٦٥) إِنَّهَا سَآءَتْ مُسْتَقَرًّۭا وَمُقَامًۭا',
            },
            {
              Doua: 'رَبَّنَا ظَلَمْنَآ أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ ٱلْخَـٰسِرِينَ (٢٣)',
            },
            {
              Doua: 'رَّبِّ ٱغْفِرْ وَٱرْحَمْ وَأَنتَ خَيْرُ ٱلرَّٰحِمِينَ',
            },
            {
              Doua: 'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةًۭ لِّلَّذِينَ كَفَرُوا۟ وَٱغْفِرْ لَنَا رَبَّنَآ ۖ إِنَّكَ أَنتَ ٱلْعَزِيزُ ٱلْحَكِيمُ',
            },
            {
              Doua: 'رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحْمَةًۭ وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًۭا',
            },
          ],
        },
        {
          name1: 'التوبة',
          chevron: true,
          Bool: true,

          multi: [
            {
              Doua: 'رَبِّ إِنِّى ظَلَمْتُ نَفْسِى فَٱغْفِرْ لِى فَغَفَرَ لَهُۥٓ ۚ إِنَّهُۥ هُوَ ٱلْغَفُورُ ٱلرَّحِيمُ',
            },
            {
              Doua: 'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةًۭ لِّلَّذِينَ كَفَرُوا۟ وَٱغْفِرْ لَنَا رَبَّنَآ ۖ إِنَّكَ أَنتَ ٱلْعَزِيزُ ٱلْحَكِيمُ',
            },
            {
              Doua: 'رَبَّنَا ٱغْفِرْ لَنَا وَلِإِخْوَٰنِنَا ٱلَّذِينَ سَبَقُونَا بِٱلْإِيمَـٰنِ وَلَا تَجْعَلْ فِى قُلُوبِنَا غِلًّۭا لِّلَّذِينَ ءَامَنُوا۟ رَبَّنَآ إِنَّكَ رَءُوفٌۭ رَّحِيمٌ',
            },
            {
              Doua: 'رَّبِّ ٱغْفِرْ وَٱرْحَمْ وَأَنتَ خَيْرُ ٱلرَّٰحِمِينَ',
            },
            {
              Doua: 'رَبَّنَا ظَلَمْنَآ أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ ٱلْخَـٰسِرِينَ',
            },
            {
              Doua: 'رَّبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ ٱلْمَصِيرُ',
            },
            {
              Doua: 'رَبَّنَآ إِنَّنَآ ءَامَنَّا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ ٱلنَّارِ (١٦)',
            },
            {
              Doua: 'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًۭا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ',
            },
            {
              Doua: 'رَبَّنَا ٱغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِىٓ أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ',
            },
            {
              Doua: 'رَّبَّنَآ إِنَّنَا سَمِعْنَا مُنَادِيًۭا يُنَادِى لِلْإِيمَـٰنِ أَنْ ءَامِنُوا۟ بِرَبِّكُمْ فَـَٔامَنَّا ۚ رَبَّنَا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلْأَبْرَارِ (١٩٣) رَبَّنَا وَءَاتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ ٱلْقِيَـٰمَةِ ۗ إِنَّكَ لَا تُخْلِفُ ٱلْمِيعَادَ',
            },
            {
              Doua: 'رَبِّ ٱجْعَلْنِى مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِى ۚ رَبَّنَا وَتَقَبَّلْ دُعَآءِ (٤٠) رَبَّنَا ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ',
            },
          ],
        },
        {
          name1: 'التفاني',

          chevron: true,
          Bool: true,
          multi: [
            {
              Doua1:
                '۞ رَبِّ قَدْ ءَاتَيْتَنِى مِنَ ٱلْمُلْكِ وَعَلَّمْتَنِى مِن تَأْوِيلِ ٱلْأَحَادِيثِ ۚ فَاطِرَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ أَنتَ وَلِىِّۦ فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ ۖ تَوَفَّنِى مُسْلِمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ',
            },
            {
              Doua: 'رَبِّ أَوْزِعْنِىٓ أَنْ أَشْكُرَ نِعْمَتَكَ ٱلَّتِىٓ أَنْعَمْتَ عَلَىَّ وَعَلَىٰ وَٰلِدَىَّ وَأَنْ أَعْمَلَ صَـٰلِحًۭا تَرْضَىٰهُ وَأَصْلِحْ لِى فِى ذُرِّيَّتِىٓ ۖ إِنِّى تُبْتُ إِلَيْكَ وَإِنِّى مِنَ ٱلْمُسْلِمِينَ',
            },
            {
              Doua: 'رَّبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ ٱلْمَصِيرُ (؛)',
            },
            {
              Doua: 'إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ (١٦٢) لَا شَرِيكَ لَهُۥ ۖ وَبِذَٰلِكَ أُمِرْتُ وَأَنَا۠ أَوَّلُ ٱلْمُسْلِمِينَ',
            },
            {
              Doua: 'ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ',
            },
            {
              Doua: 'رَبَّنَآ ءَامَنَّا بِمَآ أَنزَلْتَ وَٱتَّبَعْنَا ٱلرَّسُولَ فَٱكْتُبْنَا مَعَ ٱلشَّـٰهِدِينَ',
            },
            {
              Doua: 'حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ',
            },
            {
              Doua: 'حَسْبِىَ ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ',
            },
            {
              Doua: 'سُبْحَـٰنَ ٱلَّذِى سَخَّرَ لَنَا هَـٰذَا وَمَا كُنَّا لَهُۥ مُقْرِنِينَ (١٣) وَإِنَّآ إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ',
            },
            {
              Doua: 'رَبَّنَا تَقَبَّلْ مِنَّآ ۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلْعَلِيمُ',
            },
          ],
        },
        {
          name1: 'الشفاء',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (١) ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ (٢) ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ (٣) مَـٰلِكِ يَوْمِ ٱلدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ (٦) صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ (٧)',
            },
            {
              Doua: 'رَبِّ إِنِّى لِمَآ أَنزَلْتَ إِلَىَّ مِنْ خَيْرٍۢ فَقِيرٌۭ',
            },
            {
              Doua: 'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ (١) مَلِكِ ٱلنَّاسِ (٢) إِلَـٰهِ ٱلنَّاسِ (٣) مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ (٤) ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ (٥) مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ (٦)',
            },
            {
              Doua: 'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ (١) مِن شَرِّ مَا خَلَقَ (٢) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (٣) وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ (٤) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (٥)',
            },
          ],
        },
        {
          name1: 'الزواج',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'هَبْ لَنَا مِنْ أَزْوَٰجِنَا وَذُرِّيَّـٰتِنَا قُرَّةَ أَعْيُنٍۢ وَٱجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
            },
          ],
        },
        {
          name1: 'الوالدين',

          chevron: true,
          Bool: true,

          multi: [
            {
              Doua: 'رَّبِّ ٱرْحَمْهُمَا كَمَا رَبَّيَانِى صَغِيرًۭا (٢٤)',
            },
            {
              Doua: 'رَبِّ أَوْزِعْنِىٓ أَنْ أَشْكُرَ نِعْمَتَكَ ٱلَّتِىٓ أَنْعَمْتَ عَلَىَّ وَعَلَىٰ وَٰلِدَىَّ وَأَنْ أَعْمَلَ صَـٰلِحًۭا تَرْضَىٰهُ وَأَصْلِحْ لِى فِى ذُرِّيَّتِىٓ ۖ إِنِّى تُبْتُ إِلَيْكَ وَإِنِّى مِنَ ٱلْمُسْلِمِينَ',
            },
            {
              Doua: 'رَبِّ أَوْزِعْنِىٓ أَنْ أَشْكُرَ نِعْمَتَكَ ٱلَّتِىٓ أَنْعَمْتَ عَلَىَّ وَعَلَىٰ وَٰلِدَىَّ وَأَنْ أَعْمَلَ صَـٰلِحًۭا تَرْضَىٰهُ وَأَدْخِلْنِى بِرَحْمَتِكَ فِى عِبَادِكَ ٱلصَّـٰلِحِينَ',
            },
            {
              Doua: 'رَبِّ ٱجْعَلْنِى مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِى ۚ رَبَّنَا وَتَقَبَّلْ دُعَآءِ (٤٠) رَبَّنَا ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ',
            },
          ],
        },
        {
          name1: 'التحصين',
          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'رَبِّ نَجِّنِى مِنَ ٱلْقَوْمِ ٱلظَّـٰلِمِينَ',
            },
            {
              Doua: '۞ رَبِّ قَدْ ءَاتَيْتَنِى مِنَ ٱلْمُلْكِ وَعَلَّمْتَنِى مِن تَأْوِيلِ ٱلْأَحَادِيثِ ۚ فَاطِرَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ أَنتَ وَلِىِّۦ فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ ۖ تَوَفَّنِى مُسْلِمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ',
            },
            {
              Doua: 'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ (١) مَلِكِ ٱلنَّاسِ (٢) إِلَـٰهِ ٱلنَّاسِ (٣) مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ (٤) ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ (٥) مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ (٦)',
            },
            {
              Doua: 'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ (١) مِن شَرِّ مَا خَلَقَ (٢) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (٣) وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ (٤) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (٥)',
            },
            {
              Doua: 'رَبِّ ٱنصُرْنِى عَلَى ٱلْقَوْمِ ٱلْمُفْسِدِينَ',
            },
            {
              Doua: 'ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ',
            },
          ],
        },

        {
          name1: 'القوة',

          chevron: true,
          Bool: true,
          multi: [
            {
              Doua: 'رَبَّنَا ٱغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِىٓ أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ',
            },
            {
              Doua: 'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًۭا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ',
            },
            {
              Doua: 'رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًۭا وَثَبِّتْ أَقْدَامَنَا وَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ',
            },
            {
              Doua: 'رَّبِّ أَدْخِلْنِى مُدْخَلَ صِدْقٍۢ وَأَخْرِجْنِى مُخْرَجَ صِدْقٍۢ وَٱجْعَل لِّى مِن لَّدُنكَ سُلْطَـٰنًۭا نَّصِيرًۭا (٨٠)',
            },
            {
              Doua: 'رَبِّ إِنِّى لِمَآ أَنزَلْتَ إِلَىَّ مِنْ خَيْرٍۢ فَقِيرٌۭ',
            },
            {
              Doua: 'رَبِّ ٱشْرَحْ لِى صَدْرِى (٢٥) وَيَسِّرْ لِىٓ أَمْرِى (٢٦) وَٱحْلُلْ عُقْدَةًۭ مِّن لِّسَانِى (٢٧) يَفْقَهُوا۟ قَوْلِى (٢٨)',
            },
            {
              Doua: 'أَنِّى مَسَّنِىَ ٱلضُّرُّ وَأَنتَ أَرْحَمُ ٱلرَّٰحِمِينَ ٨٣',
            },
          ],
        },
      ],
      searchQuran: '',
      QuranPage: [
        {
          name: 'الفاتحة',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/001-alfatihah',
        },
        {
          name: 'البقرة',
          Type: 'مدنية',

          Bool: true,
          link: 'https://soundcloud.com/user-263980647/mlgdxtkvpx4e',
        },

        {
          name: 'آل عمران',
          Type: 'مدنية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/003-aal-e-imran',
        },
        {
          name: ' النساء',
          Type: 'مدنية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/004-al-nisa',
        },
        {
          name: 'المائدة ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/005-al-maeda',
        },
        {
          name: 'الأنعام',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/search?q=%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D9%85%D9%86%D8%B4%D8%A7%D9%88%D9%8A',
        },

        {
          name: 'الأعراف ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/search?q=%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B9%D8%B1%D8%A7%D9%81%20%D8%A7%D9%84%D9%85%D9%86%D8%B4%D8%A7%D9%88%D9%8A',
        },
        {
          name: ' الأنفال',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/search?q=%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D9%81%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D9%86%D8%B4%D8%A7%D9%88%D9%8A',
        },
        {
          name: 'التوبة ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/search?q=%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D9%88%D8%A8%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D8%B4%D8%A7%D9%88%D9%8A',
        },

        {
          name: 'يونس',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/search?q=%D8%B3%D9%88%D8%B1%D8%A9%20%D9%8A%D9%88%D9%86%D8%B3%20%D8%A7%D9%84%D9%85%D9%86%D8%B4%D8%A7%D9%88%D9%8A',
        },

        {
          name: 'هود ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/search?q=%D8%B3%D9%88%D8%B1%D8%A9%20%D9%87%D9%88%D8%AF%20%D8%A7%D9%84%D9%85%D9%86%D8%B4%D8%A7%D9%88%D9%8A',
        },
        {
          name: 'يوسف ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/search?q=%D8%B3%D9%88%D8%B1%D8%A9%20%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D9%86%D8%B4%D8%A7%D9%88%D9%8A',
        },
        {
          name: ' الرعد',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/search?q=%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B1%D8%B9%D8%AF%20%D8%A7%D9%84%D9%85%D9%86%D8%B4%D8%A7%D9%88%D9%8A',
        },
        {
          name: ' إبراهيم',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/014-ibrahim',
        },
        {
          name: 'الحجر ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/015-al-hijr',
        },
        {
          name: 'النحل',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/016-an-nahl',
        },

        {
          name: 'الإسراء ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/017-al-isra',
        },
        {
          name: ' الكهف',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/018-al-kahf',
        },
        {
          name: 'مريم ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/019-maryam-mary-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=e1d7581a8bad4325a22b7cd45fa1efe9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'طه',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/020-taha-taha-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=4830793165eb46c2b286476bdec0d559&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'الأنبياء ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/021-al-anbiya-the-prophets-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=77f6b9edb22d4ebe9f0e3cd79da31c47&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: ' الحج',
          Type: 'مدنيه',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/022-al-hajj-the-pilgrimage-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=f8a0126761b44fe9a0382097755813f5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'المؤمنون',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/023-al-muminoon-the-believers-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=f279269b108d4255a8bfed51a7744a7a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'النور ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/024-an-noor-the-light-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=4536367750a04c29ac79c662eca5a6f3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'الفرقان',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/025-al-furqan-the-criterion-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=cf439d18bc6340759488f9e43e388597&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'الشعراء ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/026-ash-shuara-the-poets-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=3aa0afeae0074b1daab1522858b814b4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: ' النمل',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/027-an-naml-the-ants-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=6d3fadb00d5346ee96f8368073ae8470&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'القصص ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/028-al-qasas-the-stories-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=f45213cc9e3c4904935cf62ddf880bfd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'العنكبوت',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/029-al-ankaboot-the-spider-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=d25460e74b3844f59fbe1255e10f9971&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'الروم ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/030-ar-room-the-romans-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=4aab9c29195a4cc088cbf2cc58d79962&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'لقمان',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/031-luqman-luqman-2?in=khaled3mmar/sets/qj6ufhzxndyw&si=50811c1adbc6416091502d3c21208059&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'السجدة',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/dlhce5w86hqz',
        },
        {
          name: 'الأحزاب ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/033-al-ahzab-the-confederates-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=4bb5a13cba8543fb89308f0034eadfd4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'سبأ',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/034-saba-sheba-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=268c7c54c22343a780dca9d82b082aa0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'فاطر ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/035-fatir-the-orignator-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=bfd20d18071142ae8623474b991a3b97&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'يس',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/036-ya-seen-ya-seen-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=cb5cceba177f4d539247cabfb614ff2c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'الصافات ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/037-as-saaffat-those-ranges-in-ranks-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=b93c0f4481014ba6858eb225eadfa091&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'ص',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/038-sad-the-letter-sad-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=ffa0ae3b502146a2a4b39a50dc4468b1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'الزمر ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/039-az-zumar-the-groups-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=a95f8cca519649868adf0acebd287ea9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: ' غافر',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/040-ghafir-the-forgiver-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=a30f63cb8c6a409cb79777e484f19739&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'فصلت',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/041-fussilat-explained-in-detail-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=306371e1ff1340f182d305da0757f9f8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'الشورى ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/042-ash-shura-consultation-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=436c7b2fc0ef42339c04649b3f9ad6a0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: 'الزخرف',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/043-az-zukhruf-the-gold-adornment-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=f5a61cfd9dfe4c71a9338bc526d86f3f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'الدخان',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/abdessalam-yassine/gvyozbodnltu',
        },
        {
          name: ' الجاثية',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/045-al-jathiya',
        },
        {
          name: 'الأحقاف ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/046-al-ahqaf-the-curved-sand-hills-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=4eaadd20c9bb4375a946c11c79f5c948&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'محمد',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/047-muhammad-muhammad-2?in=khaled3mmar/sets/qj6ufhzxndyw&si=a183ebf7da80487b9dd0e40322024791&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'الفتح ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/048-al-fath-the-victory-4?in=khaled3mmar/sets/qj6ufhzxndyw&si=52e58e2f1d4744469d0e9a1374231549&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          name: ' الحجرات',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/049-al-hujraat',
        },

        {
          name: 'ق',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/user3519613/nqfz2wnmoju7',
        },
        {
          name: 'الذاريات ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/user-258834376/51-quran-824052295',
        },
        {
          name: 'الطور',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/ehab-ahmed-77/9nwoa4nmdkn7',
        },

        {
          name: 'النجم ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-saied-9/mq9zrtpte32q',
        },
        {
          name: ' القمر',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/054-al-qamar',
        },
        {
          name: 'الرحمن ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/6burfuczf3x6/tk4xvfxpf3am',
        },

        {
          name: 'الواقعة',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/khaled3mmar/056-al-waqiah-the-event-3?in=khaled3mmar/sets/qj6ufhzxndyw&si=44f3efc1b0664a618925711876b5cc8d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

        {
          name: 'الحديد',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/057-al-hadid',
        },
        {
          name: 'المجادلة',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-mohamed-80924068/al-mujadilah-she-that-4',
        },

        {
          name: ' الحشر',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/059-al-hashr',
        },
        {
          name: 'الممتحنة ',
          Type: 'ندنية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/060-al-mumtahana',
        },

        {
          name: 'الصف',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/user-717484195/061a-1',
        },

        {
          name: 'الجمعة ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/jo6o092z8a6r/xizyntahqcw2',
        },
        {
          name: ' المنافقون',
          Type: 'مدنيه',
          Bool: true,
          link: 'https://soundcloud.com/user-258834376/63-quran-271071870',
        },
        {
          name: 'التغابن',
          Type: 'مدنية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/064-al-taghabun',
        },
        {
          name: 'الطلاق ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/065-al-talaq',
        },
        {
          name: 'التحريم',
          Type: 'مدنية',

          Bool: true,
          link: 'https://soundcloud.com/user-511282224/066-at-tahrim',
        },

        {
          name: 'الملك ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/mostafa-wahba-94/4idvemi8bcgl',
        },
        {
          name: ' القلم',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/068-al-qalam',
        },
        {
          name: 'الحاقة ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/omar-elghzoly/alhaqqah',
        },

        {
          name: 'المعارج',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/omar-elghzoly/almaarij',
        },

        {
          name: 'نوح ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/be-frank-1/8hbfvk3usfyh',
        },
        {
          name: 'الجن',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/be-frank-1/snae44w2lzyu',
        },

        {
          name: 'المزمل',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/073-al-muzzammil',
        },
        {
          name: 'المدثر ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/074-al-muddaththir',
        },
        {
          name: 'القيامة',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/be-frank-1/g6xhmy9qhauq',
        },

        {
          name: 'الإنسان ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/user-631147729/otdvtpgs4dzf',
        },
        {
          name: 'المرسلات',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/077-al-mursalat',
        },
        {
          name: 'النبأ ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/hossamelsherbiny/omikgf07lgei',
        },

        {
          name: 'النازعات',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-mohamed-80924068/an-naziat-those-who-pull-out-4',
        },

        {
          name: 'عبس ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/080-abasa',
        },
        {
          name: 'التكوير',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/081-al-takwir',
        },
        {
          name: 'الانفطار',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/082-al-infitar',
        },
        {
          name: 'المطففين ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/083-al-mutaffifin',
        },
        {
          name: 'الانشقاق',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/084-al-inshiqaq',
        },

        {
          name: 'البروج',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/085-al-burooj',
        },
        {
          name: ' الطارق',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/086-al-tariq',
        },
        {
          name: 'الأعلى ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/user-258834376/87-quran-934874734',
        },

        {
          name: 'الغاشية',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-mohamed-80924068/al-ghashiya-the-overwhelming-5',
        },

        {
          name: 'الفجر',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/aqtai/kwf13hzufn3x',
        },
        {
          name: ' البلد',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/elmenshawey/1a1',
        },

        {
          name: 'الشمس',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/091-al-shams',
        },
        {
          name: 'الليل ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/092-al-layl',
        },
        {
          name: 'الضحى',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/nour-tuhammy/hd',
        },

        {
          name: 'الشرح ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-mohamed-80924068/as-sharh-the-opening-forth-4',
        },
        {
          name: ' التين',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/095-at-tin',
        },
        {
          name: 'العلق ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/benarabiano/dh82vmv58qim',
        },

        {
          name: 'القدر',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-mohamed-80924068/al-qadr-the-night-of-decree-5',
        },

        {
          name: 'البينة',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-mohamed-80924068/al-bayyinah-the-clear-5',
        },
        {
          name: 'الزلزلة',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/sabilnajiya/fcscesks6tbz',
        },
        {
          name: ' العاديات',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/100-al-adiyat',
        },
        {
          name: 'القارعة ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/101-al-qaria',
        },

        {
          name: 'التكاثر',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/102-at-takathur',
        },

        {
          name: 'العصر ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-mohamed-80924068/al-asr-4',
        },
        {
          name: ' الهمزة',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/104-al-humaza',
        },
        {
          name: 'الفيل',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/105-al-fil',
        },
        {
          name: 'قريش ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/106-qoraish',
        },
        {
          name: 'الماعون',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/107-al-maun',
        },

        {
          name: 'الكوثر ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-mohamed-80924068/al-kauthar-4',
        },
        {
          name: ' الكافرون',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-almeshad/track',
        },
        {
          name: 'النصر ',
          Type: 'مدنية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/110-al-nasr',
        },

        {
          name: 'المسد',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/111-al-masadd',
        },

        {
          name: 'الإخلاص ',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/ahmed-mohamed-80924068/al-ikhlas-4',
        },
        {
          name: 'الفلق',
          Type: 'مكية',
          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/113-al-falaq',
        },

        {
          name: 'الناس',
          Type: 'مكية',

          Bool: true,
          link: 'https://soundcloud.com/shsamirmostafa/114-al-nas',
        },
      ],
      searchNames: '',
      array: [
        {
          name: 'الله',
          Bool: true,
          name2: ' هو الاسم الدال على الذات الجامعة لصفات الألوهية.',
        },
        {
          name: 'الرّحمن',
          Bool: true,
          name2: 'واسع الرحمة في خلقه مؤمنهم وكافرهم',
        },
        {
          name: 'الرّحيم',
          Bool: true,
          name2: 'المعطي من الثواب أضعاف العمل.',
        },
        {
          name: 'الملك',
          Bool: true,
          name2: 'المتصرّف في ملكه كما يشاء.',
        },
        {
          name: 'القدوس',
          Bool: true,
          name2: 'المنزه عن كل وصف يدركه حسٌ أو خيال.',
        },
        {
          name: 'السلام',
          Bool: true,
          name2: 'السالم من العيوب والنقائص والناشر سلامته على خلقه.',
        },
        {
          name: 'المؤمن',
          Bool: true,
          name2: 'المصدق نفسه وكتبه ورسله فيما يقولونه عنه.',
        },
        {
          name: 'المهيمن',
          Bool: true,
          name2: 'المسيطر على كل شيء بكماله وقوته.',
        },
        {
          name: 'العزيز',
          Bool: true,
          name2: 'الغالب الذي لا نظير له.',
        },
        {
          name: 'الجبار',
          Bool: true,
          name2: 'المنفذ مشيئته على سبيل الإجبار والجبر.',
        },
        {
          name: 'المتكبّر',
          Bool: true,
          name2: 'المتفرد بصفات العظمة والكبرياء.',
        },
        {
          name: 'الخالق',
          Bool: true,
          name2: 'المبدع لخلقه بإرادته.',
        },
        {
          name: 'البارئ',
          Bool: true,
          name2: 'المميِّز لخلقه بالصور المختلفة.',
        },
        {
          name: 'المصوّر',
          Bool: true,
          name2: 'الذي أعطى لكل خلق صورة خاصة.',
        },
        {
          name: 'الغفّار',
          Bool: true,
          name2: 'الذي يستر القبيح في الدنيا ويتجاوز عنه في الآخرة.',
        },
        {
          name: 'القهّار',
          Bool: true,
          name2: 'الذي يقهر الجبابرة.',
        },
        {
          name: 'الوهّاب',
          Bool: true,
          name2: ' المتفضّل بالعطايا.',
        },
        {
          name: 'الرّزاق',
          Bool: true,
          name2: 'خالق الأرزاق والمتكفّل بإيصالها إلى خلقه.',
        },

        {
          name: 'الفتاح',
          Bool: true,
          name2: ' الذي يفتح خزائن رحمته لعباده.',
        },
        {
          name: 'العليم',
          Bool: true,
          name2: 'المحيط علمه بكل شيء.',
        },
        {
          name: 'القابض',
          Bool: true,
          name2: 'قابض يده عمن يشاء.',
        },
        {
          name: 'الباسط',
          Bool: true,
          name2: 'بأسراره ورزقه على من يشاء.',
        },
        {
          name: 'الخافض',
          Bool: true,
          name2: ' الذي يخفض الكفار والأشقياء المتكبرين.',
        },
        {
          name: 'الرّافع',
          Bool: true,
          name2: 'للأقدار بين أولياء الرجال، فهو يرفع عباده الطائعين بعبادتهم.',
        },
        {
          name: 'المعزّ',
          Bool: true,
          name2: 'للمؤمنين بطاعته فيعطيهم القوة والغلبة والشدة لمن شاء.',
        },
        {
          name: 'المذل',
          Bool: true,
          name2: 'للكافرين بعصيانهم.',
        },
        {
          name: 'السّميع',
          Bool: true,
          name2:
            'الذي لا يغيب عنه مسموع، ويحيط بجميع الأصوات الظاهرة والباطنة والخفية والجلية.',
        },
        {
          name: 'البصير',
          Bool: true,
          name2: 'الذي يشاهد جميع الموجودات ويرى الأشياء كلها ظاهرها وباطنها.',
        },
        {
          name: 'الحكم',
          Bool: true,
          name2:
            'الذي إليه ترجع الأمور والأحكام فيفصل بين الحق والباطل ولا راد لقضائه.',
        },
        {
          name: 'العدل',
          Bool: true,
          name2: 'الذي ليس في ملكه خلل وهو الذي حرم الظلم على نفسه.',
        },
        {
          name: 'اللّطيف',
          Bool: true,
          name2: ' البرّ الرفيق بعباده يرزق ويحسن إليهم.',
        },
        {
          name: 'الخبير',
          Bool: true,
          name2: 'العالم بكل شيء باطن أو ظاهر.',
        },
        {
          name: 'الحليم',
          Bool: true,
          name2: 'الذي لا يعجل بالعقاب فهو يمهل ولا يهمل.',
        },
        {
          name: 'العظيم',
          Bool: true,
          name2: 'الذي لا تصل العقول إلى كُنه ذاته.',
        },
        {
          name: 'الغفور',
          Bool: true,
          name2: 'غافر الذنب وقابل التوب.',
        },
        {
          name: 'الشّكور',
          Bool: true,
          name2: 'المنعم على عباده بالثواب، ويتقبّل أعمال عباده ويُضاعف أجرها.',
        },

        {
          name: 'العليّ',
          Bool: true,
          name2: 'الذي علا بذاته وصفاته عن مدارج الخلق.',
        },
        {
          name: 'الكبير',
          Bool: true,
          name2: 'المُنزه عن الأوهام فهو العظيم الذي ليس كمثله شيء.',
        },
        {
          name: 'الحفيظ',
          Bool: true,
          name2: 'حافظ الكون من الخلل.',
        },
        {
          name: 'المقيت',
          Bool: true,
          name2: 'خالق الأقوات ومُقسمها والمتكفّل بإيصالها للمخلوقات.',
        },
        {
          name: 'الحسيب',
          Bool: true,
          name2: 'الذي يكفي عباده حاجتهم.',
        },
        {
          name: 'الجليل',
          Bool: true,
          name2: 'عظيم القدر بجلاله وكماله.',
        },
        {
          name: 'الكريم',
          Bool: true,
          name2: 'الذي لا ينفذ عطاؤه.',
        },
        {
          name: 'الرّقيب',
          Bool: true,
          name2:
            'الملاحظ لما يرعاهم فهو المراقب لأحوال العباد ويعلم أقوالهم وأفعالهم.',
        },
        {
          name: 'المُجيب',
          Bool: true,
          name2: 'الذي يجيب الداعي إذا دعاه والسائل إذا سأله.',
        },
        {
          name: 'الواسع',
          Bool: true,
          name2: 'الذي وسع رزقه جميع خلقه.',
        },
        {
          name: 'الحكيم',
          Bool: true,
          name2:
            'المُنزه عن فعل ما لا ينبغي بجلاله وكماله، المحقق في تدبيره، اللطيف في تقديره.',
        },
        {
          name: 'الودود',
          Bool: true,
          name2: 'المتحبب إلى خلقه محب لهم والمحبوب في قلوب أوليائه.',
        },
        {
          name: 'المجيد',
          Bool: true,
          name2: 'الشريف في ذاته وأفعاله، والجزيل في عطائه.',
        },
        {
          name: 'الباعث',
          Bool: true,
          name2: ' باعث الموتى للحساب.',
        },
        {
          name: 'الشّهيد',
          Bool: true,
          name2:
            'الحاضر الذي لا يغيب عنه شيء فهو العالم بالأمور ظاهرها وباطنها.',
        },
        {
          name: 'الحق',
          Bool: true,
          name2: 'خالق كل شيء بحكمة.',
        },
        {
          name: 'الوكيل',
          Bool: true,
          name2: 'الكفيل بالخلق القائم بأمورهم فهو الموكول إليه الأمور كلها.',
        },
        {
          name: 'القويّ',
          Bool: true,
          name2: 'الذي لا يعجزه شيء وصاحب القدرة التامة البالغة الكمال.',
        },
        {
          name: 'المتين',
          Bool: true,
          name2: 'الذي لا يُغلب ولا يحتاج إلى مدد وعون في إمضاء حكمه.',
        },
        {
          name: 'الوليّ',
          Bool: true,
          name2: 'المحب لأوليائه الناصر لهم.',
        },
        {
          name: 'الحميد',
          Bool: true,
          name2: 'المستحق للحمد والثناء.',
        },
        {
          name: 'المحصي',
          Bool: true,
          name2: 'الذي أحصى كل شيء بعلمه، الذي أحاط كل مخلوقاته بعلمه.',
        },
        {
          name: 'المُبدئ',
          Bool: true,
          name2: 'الذي بدأ الخلق وأوجده من العدم.',
        },
        {
          name: 'المعيد',
          Bool: true,
          name2: ' الذي يعيد الخلق إلى الموت.',
        },
        {
          name: 'المحيي',
          Bool: true,
          name2: 'الذي يحيي العظام وهي رميم.',
        },
        {
          name: 'المميت',
          Bool: true,
          name2: 'الذي يميت الأجسام بنزع الأرواح منها.',
        },
        {
          name: 'الحيّ',
          Bool: true,
          name2: 'المتصف بالحياة الأبدية.',
        },
        {
          name: 'القيوم',
          Bool: true,
          name2: ' القائم بنفسه الغني عن غيره.',
        },
        {
          name: 'الواجد',
          Bool: true,
          name2: 'الذي يجد كل ما يطلبه ويريده.',
        },
        {
          name: 'الماجد',
          Bool: true,
          name2: 'كبير الإحسان والأفضال.',
        },
        {
          name: 'الواحد',
          Bool: true,
          name2: 'المتفرد ذاتًا ووصفًا وأفعالًا.',
        },
        {
          name: 'الصّمد',
          Bool: true,
          name2: 'المقصود بالحوائج، فهو المطاع الذي لا يقضى دونه أمر.',
        },
        {
          name: 'القادر',
          Bool: true,
          name2: ' المتفرد باختراع الموجودات.',
        },
        {
          name: 'المقتدر',
          Bool: true,
          name2: 'الذي يقدر على ما يشاء.',
        },
        {
          name: 'المؤخر',
          Bool: true,
          name2: ' مؤخر الأعداء بالإبعاد.',
        },
        {
          name: 'الأول',
          Bool: true,
          name2: 'السابق للأشياء.',
        },

        {
          name: 'الآخر',
          Bool: true,
          name2: 'الباقي بعد فناء خلقه.',
        },
        {
          name: 'الظّاهر',
          Bool: true,
          name2: 'بآياته وعلامات قدرته.',
        },
        {
          name: 'الباطن',
          Bool: true,
          name2: ' المحتجب عن الأنظار والمطلع على الأسرار.',
        },
        {
          name: 'الوالي',
          Bool: true,
          name2: 'المالك للأشياء والمتصرف فيها كيف يشاء.',
        },
        {
          name: 'المتعالِ',
          Bool: true,
          name2: 'رفيع الدرجات ذو العرش المرتفع في كبريائه وعظمته.',
        },
        {
          name: 'البر',
          Bool: true,
          name2: 'الذي يمنُّ على السائلين بحسن العطاء.',
        },
        {
          name: 'التّواب',
          Bool: true,
          name2: 'يقبل التوبة عن عباده ويعفو عن سيئاتهم.',
        },
        {
          name: 'المنتقم',
          Bool: true,
          name2: ' الذي نخشى نقمته لقدرته وعظمته.',
        },
        {
          name: 'العفوّ',
          Bool: true,
          name2: 'الذي يمحو الذنوب ويتجاوز عن السيئات.',
        },
        {
          name: 'الرّؤوف',
          Bool: true,
          name2: 'شديد الرحمة بعباده.',
        },
        {
          name: 'مالك المُلك',
          Bool: true,
          name2:
            'له التصرف المطلق وهو تعالى الذي ينفذ مشيئته في ملكه كيف يشاء وكما يشاء.',
        },
        {
          name: 'ذو الجلال والإكرام',
          Bool: true,
          name2:
            'المنفرد بصفات الجلال والكمال والعظمة المختص بالإكرام والكرامة.',
        },
        {
          name: 'المُقسط',
          Bool: true,
          name2: 'القائم بالقسط والمقيم بالعدل.',
        },
        {
          name: 'الجامع',
          Bool: true,
          name2: 'الذي جمع الكمالات كلها ذاتًا ووصفًا وفعلًا.',
        },
        {
          name: 'الغني',
          Bool: true,
          name2: 'الذي لا يحتاج إلى شيء.',
        },
        {
          name: 'المغني',
          Bool: true,
          name2: ' المعطي لمن يشاء من عباده.',
        },
        {
          name: 'المانع',
          Bool: true,
          name2:
            'الذي يمنع البلاء حفظًا وعناية، ويمنع العطاء عمن يشاء ابتلاء وحماية.',
        },
        {
          name: 'الضّار',
          Bool: true,
          name2: 'هو المقدر للضر لمن يشاء.',
        },
        {
          name: 'النّافع',
          Bool: true,
          name2: 'المقدر للنفع ومالكه.',
        },
        {
          name: 'النّور',
          Bool: true,
          name2: 'الهادي الرشيد الذي أرشد ونور قلوب الصادقين بتوحيده.',
        },
        {
          name: 'الهادي',
          Bool: true,
          name2: 'الذي أعطى كل شيء خلقه ثم هدى، المبين لطريق الحق.',
        },
        {
          name: 'البديع',
          Bool: true,
          name2:
            'الذي لا يماثله أحد في صفاته ولا في أفعاله ولا في أحكامه أو أي أمر من أموره.',
        },
        {
          name: 'الباقي',
          Bool: true,
          name2: ' الدائم الوجود الموصوف بالبقاء.',
        },
        {
          name: 'الوارث',
          Bool: true,
          name2: 'من له ما في السماوات والأرض، رب كل شيء ووارثه ورازقه وراحمه.',
        },
        {
          name: 'الرّشيد',
          Bool: true,
          name2:
            'المرشد لأهل الطاعة، فأرشد من شاء بإرشاده وأشقى من شاء بإبعاده.',
        },
        {
          name: 'الصّبور',
          Bool: true,
          name2:
            'الذي يمهل وينظر ولا يعجل ولا يعاجل ولا يسارع وينزل الأمر بقدر معلوم.',
        },
      ],
      searchAzkar: '',
      array2: [
        {
          name1: 'أذكار الصباح',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِيْ النَّارِ وَعَذَابٍ فِيْ الْقَبْرِ.',
            },

            {
              athkar:
                'اللَّهُمَّ أَنْتَ رَبِّي لَّا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِر لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
            },
            {
              athkar:
                'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.',
            },
            {
              athkar:
                'اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            },
            {
              athkar:
                'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            },
            {
              athkar:
                'يَاحَيُّ، يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            },
            {
              athkar:
                'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّـي أَسْأَلُكَ خَـيْرَ هَذَا الْـيَوْمِ ، فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.',
            },
            {
              athkar:
                'اللَّهُمَّ عَافِـني فِي بَدَنِي، اللَّهُمَّ عَافِـنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُبِكَ مِنَ الْكُفْر، وَالفَقْرِ، وَأَعُوذُبِكَ مِنْ عَذَابِ الْقَبْرِ ، لَا إلَهَ إلاَّ أَنْتَ.',
            },
            {
              athkar:
                'حَسْبِيَ اللَّهُ لَآ إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            },
            {
              athkar:
                'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي، وَدُنْيَايَ، وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيَ.',
            },
            {
              athkar:
                'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّماوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            },

            {
              athkar:
                'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الَْأرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            },
            {
              athkar:
                'رَضِيتُ باللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِيناً، وَبِمُحَمَّدٍ صَلَى اللَّهُ عَلِيهِ وَسَلَّمَ نَبِيَّاً.',
            },
            {
              athkar:
                'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ .',
            },
            {
              athkar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ .',
            },
            {
              athkar:
                'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ .',
            },
          ],
        },
        {
          name1: 'أذكار المساء',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'مْسَيْنَا وَاَمْسَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا اللَّيْلَةِ وَخَيْرَ مَا بَعْـدَهـا، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا اللَّيْلَةِ وَشَرِّ مَا بَعْـدَهـا، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِيْ النَّارِ وَعَذَابٍ فِيْ الْقَبْرِ',
            },

            {
              athkar:
                'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَـيْكَ المَصِيْر',
            },
            {
              athkar:
                'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي، وَدُنْيَايَ، وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيَ.',
            },
            {
              athkar:
                'اللَّهُمَّ أَنْتَ رَبِّي لَّا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِر لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.',
            },
            {
              athkar:
                'اللَّهُمَّ أَمْسَيْنَا نُشْهِدُكَ وَنُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلاَئِكَتَكَ وَجَمِيعَ خَلْقِكَ بِأَنَّكَ الله لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.',
            },
            {
              athkar:
                'اللَّهُمَّ مَا اََمْسَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            },
            {
              athkar:
                'اللَّهُمَّ عَافِـني فِي بَدَنِي، اللَّهُمَّ عَافِـنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُبِكَ مِنَ الْكُفْر، وَالفَقْرِ، وَأَعُوذُبِكَ مِنْ عَذَابِ الْقَبْرِ ، لَا إلَهَ إلاَّ أَنْتَ.',
            },
            {
              athkar:
                'حَسْبِيَ اللَّهُ لَآ إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            },
            {
              athkar:
                'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّماوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            },
            {
              athkar:
                'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الَْأرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            },
            {
              athkar:
                'رَضِيتُ باللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِيناً، وَبِمُحَمَّدٍ صَلَى اللَّهُ عَلِيهِ وَسَلَّمَ نَبِيَّاً.',
            },
            {
              athkar:
                'يَاحَيُّ، يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            },
            {
              athkar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ .',
            },
            {
              athkar:
                'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ .',
            },
          ],
        },

        {
          name1: 'قبل النوم',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                ' قُلْ هُوَ ٱللهُ أَحَدٌ * ٱللهُ ٱلصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ * ',
            },
            {
              athkar:
                'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ * مِن شَرِّ مَا خَلَقَ * وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ * وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ *',
            },
            {
              athkar:
                'أَعُوذُ بِرَبِّ ٱلنَّاسِ * مَلِكِ ٱلنَّاسِ * إِلَـٰهِ ٱلنَّاسِ * مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ * ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ * مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ',
            },
            {
              athkar:
                'ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ كُلٌّ ءَامَنَ بِٱللهِ وَمَلَـٰٓئِكَـتِهِۦ وَكُـتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِۦ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّـنَا وَإِلَيْكَ ٱلْمَصِيرُ* لَا يُكَلِّفُ ٱللهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْـتَسَبَتْ رَبَّـنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّـنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُ عَلَى ٱلَّذِينَ مِن قَبْلِنَا رَبَّـنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ أَنْتَ مَوْلَـٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ *',
            },
            {
              athkar:
                'بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا، بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.',
            },
            {
              athkar:
                'اللَّهمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا. اللَّهمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ.',
            },
            {
              athkar: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.',
            },
            {
              athkar: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.',
            },
            {
              athkar: 'سُبْحَانَ اللهِ  ',
            },
            {
              athkar: 'الْحَمْدُ لِلهِ  ',
            },
            {
              athkar: 'اللهُ أَكْبَرُ',
            },
            {
              athkar:
                'اللهُمَّ رَبَّ السَّمَاوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ، اللهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ، وَأَغْنِنَا مِنَ الْفَقْرِ.',
            },
            {
              athkar:
                'اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلّا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ.',
            },
            {
              athkar:
                'اللَّهمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ رَبَّ كُلِّ شَيء  وَمَلِيْكَهُ، أَشْهَدُ أَنْ لا إِلَهََ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوْءاً أَوْ أَجُرَّهُ~ُ إِلَى مُسْلِم.',
            },
            {
              athkar:
                'اَلْحَمْدُ للهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا، وَآوَانَا، فَكَمْ مِمَّنْ لا كَافِيَ لَه  وَلا مُؤْوِي.',
            },
          ],
        },

        {
          name1: 'الاستيقاظ',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'اَلْحَمْدُ لِلَّهِ الَّذي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.',
            },
            {
              athkar:
                'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، سُبْحَانَ اللهِ وَالْحَمْدُ لِلهِ ، وَلَا إِلَهَ إِلَّا اللهُ وَاللهُ أَكْـبَرُ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ رَبِّ اغْفِرْ لِي.',
            },
            {
              athkar:
                'اَلْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ.',
            },
          ],
        },
        {
          name1: 'ختم الصلاة',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'أَسْتَغْفِرُ اللَّهَ . (ثَلاثاً) اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالإِكْرَامِ .',
            },
            {
              athkar:
                'لَا إلَهَ إِلاَّ اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.',
            },
            {
              athkar:
                'سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ. (ثلاثاً وثلاثين) لَا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ .',
            },
            {
              athkar:
                'لَا إِلَهَ إِلَّا اللَّهُ وَحَدْهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            },
            {
              athkar:
                'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً .',
            },
          ],
        },

        {
          name1: 'دعاء الاستفتاح',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الأَ بْيَضُ مِنَ الدَّنَسِ ، اللّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرْدِ.',
            },
            {
              athkar:
                'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ.',
            },
            {
              athkar:
                'وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفَاً وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ صَلاَتِي، وَنُسُكِي، وَمَحْيَايَ، وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ. اللَّهُمَّ أَنْتَ المَلِكُ لاَ إِلَهَ إِلاَّ أَنْتَ، أَنْتَ رَبِّي وَأَنَا عَبْدُكَ، ظَلَمْتُ نَفْسِي وَاعْتَرَفْتُ بِذَنْبِي فَاغْفِرْ لِي ذُنُوبي جَمِيعَاً إِنَّهُ لاَ يَغْفِرُ الذُّنوبَ إِلاَّ أَنْتَ. وَاهْدِنِي لِأَحْسَنِ الأَخْلاقِ لاَ يَهْدِي لِأَحْسَنِها إِلاَّ أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لاَ يَصْرِفُ عَنِّي سَيِّئَهَا إِلاَّ أَنْتَ، لَبَّيْكَ وَسَعْدَيْكَ، وَالخَيْرُ كُلُّهُ بِيَـــــــدَيْكَ، وَالشَّـــــرُّ لَيْسَ إِلَيْــــــكَ، أَنَا بِكَ وَإِلَيْكَ، تَبارَكْتَ وَتَعَالَيْتَ، أَسْتَغْفِرُكَ وَأَتوبُ إِلَيْكَ.',
            },
            {
              athkar:
                'اللَّهُمَّ رَبَّ جِبْرَائِيلَ، وَمِيْكَائِيلَ، وَإِسْرَافِيلَ، فَاطِرَ السَّمَوَاتِ وَالأَرْضِ، عَالِمَ الغَيْبِ وَالشَّهَادَةِ أَنْتَ تَحْكُمُ بَيْنَ عِبَادِكَ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ. اهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُسْتَقيمٍ.',
            },
          ],
        },
        {
          name1: '  بعد التشهد الأخير',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْمَأْثَمِ وَالْمَغْرَمِ.',
            },
            {
              athkar:
                'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْماً كَثِيراً، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ.',
            },
            {
              athkar:
                'اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ، وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي. أَنْتَ الْمُقَدِّمُ، وَأَنْتَ الْمُؤَخِّرُ لَا إِلهَ إِلَاَّ أَنْتَ.',
            },
          ],
        },
        {
          name1: 'دعاء الركوع',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ.',
            },
            {
              athkar:
                'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي.',
            },
            {
              athkar: 'سُبُّوحٌ، قُدُوسٌ، رَبُّ الْمَلَائِكَةِ وَالرُّوحِ.',
            },
            {
              athkar:
                'اللَّهُمَّ لَكَ رَكَعْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ خَشَعَ لَكَ سَمْعِي، وَبَصَرِي وَمُخِّي، وَعَظْمِي، وَعَصَبِي، وَمَا اسْتَقَلَّ بِهِ قَدَمِي.',
            },
            {
              athkar:
                'سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ.',
            },
          ],
        },
        {
          name1: 'دعاء السجود',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar: 'سُبْحَانَ رَبِّيَ الأَعْلَى',
            },
            {
              athkar:
                'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي',
            },
            {
              athkar: 'سُبُّوحٌ، قُدُوسٌ، رَبُّ الْمَلَائِكَةِ وَالرُّوحِ.',
            },
            {
              athkar:
                'اللَّهُمَّ لَكَ سَجَدْتُ وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَصَوَّرَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللهُ أَحْسَنُ الْخَالِقِينَ.',
            },
            {
              athkar:
                'سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ.',
            },
            {
              athkar:
                'اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مَنْ عُقُوبَتِكَ، وَاَعُوذُ بِكَ مِنْكَ، لَا أُحصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ.',
            },
          ],
        },
        {
          name1: 'بعد الاكل والشرب',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'الْحَمْدُ لِلهِ حَمْدًا كَثِيرًا طَـيِّـبًا مُبَارَكًا فِيهِ ، غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ وَلَا مُسْتَغْنًى عَنْهُ رَبُّنَا.',
            },
            {
              athkar:
                'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ، مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ.',
            },
          ],
        },
        {
          name1: 'ما يقال بين السجدتين',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar: 'رَبِّ اغْفِرْ لِي رَبِّ اغْفِرْ لِي.',
            },
            {
              athkar:
                'اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي',
            },
          ],
        },
        {
          name1: 'بعد اكتمال الوضوء',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ.',
            },
            {
              athkar:
                'اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
            },
            {
              athkar:
                'سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتوبُ إِلَيْكَ',
            },
          ],
        },

        {
          name1: 'عند سماع الأذان',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّداً الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَاماً مَحْمُوداً الَّذِي وَعَدْتَهُ، إَنَّكَ لَا تُخْلِفُ الْمِيعَادَ.',
            },
            {
              athkar:
                'يَقُولُ مِثْلَ مَا يَقُولُ المُؤَذِّنُ إِلاَّ فِي ((حَيَّ عَلَى الصَّلَاةِ وَحَيَّ عَلَى الْفَلَاحِ)) فَيقُولُ: ((لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ)).',
            },
          ],
        },

        {
          name1: 'الاستخارة',
          Bool: true,
          chevron: true,
          many: [
            {
              athkar:
                'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمَكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ، وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ- خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي- عَاجِلِهِ وَآجِلِهِ- فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي- عَاجِلِهِ وَآجِلِهِ- فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ.',
            },
          ],
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
          Img: require('../imgs/alex.jpg'),
        },
        {
          ExplorText: 'الغربية',
          Bool: true,
          Open: true,
          Img: require('../imgs/المحلة.jpg'),
        },
        {
          ExplorText: 'الدقهلية',
          Bool: true,
          Open: true,
          Img: require('../imgs/المنصورة.jpg'),
        },
        {
          ExplorText: 'الجيزة',
          Bool: true,
          Open: true,
          Img: require('../imgs/giza.jpg'),
        },
        {
          ExplorText: 'الإسماعيلية',
          Bool: true,
          Open: true,
          Img: require('../imgs/الإسماعيلية.jpg'),
        },
        {
          Bool: true,
          ExplorText: 'أسوان',
          Open: true,
          Img: require('../imgs/أسوان.jpg'),
        },
        {
          ExplorText: 'أسيوط',
          Bool: true,
          Open: true,
          Img: require('../imgs/اسيوط.jpg'),
        },
        {
          ExplorText: 'الأقصر',
          Bool: true,
          Open: true,
          Img: require('../imgs/مدينة الاقصر.jpg'),
        },
        {
          ExplorText: 'البحر الأحمر',
          Bool: true,
          Open: true,
          Img: require('../imgs/الغردقة.jpg'),
        },
        {
          Bool: true,
          ExplorText: 'دمنهور',
          Open: true,
          Img: require('../imgs/دمنهور.jpg'),
        },
        {
          ExplorText: 'بني سويف',
          Bool: true,
          Open: true,
          Img: require('../imgs/بنى سويف.jpg'),
        },
        {
          ExplorText: 'بور سعيد',
          Bool: true,
          Open: true,
          Img: require('../imgs/بورسعيد.jpg'),
        },
        {
          ExplorText: 'جنوب سيناء',
          Bool: true,
          Open: true,
          Img: require('../imgs/دهب.jpg'),
        },
        {
          Bool: true,
          ExplorText: 'دمنهور',
          Open: true,
          Img: require('../imgs/دمنهور.jpg'),
        },

        {
          ExplorText: 'دمياط',
          Bool: true,
          Open: true,
          Img: require('../imgs/دمياط.jpg'),
        },
        {
          ExplorText: 'سوهاج',
          Bool: true,
          Open: true,
          Img: require('../imgs/سوهاج.jpg'),
        },
        {
          Bool: true,
          ExplorText: 'السويس',
          Open: true,
          Img: require('../imgs/السويس.jpg'),
        },
        {
          ExplorText: 'الشرقية',
          Bool: true,
          Open: true,
          Img: require('../imgs/الزقازيق.jpg'),
        },
        {
          ExplorText: 'شمال سيناء',
          Bool: true,
          Open: true,
          Img: require('../imgs/العريش.jpg'),
        },
        {
          ExplorText: 'الفيوم',
          Bool: true,
          Open: true,
          Img: require('../imgs/الفيوم.jpg'),
        },
        {
          ExplorText: 'قنا',
          Bool: true,
          Open: true,
          Img: require('../imgs/قنا.jpg'),
        },
        {
          ExplorText: 'مرسى مطروح',
          Bool: true,
          Open: true,
          Img: require('../imgs/مرسى مطروح.jpg'),
        },
        {
          ExplorText: 'كفر الشيخ',
          Bool: true,
          Open: true,
          Img: require('../imgs/كفر الشيخ.jpg'),
        },
        {
          ExplorText: 'المنيا',
          Bool: true,
          Open: true,
          Img: require('../imgs/المنيا.jpg'),
        },
        {
          ExplorText: 'الوادي الجديد',
          Bool: true,
          Open: true,
          Img: require('../imgs/الفرافرة.jpg'),
        },
        {
          ExplorText: 'المنوفية',
          Bool: true,
          Open: true,
          Img: require('../imgs/شبين الكوم.jpg'),
        },
        {
          ExplorText: 'المنصورة الجديدة',
          Bool: true,
          Open: true,
          Img: require('../imgs/المنصورة الجديدة.jpg'),
        },
        {
          ExplorText: 'القليوبية',
          Bool: true,
          Open: true,
          Img: require('../imgs/بنها.jpg'),
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
      this.setState({
        count: 0,
        Text1: ' لاَ إِلَهَ إِلَّا اللَّهُ، وَحْدَهُ لاَ شَرِيكَ لَهُ',
      });
    }
  }
  ChangeText() {
    let Value = this.state.count;
    let NewText = this.state.Text1;

    if (Value < 33) {
      NewText = ['سُبْحَانَ اللَّهِ وَبِحَمْدِهِ '];
    } else if (Value < 66) {
      NewText = ['ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ '];
    } else if (Value > 65 && Value < 99) {
      NewText = ['وَاللَّهُ أَكْبَر'];
    } else {
      NewText = [' لاَ إِلَهَ إِلَّا اللَّهُ، وَحْدَهُ لاَ شَرِيكَ لَهُ'];
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
          source={require('../imgs/yahya.jpg')}
          style={{flex: 1}}>
          <View style={style.background}>
            <View style={style.salam}>
              <Text style={{fontSize: 50, color: '#fff', fontWeight: '700'}}>
                السَلآْم عَلْيُكّمٌ
              </Text>
            </View>
            <View style={style.Logo}>
              <Image source={require('../imgs/zikrno.png')} />
            </View>
            <View style={style.name}>
              {/* <Text
                style={{fontSize: 35, color: '#fff', fontWeight: '800'}}></Text>
              <Text style={{fontSize: 35, color: '#fff', fontWeight: '800'}}>
               
    </Text>*/}
            </View>
            <TouchableOpacity
              style={{
                height: '8%',
                width: '50%',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#80421c',
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
              {/** 
              <TouchableOpacity
                onPress={() => {
                  this.setState({model: false});
                }}>
                <AntDesign name="left" size={30} color="#4f5051" />
              </TouchableOpacity>
*/}
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
                    backgroundColor: this.state.dark ? '#3d3e43' : '#875133',
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
                  <ScrollView
                    contentContainerStyle={{
                      backgroundColor: '#cbb89d',
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
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
                            : '#875133',
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
                            : '#875133',
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
                            : '#875133',
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
                            : '#875133',
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
                            : '#875133',
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
                            : '#875133',
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
                      backgroundColor: '#875133',
                      borderRadius: 25,
                      paddingVertical: 10,
                      marginTop: 10,
                    }}>
                    {/* <TouchableOpacity
                      onPress={() => {
                        this.setState({modelDoua: false});
                      }}>
                      <AntDesign name="arrowleft" size={30} color="#fff" />
                    </TouchableOpacity>*/}
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
                          color: '#fff',
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
                      backgroundColor: '#915B3D',
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
                                      backgroundColor: '#cbb89d',
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
                                  {item.chevron
                                    ? null
                                    : item.multi.map(items => (
                                        <View
                                          style={{
                                            width: '100%',
                                            borderRadius: 20,
                                            backgroundColor: '#231f20',
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
                                            {items.Doua}
                                          </Text>
                                        </View>
                                      ))}

                                  {/**
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
                                      </View>*/}
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
                    {/*  <TouchableOpacity
                      onPress={() => {
                        this.setState({modelQuran: false});
                      }}>
                      <AntDesign name="arrowleft" size={30} color="#875133" />
                    </TouchableOpacity>*/}
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: '800',
                        color: '#875133',
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
                      backgroundColor: '#875133',
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
                                      backgroundColor: '#cbb89d',
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
                                        color: '#875133',
                                        fontWeight: '800',
                                      }}>
                                      {item.Type}
                                    </Text>

                                    <Text
                                      style={{
                                        fontSize: 20,
                                        color: '#fff',
                                        fontWeight: '800',
                                      }}>
                                      {item.name}
                                    </Text>

                                    <View
                                      style={{
                                        // height: '41%',
                                        width: '15%',
                                        borderRadius: 25,
                                        backgroundColor: '#fff',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          color: '#231f20',
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
                    {/**  <TouchableOpacity
                      onPress={() => {
                        this.setState({modelsipha: false});
                      }}>
                      <AntDesign name="arrowleft" size={30} color="#875133" />
                    </TouchableOpacity>*/}
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: '800',
                        color: '#875133',
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

                      backgroundColor: '#875133',
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
                        backgroundColor: '#875133',
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
                        backgroundColor: '#875133',
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
                        backgroundColor: '#231f20',
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
                          color: '#fff',
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
                        backgroundColor: '#cbb89d',
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
                          backgroundColor: '#875133',
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
                  {/*} <TouchableOpacity
                    onPress={() => {
                      this.setState({modelNames: false});
                    }}>
                    <AntDesign name="left" size={30} color="#875133" />
                  </TouchableOpacity>*/}
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
                        الْأَسْمَاءُ الْحُسْنَى
                      </Text>
                    </View>

                    <Text
                      style={{fontSize: 15, fontWeight: '600', color: '#fff'}}>
                      99 Names
                    </Text>
                    <Text
                      style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>
                      «عن أبي هريرة رضي الله عنه : أنَّ رَسولَ اللَّهِ صَلَّى
                      اللهُ عليه وسلَّمَ قالَ: إنَّ لِلَّهِ تِسْعَةً وتِسْعِينَ
                      اسْمًا مِئَةً إلَّا واحِدًا، مَن أحْصَاهَا دَخَلَ
                      الجَنَّةَ. »
                    </Text>
                    <Text
                      style={{fontSize: 15, fontWeight: '600', color: '#fff'}}>
                      صحيح البخاري الصفحة أو الرقم: 2736
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
                                      backgroundColor: '#875133',
                                      justifyContent: 'flex-end',
                                      alignItems: 'center',
                                      borderTopRightRadius: 35,
                                      borderBottomLeftRadius: 35,
                                      padding: 10,
                                      marginVertical: 3,
                                      paddingHorizontal: 10,
                                    }}>
                                    <View>
                                      <Text
                                        style={{
                                          fontSize: 25,
                                          color: '#fff',
                                          fontWeight: '900',
                                        }}>
                                        {item.name}
                                      </Text>
                                      <View
                                        style={{
                                          paddingLeft: 10,
                                        }}>
                                        <Text
                                          style={{
                                            fontSize: 15,
                                            color: '#fff',
                                            //paddingHorizontal: 10,

                                            //marginLeft: 10,
                                            paddingLeft: 10,
                                          }}>
                                          {item.name2}
                                        </Text>
                                      </View>
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
                      backgroundColor: '#875133',
                      borderRadius: 25,
                      paddingVertical: 10,
                      marginTop: 10,
                    }}>
                    {/*<TouchableOpacity
                      onPress={() => {
                        this.setState({modelAthkar: false});
                      }}>
                      <AntDesign name="left" size={30} color="#fff" />
                    </TouchableOpacity>*/}
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
                      backgroundColor: '#875133',
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

                                      backgroundColor: '#cbb89d',
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
                                  {item.chevron
                                    ? null
                                    : item.many.map(items => (
                                        <View
                                          style={{
                                            width: '100%',
                                            borderRadius: 20,
                                            backgroundColor: '#231f20',
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
                                            {items.athkar}
                                          </Text>
                                        </View>
                                      ))}
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
                    {/*<TouchableOpacity
                      onPress={() => {
                        this.setState({modelRamadan: false});
                      }}>
                      <AntDesign name="left" size={30} color="#231f20" />
                    </TouchableOpacity>*/}
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#231f20',
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
                        backgroundColor: '#875133',
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
                                    backgroundColor: '#cbb89d',
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
    height: '55%',
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
    backgroundColor: '#cbb89d',
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
