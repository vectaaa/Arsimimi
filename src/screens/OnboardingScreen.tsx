import {
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import {IMAGES} from '../Theme/Images';
import {Typography} from '../Typography';
import {Button} from '../components/Buttons/Button';
import {Icons} from '../Theme/Icons';
import {PressableOpacity} from '../components/Buttons/PressebleOpacity';

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
    title: 'Unlimited Study Material',
    subtitle:
      'We’ll help you achieve your full potential by providing the tools to achieve your goals',
  },
  {
    id: '2',
    image: IMAGES.ONBOARDING2,
    title: 'Stay ahead of your peers',
    subtitle:
      'We’ll help you achieve your full potential by providing the tools to achieve your goals',
  },
  {
    id: '3',
    image: IMAGES.ONBOARDING3,
    title: 'Select your access level',
    subtitle:
      'We’ll help you achieve your full potential by providing the tools to achieve your goals',
  },
];

const OnboardingScreen = ({navigation}: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = React.useRef<FlatList<SlidesTypes>>(null);

  const skipSlide = () => {
    const lastSlideIndex = slides.length - 1;
    ref?.current?.scrollToOffset({
      offset: lastSlideIndex * width,
      animated: true,
    });
    setCurrentSlideIndex(lastSlideIndex);
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const Slide = ({item}: {item: SlidesTypes}) => {
    return (
      <View style={[styles.sliderStyle, {width, height}]}>
        <View style={styles.titleViewStyle}>
          <Icons.ArsimimiLogo />
        </View>
        {/* <View style={styles.horizonStretch}>
          {currentSlideIndex === slides.length - 1 ? (
            <TouchableOpacity onPress={() => navigation.replace('Register')}>
              <Text style={styles.skipStyle}>Finish</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={SkipSlide}>
              <Text style={styles.skipStyle}>Skip</Text>
            </TouchableOpacity>
          )}
        </View> */}
        <View
          style={[
            styles.imageText,
            screenDiagonal < 5.5 ? {marginTop: -30, marginBottom: 20} : {},
          ]}>
          <View style={styles.imageSubtitleContainer}>
            <Image source={item.image} style={styles.sliderImage} />
            <Typography>Get Started</Typography>
            <Text style={styles.title}>{item.title}</Text>
            <Typography style={styles.subtitle}>{item.subtitle}</Typography>
          </View>
        </View>
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

        <View style={[styles.sliderContainer]}>
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
          <View style={styles.buttonContainer}>
            <View style={styles.bottomEffect}>
              <Button
                testingSuffix={''}
                title={'Next'}
                buttonContainerStyle={{width: '100%'}}
                buttonStyle={styles.btnlng}
              />
              <PressableOpacity
                onPress={
                  currentSlideIndex === slides.length - 1
                    ? () => navigation.replace('Register')
                    : skipSlide
                }
                testingSuffix={''}>
                <Typography style={styles.gap}>
                  {currentSlideIndex === slides.length - 1 ? 'Finish' : 'Skip'}
                </Typography>
              </PressableOpacity>
            </View>
          </View>
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
    marginTop: screenDiagonal > 5.5 ? 64 : 36,
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bottomEffect: {flexDirection: 'column'},

  gap: {marginBottom: 10, alignSelf: 'center'},
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 40,
  },
  arsi: {
    fontFamily: 'gill-ultra-bold',
  },
  titleViewStyle: {
    marginBottom: screenDiagonal > 5.5 ? 16 : 8,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  sliderStyle: {
    flex: 1,
    paddingHorizontal: 15,
    //   paddingTop: 20,
    alignContent: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: screenDiagonal > 5.5 ? 24 : 18,
    fontFamily: 'georgia',
    fontWeight: 'bold',
    color: '#3c1f0e',
    marginBottom: 5,
  },
  subtitle: {
    paddingHorizontal: 16,
    paddingTop: 10,
    fontSize: screenDiagonal > 5.5 ? 17 : 15,
    alignSelf: 'center',
    lineHeight: 17 * 1.5,
    width: '100%',
    textAlign: 'center',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  sliderImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageSubtitleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
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
  },
  buttonGetStarted: {
    height: 50,
  },
  btn: {
    height: 46,
    width: 310,
    backgroundColor: '#D27A24',
    borderRadius: 4,
    justifyContent: 'center',
  },
  btnlng: {
    width: '100%',
    backgroundColor: '#D27A24',
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  loginText: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'georgia',
    fontSize: 17,
    lineHeight: 25.5,
  },
});
