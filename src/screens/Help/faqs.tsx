import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HelpStackScreenProps} from '../../navigation/types';
import {AppScreen} from '../../components/Screen/AppScreen';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {COLORS} from '../../Theme/Colors';
import {Spacer} from '../../components/Spacer';
import {PressableOpacity} from '../../components/Buttons/PressebleOpacity';
import {Icons} from '../../Theme/Icons';

const Faqs = ({navigation}: HelpStackScreenProps<'Faqs'>) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <AppScreen>
      <View style={styles.rowArrange}>
        <View style={styles.columnArrange}>
        <Text style={styling.font}>Frequently Asked Questions</Text>
        <Text style={styling.descText}>Swift answers for common queries</Text>
        </View>
        <PressableOpacity onPress={navigateBack} testingSuffix={''}>
          <Icons.CloseIcon />
        </PressableOpacity>
      </View>
      <Spacer height={32} />
      <View>
        <Text style={styles.faqTitle}>
          What kind of information do you collect during sign-up?
        </Text>
        <Spacer height={8} />
        <Text style={styles.faqDesc}>
          We collect essential information to personalize your learning
          experience. This includes your name, email address, educational level,
          preferred exam types (optional), and school (optional). We respect
          your privacy and ensure your data is handled securely.
        </Text>
      </View>
      <Spacer height={16} />
      <View>
        <Text style={styles.faqTitle}>
          What happens if I forget my password?
        </Text>
        <Spacer height={8} />
        <Text style={styles.faqDesc}>
          We collect essential information to personalize your learning
          experience. This includes your name, email address, educational level,
          preferred exam types (optional), and school (optional). We respect
          your privacy and ensure your data is handled securely.
        </Text>
      </View>
      <Spacer height={16} />
      <View>
        <Text style={styles.faqTitle}>
          Why can’t I change my learning details?
        </Text>
        <Spacer height={8} />
        <Text style={styles.faqDesc}>
          We collect essential information to personalize your learning
          experience. This includes your name, email address, educational level,
          preferred exam types (optional), and school (optional). We respect
          your privacy and ensure your data is handled securely.
        </Text>
      </View>
    </AppScreen>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  faqTitle: {
    fontFamily: 'georgia',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 15,
    color: COLORS.ORANGE_NORMAL,
  },
  faqDesc: {
    fontFamily: 'georgia',
    fontSize: 14,
    color: COLORS.DARK_GRAY_100,
    lineHeight: 20,
  },
  rowArrange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  columnArrange: {
    flexDirection: 'column',
  },
});
