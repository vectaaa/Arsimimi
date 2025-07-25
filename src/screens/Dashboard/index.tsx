import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen} from '../../components/Screen/AppScreen';
import {Icons} from '../../Theme/Icons';
import {COLORS} from '../../Theme/Colors';
import {FlatList} from 'react-native-gesture-handler';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {Button} from '../../components/Buttons/Button';
import {PressableOpacity} from '../../components/Buttons/PressebleOpacity';
import {HomeStackScreenProps} from '../../navigation/types';

type SubjectSlides = {
  id: string;
  title: string;
};
const subjectSlides: SubjectSlides[] = [
  {
    id: '1',
    title: 'All Subjects',
  },
  {
    id: '2',
    title: 'Maths',
  },
  {
    id: '3',
    title: 'English',
  },
  {
    id: '4',
    title: 'Physics',
  },
];
const Dashboard = ({navigation}: HomeStackScreenProps<'Dashboard'>) => {
  const subjectView = ({item}: {item: SubjectSlides}) => {
    return (
      <View style={styles.subjectContainer}>
        <Text style={styles.textSubject}>{item.title}</Text>
      </View>
    );
  };

  const openPracticeTest = () => {
    navigation.navigate('PracticeTest');
  };
  return (
    <AppScreen>
      <View style={styles.topRow}>
        <View style={styles.leftIcons}>
          <Icons.MaleAvatarIcon />
          <Text style={styles.font}>Hi, Amos</Text>
          <Icons.StarIcon />
        </View>

        <View style={styles.rightIcons}>
          <Icons.NotificationIcon />
          <Icons.SearchIcon />
        </View>
      </View>

      <View>
        <FlatList
          data={subjectSlides}
          renderItem={subjectView}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styling.padding}
        />

        <View style={styles.quickTestBlock}>
          <View style={styles.innerBlock}>
            <Text style={styles.textStyle2}>
              Tell us your level with a quick test
            </Text>
            <View>
              <Button
                testingSuffix={''}
                buttonStyle={{height: 36, marginTop: 16}}
                title="Practice Test"
                textStyle={{
                  fontFamily: 'georgia',
                  fontWeight: '400',
                  fontSize: 17,
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.learnText}>
          <View style={styles.innerLearnText}>
            <Text
              style={{
                fontSize: 13,
                textAlign: 'center',
                justifyContent: 'center',
                color: COLORS.ORANGE_THICK,
                fontFamily: 'georgia',
                fontWeight: '400',
              }}>
              Learning on ASSIMIMI is like a game where you get smarter with
              each level. The more you play, the better you get!
            </Text>
          </View>
        </View>

        {/* Exam Mode */}
        <View style={styles.whiteContainer}>
          <Text style={styles.textBold}>Exam Mode</Text>
          <Text style={styles.textLow}>
            Exam-like conditions with timed tests, set difficulty levels, and
            subject-specific questions.
          </Text>
          <PressableOpacity testingSuffix={''}>
            <View style={styles.horizontalArrange}>
              <Text style={styles.textLowButton}>Start Exam Mode</Text>
              <Icons.ArrowRight />
            </View>
          </PressableOpacity>
        </View>

        {/* Practice Mode       */}
        <View style={styles.whiteContainer}>
          <Text style={styles.textBold}>Practice Mode</Text>
          <Text style={styles.textLow}>
            Customize Your Practice: Select difficulty, time limit, subjects and
            topics.
          </Text>
          <PressableOpacity testingSuffix={''} onPress={openPracticeTest}>
            <View style={styles.horizontalArrange}>
              <Text style={styles.textLowButton}>Take Practice Test</Text>
              <Icons.ArrowRight />
            </View>
          </PressableOpacity>
        </View>
      </View>
    </AppScreen>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalArrange: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomColor: COLORS.ORANGE_THICK,
    borderBottomWidth: 0.4,
    alignSelf: 'flex-end',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 24,
    alignContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    fontFamily: 'georgia',
    fontWeight: '700',
    fontSize: 17,
    color: COLORS.ORANGE_THICK,
    marginBottom: 16,
  },
  textLow: {
    fontFamily: 'georgia',
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.ORANGE_THICK,
    lineHeight: 24,
  },
  textLowButton: {
    fontFamily: 'georgia',
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.ORANGE_LIGHT_100,
    lineHeight: 24,
  },
  leftIcons: {
    flexDirection: 'row',
    alignContent: 'center',
    gap: 9,
    alignItems: 'center',
  },
  font: {
    fontFamily: 'georgiab',
    color: COLORS.ORANGE_THICK,
    fontSize: 17,
  },
  textSubject: {
    color: COLORS.ORANGE_THICK,
    fontSize: 13,
    fontFamily: 'georgia',
    fontWeight: '400',
  },
  subjectContainer: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.TRANSPARENT,
    borderRadius: 4,
    borderColor: COLORS.BORDER_ORANGE,
    borderWidth: 0.4,
    height: 32,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 10,
  },

  quickTestBlock: {
    height: 150,
    width: '100%',
    backgroundColor: COLORS.BACKGROUND_COLOR_200,
    borderRadius: 8,
    marginTop: 32,
  },

  textStyle2: {
    fontFamily: 'georgia',
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.ORANGE_THICK,
    textAlign: 'center',
  },
  innerBlock: {
    paddingHorizontal: 30,
    paddingVertical: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  learnText: {
    height: 92,
    width: '100%',
    justifyContent: 'center',
    marginTop: 32,
  },
  innerLearnText: {
    marginHorizontal: 16,
    marginVertical: 16,
    height: 60,
    textAlign: 'center',
  },
  whiteContainer: {
    height: 150,
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    marginTop: 32,
    padding: 10,
  },
});
