import { COLORS } from '@/Theme/Colors';
import { GLOBALS } from '@/Constants/Globals';
import { styling } from '@/Theme/Styles/GlobalStyles';
import { StyleSheet } from 'react-native';

export const stylesInput = StyleSheet.create({
  container: {
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
    borderWidth: 1,
    borderColor: COLORS.WHITE_NORMAL_HOVER,
  },
  baseTextInput: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontFamily: 'Swiss721BT-Roman',
    fontSize: 14,
    color: COLORS.BLACK_NORMAL,
  },

  inputWithLeftIcon: {
    paddingLeft: GLOBALS.ICON_SCALE + 16,
  },
  inputWithRightIcon: {
    paddingRight: GLOBALS.ICON_SCALE + 16,
  },
  focused: {
    borderColor: COLORS.TEAL_LIGHT_ACTIVE,
  },
  iconWrapper: {
    ...styling.absolute,
    ...styling.rowHCenter,
    paddingHorizontal: 12,
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
  },
  bottomInfoContainer: {
    ...styling.row,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomAlert: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 44,
    backgroundColor: COLORS.NEUTRAL_100,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.NEUTRAL_200,
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
    elevation: 3,
    shadowColor: COLORS.RED_NORMAL,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 1,
    backgroundColor: COLORS.RED_LIGHT,
  },
  errorText: {
    marginLeft: 10,
    flex: 1,
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
    paddingHorizontal: 8,
  },
});
