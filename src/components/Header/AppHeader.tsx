import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icons} from '../../Theme/Icons';
import {COLORS} from '../../Theme/Colors';
import {PressableOpacity} from '../../components/Buttons/PressebleOpacity';
import {Typography} from '../../components/Typography';
import {DismissKeyboard} from '../../components/Screen/DismissKeyboard';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {GLOBALS} from '../../Constants/Globals';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useScaling} from '../../Hooks/useScaling';
import {useScreenPadding} from '../../Hooks/useScreenPadding';

export type AppHeaderProps = {
  title?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  tapShouldDismissKeyboard?: boolean;
  children?: React.ReactNode;
  withBackButton?: boolean;
  action?: React.ReactNode;
};

export const AppHeader = ({
  title,
  style,
  titleStyle,
  tapShouldDismissKeyboard,
  children,
  action,
  withBackButton = true,
}: AppHeaderProps) => {
  const {scaleIconSize} = useScaling();
  const screenPadding = useScreenPadding();

  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  const renderHeader = () => (
    <View style={[{padding: screenPadding}, style]}>
      <SafeAreaView edges={['top']}>
        <View style={styling.colHCenter}>
          {canGoBack && withBackButton && (
            <PressableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.backButton}
              testingSuffix="Header Go Back Button">
              <Icons.ArrowLeft {...scaleIconSize(GLOBALS.ICON_SIZE)} />
            </PressableOpacity>
          )}
          {!!title && (
            <Typography
              size={16}
              weight="700"
              color={COLORS.BLACK_NORMAL}
              style={[styles.title, titleStyle]}>
              {title}
            </Typography>
          )}
          {!!action && <View style={styles.action}>{action}</View>}
        </View>
        {children && <View>{children}</View>}
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
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  title: {
    marginHorizontal: GLOBALS.ICON_SCALE,
    textAlign: 'center',
  },
  action: {
    marginHorizontal: GLOBALS.ICON_SCALE,
    alignItems: 'flex-end',
  },
});
