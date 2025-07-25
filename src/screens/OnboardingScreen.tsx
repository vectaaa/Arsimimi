import {
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import {IMAGES} from '../Theme/Images';

// Get the width of the screen
const {width, height} = Dimensions.get('window');
// Calculate the screen diagonal size in inches
const screenDiagonal = Math.sqrt(width * width + height * height) / 160;
console.log(screenDiagonal, 'Screen size');

type SlidesTypes = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
};
const slides: SlidesTypes[] = [
  {
    id: '1',
    image: IMAGES.ONBOARDING1,
    title: 'Structure \nyour learning',
    subtitle:
      'We’ll help you achieve your full potential by providing the tools to achieve your goals',
  },
  {
    id: '2',
    image: IMAGES.ONBOARDING2,
    title: 'Stay ahead of \nyour peers',
    subtitle:
      'We’ll help you achieve your full potential by providing the tools to achieve your goals',
  },
  {
    id: '3',
    image: IMAGES.ONBOARDING3,
    title: 'Select your \naccess level',
    subtitle:
      'We’ll help you achieve your full potential by providing the tools to achieve your goals',
  },
  {
    id: '4',
    image: IMAGES.ONBOARDING4,
    title: 'Monitor your \nchild’s progress',
    subtitle:
      'We’ll help you achieve your full potential by providing the tools to achieve your goals',
  },
];

const OnboardingScreen = ({navigation}: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = React.useRef(null);

  // eslint-disable-next-line react/no-unstable-nested-components
  const Slide = ({item}: {item: SlidesTypes}) => {
    const SkipSlide = () => {
      const lastSlideIndex = slides.length - 1;
      const offset = lastSlideIndex * width; // Correct variable name
      ref?.current?.scrollToOffset({offset, animated: true}); // Proper offset and animated parameter
      setCurrentSlideIndex(lastSlideIndex);
    };
    return (
      <View style={[styles.sliderStyle, {width, height}]}>
        <View style={styles.horizonStretch}>
          <View style={styles.titleViewStyle}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.rectangle} />
          </View>
          {currentSlideIndex === slides.length - 1 ? (
            <TouchableOpacity onPress={() => navigation.replace('Register')}>
              <Text style={styles.skipStyle}>Finish</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={SkipSlide}>
              <Text style={styles.skipStyle}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={[
            styles.imageText,
            screenDiagonal < 5.5 ? {marginTop: -30, marginBottom: 20} : {},
          ]}>
          <View style={styles.imageSubtitleContainer}>
            <Image source={item.image} style={styles.sliderImage} />
            {/* <LinearGradient colors={[]}/> */}
            <Text style={styles.subtitle} numberOfLines={2}>
              {item.subtitle}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const Footer = () => {
    return (
      <View style={styles.footerView1}>
        {currentSlideIndex === slides.length - 1 ? (
          <View>
            <View style={styles.buttonGetStarted}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('Register')}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.footerView2}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentSlideIndex === index && {
                    backgroundColor: '#D27A24',
                    width: 24,
                  },
                ]}
              />
            ))}
          </View>
        )}
      </View>
    );
  };

  const updateCurrentSLideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
    console.log(currentIndex);
  };

  return (
    <LinearGradient colors={['#f0f0f0', '#f8f0eb']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#f0f0f0'} barStyle={'dark-content'} />
        <View style={[styles.centeredView]}>
          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSLideIndex}
            pagingEnabled
            data={slides}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Slide item={item} />}
            keyExtractor={item => item.id}
            snapToAlignment="center"
            decelerationRate="fast"
          />
          <Footer />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleViewStyle: {
    paddingBottom: 70,
  },
  sliderStyle: {
    flex: 1,
    paddingHorizontal: 15,
    //   paddingTop: 20,
    alignContent: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'georgia',
    fontWeight: 'bold',
    color: '#3c1f0e',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#212121',
    paddingTop: 10,
    alignSelf: 'center',
    fontFamily: 'georgia',
    lineHeight: 19.5,
    width: '85%',
  },
  sliderImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    // paddingBottom: 100,
    // height: '0%',
  },
  imageSubtitleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // marginBottom: 64,
  },
  rectangle: {
    width: 100,
    height: 2,
    backgroundColor: '#D27A24',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width,
    top: screenDiagonal > 5.5 ? 94 : 47,
    paddingTop: 0,
  },
  footerView1: {
    height: '10%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: screenDiagonal > 5.5 ? 192 : 98,
  },
  footerView2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: '#FAD6BB',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  horizonStretch: {
    flexDirection: 'row',
    paddingTop: 0,
    justifyContent: 'space-between',
  },
  skipStyle: {
    fontFamily: 'georgia',
    color: '#212121',
  },
  imageText: {
    flex: 1,
    //   marginTop: -30,
  },
  buttonGetStarted: {
    height: 50,
    // marginTop: 50,
  },
  btn: {
    height: 46,
    width: 310,
    backgroundColor: '#D27A24',
    borderRadius: 4,
    justifyContent: 'center',
  },
  loginText: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'georgia',
    fontSize: 17,
    lineHeight: 25.5,
  },
});
