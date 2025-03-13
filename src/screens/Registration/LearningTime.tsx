import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import StageFourIcon from '../../assets/Svg/stage4.svg';
import GlobeIcon from '../../assets/Svg/Globe.svg';
import Slider from '@react-native-community/slider';
import {COLORS} from '../../Theme/Colors';

const createStyles = (isSmallDevice: boolean, width: number) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container3: {
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: isSmallDevice ? 10 : 15,
      paddingHorizontal: isSmallDevice ? 5 : 10,
    },
    logintext: {
      fontFamily: 'georgiab',
      fontSize: isSmallDevice ? 28 : 32,
      color: '#4A321F',
    },
    iconContainer: {
      margin: 20,
      alignItems: 'center',
    },
    timeText: {
      zIndex: 1,
      marginBottom: -40,
      fontSize: isSmallDevice ? 16 : 18,
    },
    globeImage: {
      marginTop: 53,
      flex: 1,
      alignItems: 'center',
    },
    slider: {
      width: width * 0.9,
      height: 40,
      alignSelf: 'center',
    },
    tickContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      alignSelf: 'center',
      marginTop: 10,
    },
    tick: {
      width: 1,
    },
    labelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      alignSelf: 'center',
      marginTop: 5,
    },
    label: {
      fontSize: 14,
      color: COLORS.ORANGE_THICK,
      fontWeight: '400',
      fontFamily: 'georgia',
    },
  });

const LearningTime = () => {
  const {width} = useWindowDimensions();
  const isSmallDevice = width < 375;
  const styles = createStyles(isSmallDevice, width);
  const [selectedHour, setSelectedHour] = useState(0);

  const formatHour = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour} ${period}`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container3}>
        <Text style={styles.logintext}>Learning{'\n'}Time</Text>
        <View style={styles.iconContainer}>
          <StageFourIcon width={24} height={24} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.globeImage}>
          <Text style={styles.timeText}>{formatHour(selectedHour)}</Text>
          <GlobeIcon>
            <Text style={styles.timeText}>{formatHour(selectedHour)}</Text>
          </GlobeIcon>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={23}
            step={1}
            value={selectedHour}
            onValueChange={value => setSelectedHour(value)}
            minimumTrackTintColor={COLORS.ORANGE_LIGHT}
            maximumTrackTintColor={COLORS.ORANGE_LIGHT}
            thumbTintColor={COLORS.ORANGE_NORMAL}
          />
          <View style={styles.tickContainer}>
            {Array.from({length: 24}, (_, i) => (
              <View key={i} style={styles.tick} />
            ))}
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>01:00</Text>
            <Text style={styles.label}>06:00</Text>
            <Text style={styles.label}>12:00</Text>
            <Text style={styles.label}>06:00</Text>
            <Text style={styles.label}>09:00</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearningTime;
