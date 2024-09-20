import {
    ImageSourcePropType,
    StatusBar,
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
import { IMAGES } from '../Theme/Images';

// Get the width of the screen
const { width, height } = Dimensions.get('window');

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
            'We’ll help you achieve your full potential by providing \nthe tools to achieve your goals',
    },
    {
        id: '2',
        image: IMAGES.ONBOARDING2,
        title: 'Stay ahead of \nyour peers',
        subtitle:
            'We’ll help you achieve your full potential by providing \nthe tools to achieve your goals',
    },
    {
        id: '3',
        image: IMAGES.ONBOARDING3,
        title: 'Select your \naccess level',
        subtitle:
            'We’ll help you achieve your full potential by providing \nthe tools to achieve your goals',
    },
    {
        id: '4',
        image: IMAGES.ONBOARDING4,
        title: 'Monitor your \nchild’s progress',
        subtitle:
            'We’ll help you achieve your full potential by providing \nthe tools to achieve your goals',
    },
];

const Slide = ({ item }: { item: SlidesTypes }) => {
    return (
        <View style={[styles.sliderStyle, { width, height }]}>
            <View style={styles.horizonStretch}>
                <View style={styles.titleViewStyle}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.rectangle} />
                </View>
                <Text style={styles.skipStyle}>Skip</Text>
            </View>
            <Image source={item.image} style={styles.sliderImage} />
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );
};

const OnboardingScreen = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    // eslint-disable-next-line react/no-unstable-nested-components
    const Footer = () => {
        return (
            <View style={styles.footerView1}>
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
            </View>
        );
    };
    return (
        <LinearGradient colors={['#f0f0f0', '#f8f0eb']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'#f0f0f0'} barStyle={'dark-content'} />
                <FlatList
                    // onMomentumScrollEnd={}
                    pagingEnabled
                    data={slides}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Slide item={item} />}
                    keyExtractor={item => item.id}
                    snapToAlignment="center"
                    decelerationRate="fast"
                />
                <Footer />
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
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'georgia',
        fontWeight: 'bold',
        color: '#3c1f0e',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 12,
        color: '#212121',
        paddingTop: 10,
        alignSelf: 'center',
        fontFamily: 'georgia',
    },
    sliderImage: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: '100%',
        height: '50%',
    },
    rectangle: {
        width: 100,
        height: 2,
        backgroundColor: '#D27A24',
    },
    footerView1: {
        height: '5%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    footerView2: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
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
        justifyContent: 'space-between',
    },
    skipStyle: {
        fontFamily: 'georgia',
        color: '#212121',
    },
});
