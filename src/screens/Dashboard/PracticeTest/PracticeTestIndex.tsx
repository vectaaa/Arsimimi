import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AppScreen} from '../../../components/Screen/AppScreen';
import {COLORS} from '../../../Theme/Colors';

const TOTAL_STEPS = 4;

const PracticeTestIndex = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    }
  };

  // Calculate width percentage for the active bar
  const progressPercent = (currentStep / TOTAL_STEPS) * 100;

  return (
    <AppScreen>
      <View>
        <Text>Back</Text>

        {/* Progress Bar Container */}
        <View style={styles.progressBarContainer}>
          {/* Background bar (cream) */}
          <View style={styles.progressBackground} />
          {/* Active bar (brown) */}
          <View
            style={[styles.progressActive, {width: `${progressPercent}%`}]}
          />
        </View>

        {/* Content area for each step */}
        <View style={styles.content}>
          <Text style={styles.textTitle}>Select Subject(s) {currentStep}</Text>
          <Text style={styles.textDesc}>
            Choose the subject you'd like to test your knowledge in
          </Text>

          {/* Replace with your actual step components */}
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentStep < TOTAL_STEPS ? 'Next' : 'Finish'}
          </Text>
        </TouchableOpacity>
      </View>
    </AppScreen>
  );
};

export default PracticeTestIndex;

const styles = StyleSheet.create({
  header: {
    marginVertical: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: 'transparent',
    marginBottom: 24,
    justifyContent: 'center',
    marginTop: 16,
  },
  progressBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.BACKGROUND_COLOR_200,
    borderRadius: 3,
  },
  progressActive: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: COLORS.ORANGE_LIGHT_100,
    borderRadius: 6,
  },
  content: {
    flex: 1,
  },
  nextButton: {
    backgroundColor: '#8b572a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignSelf: 'center',
    marginBottom: 32,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  textTitle: {
    fontFamily: 'georgia',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 20,
    color: COLORS.ORANGE_THICK,
  },
  textDesc: {
    fontFamily: 'georgia',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 30,
  },
});
