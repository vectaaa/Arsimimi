import {
  Alert,
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
import {useRegistrationCompleteMutation} from '../../Services/modules/student';
import {AuthStackScreenProps} from '@/navigation/types';
import {PressableOpacity} from '../../components/Buttons/PressebleOpacity';
import {RegistrationCompleteResponse} from '@/Types/StudentService';
import {CommonActions} from '@react-navigation/native';

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

const LearningTime = ({
  navigation,
  route,
}: AuthStackScreenProps<'LearningTime'>) => {
  const {width} = useWindowDimensions();
  const isSmallDevice = width < 375;
  const styles = createStyles(isSmallDevice, width);
  const [selectedHour, setSelectedHour] = useState(0);
  const [canNotify, setCanNotify] = useState(false);
  const {payloadStepOne, payloadStepTwo, payloadStepThree} = route.params;
  const [registrationComplete] = useRegistrationCompleteMutation();
  const formatHour = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour} ${period}`;
  };

  const navigateToDashboard = () => {
    navigation.dispatch(
      CommonActions.reset({
        routes: [{name: 'App'}],
      }),
    );
  };
  const onSubmit = () => {
    const payloadd = {
      name: payloadStepOne?.name,
      ageRange: payloadStepOne?.ageRange,
      guardianEmail: payloadStepOne?.guardianEmail,
      agreeToTerms: payloadStepOne?.agree,
      nameOfSchool: payloadStepTwo?.school,
      educationLevel: payloadStepTwo?.educationLevel,
      grade: payloadStepTwo?.class,
      examTypes: payloadStepTwo?.examTypes,
      goalDescription: payloadStepThree?.learningGoals,
      learningGoals: payloadStepThree?.learningGoalSet,
      learningTime: selectedHour,
      canNotify: true,
    };

    console.log(payloadd, 'New load');
    registrationComplete({
      name: payloadStepOne?.name,
      ageRange: payloadStepOne?.ageRange,
      guardianEmail: payloadStepOne?.guardianEmail,
      agreeToTerms: payloadStepOne?.agree,
      nameOfSchool: payloadStepTwo?.school,
      educationLevel: payloadStepTwo?.educationLevel,
      grade: payloadStepTwo?.class,
      examTypes: payloadStepTwo?.examTypes,
      goalDescription: payloadStepThree?.learningGoals,
      learningGoals: payloadStepThree?.learningGoalSet,
      learningTime: selectedHour,
      canNotify: true,
    })
      .unwrap()
      .then((res: RegistrationCompleteResponse) => {
        console.log(res);
        navigateToDashboard();
      })
      .catch(e => {
        Alert.alert(e, 'An error occurred');
      });
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

        <PressableOpacity
          onPress={onSubmit}
          style={stylesB.button}
          testingSuffix={''}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearningTime;

const stylesB = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: '100%',
    backgroundColor: COLORS.ORANGE_NORMAL,
    borderRadius: 4,
  },
});
