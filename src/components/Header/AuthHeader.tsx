import React from 'react';
import { Image, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Typography } from '../../components/Typography';
import { PressableOpacity } from '../../components/Buttons/PressebleOpacity';
import { Icons } from '../../Theme/Icons';
import { COLORS } from '../../Theme/Colors';
import { DismissKeyboard } from '../../components/Screen/DismissKeyboard';
// import Stepper from '../../components/Stepper';
import { IMAGES } from '../../Theme/Images';
import { GLOBALS } from '../../Constants/Globals';
import { SafeAreaView } from 'react-native-safe-area-context';

export type AuthHeaderProps = {
  title: string;
  text: string;
  showIcon?: boolean;
  style?: StyleProp<ViewStyle>;
  backButtonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  tapShouldDismissKeyboard?: boolean;
  currentIndex?: number;
  barLength?: number;
};

const ICON_SIZE = 24;

export const AuthHeader = ({
  title,
  text,
  titleStyle,

  tapShouldDismissKeyboard,
  currentIndex,
//   barLength = 5,
}: AuthHeaderProps) => {
  const navigation = useNavigation();

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image source={IMAGES.LOGIN_WATERMARK} resizeMode="contain" style={styles.headerImage} />
      <SafeAreaView edges={['top']}>
        <PressableOpacity onPress={navigation.goBack} testingSuffix="Header Go Back Button">
          <Icons.ArrowLeft width={ICON_SIZE} height={ICON_SIZE} />
        </PressableOpacity>

        <View style={styles.headerTextWrapper}>
          <Typography size={20} weight="700" style={[styles.headerTitle, titleStyle]}>
            {title}
          </Typography>
          <Typography size={14}>{text}</Typography>
        </View>
        {currentIndex === undefined ? (
          <View />
        ) : (
            <View/>
        //   <Stepper length={barLength} activeStep={currentIndex!} />
        )}
      </SafeAreaView>
    </View>
  );

  return tapShouldDismissKeyboard ? (
    <DismissKeyboard>{renderHeader()}</DismissKeyboard>
  ) : (
    renderHeader()
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: COLORS.OLIVE_LIGHT,
    paddingHorizontal: GLOBALS.SCREEN_PADDING,
  },
  headerTextWrapper: {
    paddingBottom: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerTitle: {
    paddingTop: 12,
    paddingBottom: 4,
    color: COLORS.BLACK_NORMAL_ACTIVE,
  },
  headerImage: { position: 'absolute', right: 0, height: '100%' },
});
