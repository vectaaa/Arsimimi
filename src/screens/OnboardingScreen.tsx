import { ImageSourcePropType, StatusBar, StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
import { IMAGES } from '../Theme/Images';

type SlidesTypes = {
    id: string,
    image: ImageSourcePropType,
    title: string,
    subtitle: string,
}
const slides: SlidesTypes[] = [
    {
       id: '1',
       image: IMAGES.ONBOARDING1,
       title: 'Structure \nyour learning',
       subtitle: 'We’ll help you achieve your full potential \nby providing the tools to achieve your goals',
    },
    {
       id: '2',
       image: IMAGES.ONBOARDING2,
       title: 'Stay ahead of \nyour peers',
       subtitle: 'We’ll help you achieve your full potential \nby providing the tools to achieve your goals',
    },
    {
       id: '3',
       image: IMAGES.ONBOARDING3,
       title: 'Select your \naccess level',
       subtitle: 'We’ll help you achieve your full potential \nby providing the tools to achieve your goals',
    },
    {
       id: '4',
       image: IMAGES.ONBOARDING4,
       title: 'Monitor your \nchild’s progress',
       subtitle: 'We’ll help you achieve your full potential \nby providing the tools to achieve your goals',
    },
];

const Slide = ({item}: {item: SlidesTypes}) => {
    return (
        <View style={styles.sliderStyle}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={styles.sliderImage}/>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );
};
const OnboardingScreen = () => {
  return (
    <LinearGradient colors={['#f0f0f0', '#f8f0eb']} style={styles.container}>
    <SafeAreaView >
        <StatusBar backgroundColor={'#f0f0f0'} barStyle={'dark-content'} />
        <FlatList 
            data={slides}
            horizontal
            renderItem={({item}) => <Slide item={item}/>
             }
        />
    </SafeAreaView>
    </LinearGradient>
  )
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderStyle: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,  // Space below the title
    },
    subtitle: {
        fontSize: 16,
        color: '#666',  // Lighter color for subtitle
    },
    sliderImage: {
        resizeMode: 'contain',
    },
});
