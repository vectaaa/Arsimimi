import {COLORS} from '../../Theme/Colors';
import {GLOBALS} from '../../Constants/Globals';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {StyleSheet} from 'react-native';

export const stylesInput = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    borderRadius: 4,
  },
  baseContainer: {
    ...styling.relative,
    ...styling.borderRadius,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 5,
    ...styling.borderRadius,
    flexDirection: 'row',
    flex: 1,
  },
  bordered: {
    borderWidth: 0.6,
    borderColor: COLORS.BORDERBLACK,
  },
  baseTextInput: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontFamily: 'georgia',
    fontSize: 14,
    color: COLORS.ORANGE_THICK,
  },

  inputWithLeftIcon: {
    paddingLeft: GLOBALS.ICON_SCALE + 16,
  },
  inputWithRightIcon: {
    paddingRight: GLOBALS.ICON_SCALE + 16,
  },
  focused: {
    borderColor: COLORS.BORDERBLACK,
  },
  iconWrapper: {
    ...styling.absolute,
    ...styling.rowHCenter,
    paddingHorizontal: 24,
    top: 0,
    bottom: 0,
    overflow: 'visible',
  },
  iconRightWrapper: {
    right: 0,
  },
  iconLeftWrapper: {
    left: 0,
  },
  inputLabel: {
    marginBottom: 8,
    marginLeft: 16,
    color: '#848484',
    fontFamily: 'georgia',
  },
  bottomInfoContainer: {
    ...styling.row,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  bottomAlert: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 44,
    backgroundColor: COLORS.NEUTRAL_100,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.NEUTRAL_200,
    marginLeft: 15,
  },
  boxInputContainer: {
    padding: 16,
    backgroundColor: COLORS.WHITE,
    ...styling.borderRadius,
    height: 85,
  },
  boxInput: {
    flex: 1,
    fontFamily: 'Swiss721BT-Roman',
    fontSize: 14,
    color: COLORS.NEUTRAL_900,
    padding: 0,
  },
  amountInput: {
    flex: 1,
    fontFamily: 'Swiss721BT-Bold',
    fontSize: 24,
    height: 30,
    color: COLORS.NEUTRAL_900,
    padding: 0,
  },
  errorContainer: {
    borderColor: COLORS.RED_NORMAL,
    // elevation: 3,
    // shadowColor: COLORS.RED_NORMAL,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    // shadowOpacity: 0.5,
    // shadowRadius: 1,
    borderWidth: 1,
    backgroundColor: COLORS.TRANSPARENT,
  },
  errorText: {
    color: 'black',
    marginLeft: 0,
    fontFamily: 'georgia',
  },
  bottomButton: {
    marginLeft: 10,
  },
  currency: {
    alignSelf: 'flex-end',
    // Only border could align currency and amount
    borderWidth: 1,
    borderColor: COLORS.TRANSPARENT,
  },
  disabledInput: {
    backgroundColor: COLORS.BLACK_LIGHT,
    borderWidth: 0,
  },
  hint: {
    ...styling.row,
    alignItems: 'center',
  },

  hintText: {
    paddingHorizontal: 30,
  },
});
