import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {COLORS} from '../../Theme/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppHeader, AppHeaderProps} from '../../components/Header/AppHeader';
import {ConditionalWrapper} from '../../components/ConditionalWrapper';
import {useScreenPadding} from '../../Hooks/useScreenPadding';

export type AppScreenProps = {
  children: React.ReactNode[] | React.ReactNode;
  header?: AppHeaderProps;
  viewType?: 'fixed' | 'scroll';
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  edges?: Edge[];
};

export const AppScreen = ({
  children,
  header,
  viewType = 'scroll',
  style,
  contentContainerStyle,
  edges = ['right', 'left', ...(!header ? ['top' as Edge] : [])],
}: AppScreenProps) => {
  const padding = useScreenPadding();

  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      {header && <AppHeader {...header} />}
      <ConditionalWrapper
        condition={viewType === 'scroll'}
        wrapper={RenderScrollView}
        style={contentContainerStyle}>
        <View
          style={[styling.flexGrow, {padding}, contentContainerStyle]}
          testID="content container">
          {children}
        </View>
      </ConditionalWrapper>
    </SafeAreaView>
  );
};

const RenderScrollView = (wrapperChildren: React.ReactNode) => {
  return (
    <KeyboardAwareScrollView
      style={styling.fill}
      contentContainerStyle={styling.flexGrow}
      enableOnAndroid>
      <SafeAreaView edges={['bottom']} style={styling.flexGrow}>
        {wrapperChildren}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    ...styling.flexGrow,
  },
});
