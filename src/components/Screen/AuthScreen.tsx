import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { styling } from '../../Theme/Styles/GlobalStyles';
import { COLORS } from '../../Theme/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthHeader, AuthHeaderProps } from '../../components/Header/AuthHeader';
import { GLOBALS } from '../../Constants/Globals';
import { ConditionalWrapper } from '../../components/ConditionalWrapper';

export type AuthScreenProps = {
  children: React.ReactNode[] | React.ReactNode;
  header: AuthHeaderProps;
  viewType?: 'fixed' | 'scroll';
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  edges?: Edge[];
};

export const AuthScreen = ({
  children,
  header,
  style,
  contentContainerStyle,
  viewType = 'scroll',
  edges = ['right', 'left', ...(!header ? ['top' as Edge] : [])],
}: AuthScreenProps) => {
  const Wrapper = viewType === 'scroll' ? SafeAreaView : View;
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      {header && <AuthHeader {...header} />}
      <ConditionalWrapper condition={viewType === 'scroll'} wrapper={RenderScrollView}>
        <Wrapper
          edges={['bottom']}
          testID="authScreenContent"
          style={[styles.contentContainer, contentContainerStyle]}
        >
          {children}
        </Wrapper>
      </ConditionalWrapper>
    </SafeAreaView>
  );
};

const RenderScrollView = (wrapperChildren: React.ReactNode) => {
  return (
    <KeyboardAwareScrollView
      style={styling.fill}
      contentContainerStyle={styling.flexGrow}
      enableOnAndroid
    >
      {wrapperChildren}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingTop: 24,
    paddingHorizontal: GLOBALS.SCREEN_PADDING,
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: COLORS.WHITE,
    ...styling.flexGrow,
  },
});
