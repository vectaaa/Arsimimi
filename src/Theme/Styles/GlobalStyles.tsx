import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../Theme/Colors';
import {layouts} from '../../Theme/Styles/Layouts';
import {fontAlignments} from './Fonts';
import {GLOBALS} from '../../Constants/Globals';

export const styling = StyleSheet.create({
  ...layouts,
  ...fontAlignments,
  componentMargin: {
    marginBottom: 24,
  },
  borderRadius: {
    borderRadius: 4,
  },
  boxHeight: {
    height: 168,
  },
  font: {
    fontFamily: 'georgiab',
    color: COLORS.ORANGE_THICK,
    fontSize: 20,
  },
  descText: {
    fontFamily: 'georgia',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: COLORS.DARK_GRAY,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  padding: {paddingTop: 24},
  shadow: {
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: COLORS.NEUTRAL_100,
        shadowColor: COLORS.NEUTRAL_400,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: GLOBALS.ANDROID_ELEVATION,
      },
    }),
  },
});
